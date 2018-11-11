import React, { Component } from 'react';

import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'eosjs'; // https://github.com/EOSIO/eosjs
import { TextDecoder, TextEncoder } from 'text-encoding';

import '../styles/Store.css';

const endpoint = "http://localhost:8888";

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
    this.handleUnsubscribe = this.handleUnsubscribe.bind(this);
  }

  async handleSubscribe(event) {

    event.preventDefault();

    let account = accounts[0]['name']
    let privateKey = accounts[0]['privateKey']

    const rpc = new JsonRpc(endpoint);
    const signatureProvider = new JsSignatureProvider([privateKey]);
    const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
    try {

      console.log("storeID: " + this.props.storeId);
      const result = await api.transact({
        actions: [{
          account: "monetime",
          name: "subscribe",
          authorization: [{
            actor: account,
            permission: 'active',
          }],
          data: {
            subscriber: account,
            dapp_account: this.props.storeId
          }
        }]
      }, {
        blocksBehind: 3,
        expireSeconds: 30,
      })

      console.log(result)
      this.props.handleBlockchainTable()
    } catch (e) {
      console.log('Caught exception: ' + e);
      if (e instanceof RpcError) {
        console.log(JSON.stringify(e.json, null, 2));
      }
    }
  }

  async handleUnsubscribe(event) {

    event.preventDefault();

    let account = accounts[0]['name']
    let privateKey = accounts[0]['privateKey']

    const rpc = new JsonRpc(endpoint);
    const signatureProvider = new JsSignatureProvider([privateKey]);
    const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
    try {

      console.log("storeID: " + this.props.storeId);
      const result = await api.transact({
        actions: [{
          account: "monetime",
          name: "unsubscribe",
          authorization: [{
            actor: account,
            permission: 'active',
          }],
          data: {
            subscriber: account,
            dapp_account: this.props.storeId
          }
        }]
      }, {
        blocksBehind: 3,
        expireSeconds: 30,
      })

      console.log(result)
      this.props.handleBlockchainTable()
    } catch (e) {
      console.log('Caught exception: ' + e);
      if (e instanceof RpcError) {
        console.log(JSON.stringify(e.json, null, 2));
      }
    }
  }

  render() {


    let storeClass = "Store-" + this.props.storeId + (this.props.subscribed ? "-2" : "")

    let buttonName = this.props.subscribed ? "Pause Subscription" : "Start Subscription"

    return (
      <div className="Store">
        <div className={storeClass}>
            <div className="buttons">
              <div className="button" onClick={this.handleSubscribe}>
                {buttonName}
              </div>
              <div className="button" onClick={this.handleUnsubscribe}>
                Sell Subscription
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