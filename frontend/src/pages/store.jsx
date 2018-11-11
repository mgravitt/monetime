import React, { Component } from 'react';

import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'eosjs'; // https://github.com/EOSIO/eosjs
import { TextDecoder, TextEncoder } from 'text-encoding';

import '../styles/Store.css';
import Button from '@material-ui/core/Button';

const endpoint = "http://localhost:8888";

// NEVER store private keys in any source code in your real life development
// This is for demo purposes only!
const accounts = [
  {"name":"subscriber1", "privateKey":"5JhhMGNPsuU42XXjZ57FcDKvbb7KLrehN65tdTQFrH51uruZLHi", "publicKey":"EOS7ckzf4BMgxjgNSYV22rtTXga8R9Z4XWVhYp8TBgnBi2cErJ2hn"},
];

class Store extends Component {

  constructor(props) {
    super(props)
    this.state = {
      noteTable: [] // to store the table rows from smart contract
    };
    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  async handleSubscribe(event) {
    // stop default behaviour

    event.preventDefault();

    // collect form data
    let account = accounts[0]['name']
    let privateKey = accounts[0]['privateKey']

    // prepare variables for the switch below to send transactions
    let actionName = "";
    let actionData = {};

    actionName = "subscribe";
    actionData = {
      subscriber: account,
      dapp_account: "dappowner1"
    };

    // eosjs function call: connect to the blockchain
    const rpc = new JsonRpc(endpoint);
    const signatureProvider = new JsSignatureProvider([privateKey]);
    const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
    try {
      console.log(privateKey);
      const result = await api.transact({
        actions: [{
          account: "monetime",
          name: "subscribe",
          authorization: [{
            actor: account,
            permission: 'active',
          }],
          data: actionData,
        }]
      }, {
        blocksBehind: 3,
        expireSeconds: 30,
      });

      console.log(result);
      this.getTable();
    } catch (e) {
      console.log('Caught exception: ' + e);
      if (e instanceof RpcError) {
        console.log(JSON.stringify(e.json, null, 2));
      }
    }
  }

  render() {
    return (
      <div className="Store">
        <div className="Store-24h">
            <div className="buttons">
              <div className="button" onClick={this.handleSubscribe}>
                Start Membership
              </div>
              <div className="button">
                Sell Membership
              </div>
              <div className="offer">
                Best Offer: 18.4 EOS ($100)
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Store;