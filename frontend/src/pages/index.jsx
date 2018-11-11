import React, { Component } from 'react';

import Menu from './menu';
import Market from './market';
import Store from './store';
import '../styles/Index.css';

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: ''
    }
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange(page) {
    console.log(page)
    this.setState({
      page: page
    })
  }

  render() {

    let pageDOM = <Market handlePageChange={this.handlePageChange} />
    if (this.state.page == 'wow') {
      pageDOM = <Store storeId="wow" handlePageChange={this.handlePageChange} />
    } else if (this.state.page == '24h') {
      pageDOM = <Store storeId="24h" handlePageChange={this.handlePageChange} />
    } else if (this.state.page == 'wow-2') {
      pageDOM = <Store storeId="wow-2" handlePageChange={this.handlePageChange} />
    } else if (this.state.page == '24h-2') {
      pageDOM = <Store storeId="24h-2" handlePageChange={this.handlePageChange} />
    }


    return (
      <div id="Index">
        <Menu handlePageChange={this.handlePageChange} />
        {pageDOM}
      </div>
    );
  }
}

export default Index;
