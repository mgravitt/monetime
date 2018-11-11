import React, { Component } from 'react';

import Menu from './menu';
import Store from './store';
import '../styles/Index.css';

class Index extends Component {

  render() {
    return (
      <div id="Index">
        <Menu />
        <Store />
      </div>
    );
  }
}

export default Index;
