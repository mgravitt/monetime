#include <eosiolib/eosio.hpp>
#include <eosiolib/asset.hpp>
#include <eosiolib/currency.hpp>

#include <string>
#include <eosiolib/eosio.hpp>
#include <eosiolib/asset.hpp>
#include <eosiolib/types.hpp>
#include <eosiolib/action.hpp>
#include <eosiolib/symbol.hpp>
#include <eosiolib/crypto.h>
#include <cstring>
#include <functional>

using namespace eosio;
using namespace std;

class mondapp : public contract
{

  public:
    mondapp(account_name self) : contract(self) {}

    // @abi action
    void rundapp(const account_name subscriber);

    void apply(const account_name contract, const account_name act);

    void transferReceived(const currency::transfer &transfer, const account_name code);
    
  private:
  
    // @abi table balances i64
    struct balance {
        asset funds;
        account_name token_contract;
        uint64_t primary_key() const { return funds.symbol; }
    };

    typedef eosio::multi_index<N(balances), balance> balance_table;

     // @abi table subs i64
    struct sub {
        uint64_t        sub_id;
        account_name    subscriber;
        account_name    dapp_account;
        account_name    token_contract;
        asset           hourly_rate;
        asset           lifetime_pay;
        uint32_t        last_paid;
        uint32_t        expiration;

        uint64_t primary_key() const { return sub_id; }
        account_name by_subscriber() const { return subscriber; }
        account_name by_dapp() const { return dapp_account; }
    };

    typedef eosio::multi_index<N(subs), sub,
        indexed_by <N(subscriber), 
            const_mem_fun<sub, account_name, &sub::by_subscriber>>,
        indexed_by<N(dapp),
            const_mem_fun<sub, account_name, &sub::by_dapp>>
    > sub_table;


    void paytoken(  const account_name  token_contract,
                    const account_name from,
                    const account_name to,
                    const asset token_amount,
                    const string memo)
    {
        print("---------- Payment -----------\n");
        print("Token Contract   : ", name{token_contract}, "\n");
        print("From             : ", name{from}, "\n");
        print("To               : ", name{to}, "\n");
        print("Amount           : ", token_amount, "\n");
        print("Memo             : ", memo, "\n");

        action(
            permission_level{from, N(active)},
            token_contract, N(transfer),
            std::make_tuple(from, to, token_amount, memo))
            .send();

        print("---------- End Payment -------\n");
    }

    void checksub ( const account_name subscriber) {

        sub_table s_t (N(monetime), N(monetime));
        auto d_index = s_t.get_index<N(dapp)>();
        auto d_itr = d_index.find (_self);

        bool subscribed = false;
        print ("Dapp account: ", d_itr->dapp_account, "\n");
        print ("Self:          ", _self, "\n" );
        while (d_itr != d_index.end() && d_itr->dapp_account == _self) {
            print ("Subscriber: ", name {subscriber}, "\n");
            if (d_itr->subscriber == subscriber) {
                eosio_assert (d_itr->expiration > now(), "Subscription has expired.");
                subscribed = true;
            }
            d_itr++;
        }

        print ("Subscribed: ", subscribed, "\n");

        eosio_assert (subscribed, "Account is not subscribed.");
    }

};


//EOSIO_ABI(mondapp, (rundapp) )