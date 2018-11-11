#include "monetime.hpp"
#include <string>


void monetime::regdapp ( const account_name dapp_account,
                            const string    description,
                            const account_name token_contract,
                            const asset     hourly_rate ) {

    dapp_table d_t (_self, _self);
    d_t.emplace (_self, [&](auto &d) {
        d.dapp_account = dapp_account;
        d.description = description;
        d.token_contract = token_contract;
        d.hourly_rate = hourly_rate;
    });
}


// void setallow (const account_name subscriber, 
//                 const account_name dapp_account, 
//                 const asset         allamount ) {

//     allowance_table a_t (_self, _self);
//     a_t.emplace (_self, [&](auto &a) {
//         a.allowance_id = a_t.available_primary_key();
//         a.subscriber = subscriber;
//         a.dapp_account = dapp_account;
//         a.allamount = allamount;
//     });
// }

void monetime::checksub (const account_name dapp_account, 
                         const account_name subscriber) {

    sub_table s_t (_self, _self);
    auto d_index = s_t.get_index<N(dapp)>();
    auto d_itr = d_index.find (dapp_account);
    eosio_assert (d_itr != d_index.end(), "Account is not subscribed.");

    eosio_assert (now() <= d_itr->expiration, "Subscription has expired.");
    
}
  
  
void monetime::subscribe ( const account_name subscriber,
                            const account_name dapp_account ) {
    
    dapp_table d_t (_self, _self);
    auto d_itr = d_t.find (dapp_account);
    eosio_assert (d_itr != d_t.end(), "Dapp not found.");

    sub_table s_t (_self, _self);
    s_t.emplace (_self, [&](auto &s) {
        s.sub_id = s_t.available_primary_key();
        s.subscriber = subscriber;
        s.dapp_account = dapp_account;
        s.token_contract = d_itr->token_contract;
        s.hourly_rate = d_itr->hourly_rate;
        s.lifetime_pay = d_itr->hourly_rate * 0;
        s.expiration = now();
    });
}

// void monetime::ratedapp (const account_name dapp_account, 
//                     const account_name subscriber, 
//                     const uint8_t rating) {
//     sub_table s_t (_self, _self);
//     auto s_index = s_t.get_index<N(subscriber)>();
//     auto s_itr = s_index.find (dapp_account);
//     eosio_assert (s_itr != s_index.end(), "Subscriber is not subscribed to this dapp.");

//     dapp_table d_t (_self, _self);
//     auto d_itr = 
// }
    

void monetime::renew ( const account_name dapp_account) {
    sub_table s_t (_self, _self);
    auto d_index = s_t.get_index<N(dapp)>();
    auto d_itr = d_index.find (dapp_account);
    eosio_assert (d_itr != d_index.end(), "Account does not have a dapp registered.");

    while (d_itr != d_index.end() && d_itr->dapp_account == dapp_account) {
        paytoken (d_itr->token_contract, _self, d_itr->dapp_account, d_itr->hourly_rate, "subscription update");
        d_index.modify (d_itr, _self, [&](auto &s) {
            s.last_paid = now();
            s.expiration += 60 * 60;
            s.lifetime_pay += d_itr->hourly_rate;
        });
        balance_table b_t (_self, d_itr->subscriber); 
        auto b_itr = b_t.find (d_itr->hourly_rate.symbol);
        eosio_assert (b_itr != b_t.end(), "Subscriber does not have a balance.");
        b_t.modify (b_itr, _self, [&](auto &b) {
            b.funds =- d_itr->hourly_rate;
        });
        d_itr++;
    }
}



void monetime::apply(const account_name contract, const account_name act)
{
    if (act == N(transfer))
    {
        transferReceived(unpack_action_data<currency::transfer>(), contract);
        return;
    }

    auto &thiscontract = *this;

    switch (act)
    {
        EOSIO_API(monetime, (regdapp)(subscribe)(renew))
    };
}

void monetime::transferReceived(const currency::transfer &transfer, const account_name code)
{
    if (transfer.to != _self)
    {
        return;
    }
              
    print("Account Name     :   ", name{code}, "\n");
    print("From             :   ", name{transfer.from}, "\n");
    print("To               :   ", name{transfer.to}, "\n");
    print("Asset            :   ", transfer.quantity, "\n");
    print("Received Amount  :   ", transfer.quantity.amount, "\n");
    print("Received Symbol  :   ", transfer.quantity.symbol, "\n");
    print("Memo             :   ", transfer.memo, "\n");
    
    balance_table balances(_self, transfer.from);
    asset new_balance;
    auto it = balances.find(transfer.quantity.symbol);
    if(it != balances.end()) {
        eosio_assert (it->token_contract == code, "Transfer does not match existing token contract.");
        balances.modify(it, _self, [&](auto& bal){
            // Assumption: total currency issued by eosio.token will not overflow asset
            bal.funds += transfer.quantity;
            new_balance = bal.funds;
        });
    }
    else
        balances.emplace(_self, [&](auto& bal){
            bal.funds = transfer.quantity;
            bal.token_contract  = code;
            new_balance = transfer.quantity;
        });

    print(name{transfer.from}, " deposited:       ", transfer.quantity, "\n");
    print(name{transfer.from}, " funds available: ", new_balance);
}


extern "C"
{
    using namespace eosio;

    void apply(uint64_t receiver, uint64_t code, uint64_t action)
    {
        auto self = receiver;
        monetime contract(self);
        contract.apply(code, action);
        eosio_exit(0);
    }
}
