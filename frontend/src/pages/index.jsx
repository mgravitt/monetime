import React, { Component } from 'react';

import Menu from './menu';
import Store from './store';
import '../styles/Index.css';

class Index extends Component {

  render() {
    return (
      <div id="Index">
        <Menu />
        <Store storeId="wow" />
      </div>
    );
  }
}

export default Index;
