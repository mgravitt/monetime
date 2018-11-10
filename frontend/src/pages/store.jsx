import React, { Component } from 'react';

import '../styles/Store.css';
import Button from '@material-ui/core/Button';

class Store extends Component {

  render() {

    return (
      <div className="Store">
      	<img src="/assets/store-icons/24h.png" />
        <div className="Store-title">
        24-Hour Fitness
          <Button>
            Subscribe
          </Button>
        </div>
      </div>
    );
  }
}

export default Store;