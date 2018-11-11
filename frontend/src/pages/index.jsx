import React, { Component } from 'react';

import Menu from './menu';
import Market from './market';
import Store from './store';
import '../styles/Index.css';

class Index extends Component {

  render() {
    return (
      <div id="Index">
        <Menu />
        <Market />
      </div>
    );
  }
}

export default Index;
