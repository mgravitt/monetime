import React, { Component } from 'react';

import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'eosjs'; // https://github.com/EOSIO/eosjs
import { TextDecoder, TextEncoder } from 'text-encoding';


import Menu from './menu';
import Market from './market';
import Store from './store';
import '../styles/Index.css';

const endpoint = "http://localhost:8888";

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: '',
      subs: [],
    }

    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleBlockchainTable = this.handleBlockchainTable.bind(this)

  }

  handlePageChange(page) {
    console.log(page)
    this.setState({
      page: page
    })
  }

  handleBlockchainTable() {
    const rpc = new JsonRpc(endpoint);
    rpc.get_table_rows({
      "json": true,
      "code": "monetime",   // contract who owns the table
      "scope": "monetime",  // scope of the table
      "table": "subs",    // name of the table as specified by the contract abi
      "limit": 100,
    }).then(result => {

      console.log(result.rows)

      let subs = {}

      for (let i in result.rows) {
        subs[result.rows[i]['dapp_account']] = true
      }

      console.log(subs)

      this.setState({ subs: subs })
    });
  }

  render() {

    let pageDOM = <Market handlePageChange={this.handlePageChange} />
    if (this.state.page == 'wow') {
      let subscribed = this.state.subs[this.state.page]
      pageDOM = <Store storeId="wow" handlePageChange={this.handlePageChange} handleBlockchainTable={this.handleBlockchainTable} subscribed={subscribed}  />
    } else if (this.state.page == '24h') {
      let subscribed = false
      if (this.state.subs[this.state.page])
        subscribed = true
      console.log("subscribed: " + subscribed)
      pageDOM = <Store storeId="24h" handlePageChange={this.handlePageChange} handleBlockchainTable={this.handleBlockchainTable} subscribed={subscribed} />
    }


    return (
      <div id="Index">
        <Menu handlePageChange={this.handlePageChange} subs={this.state.subs}/>
        {pageDOM}
      </div>
    );
  }
}

export default Index;
