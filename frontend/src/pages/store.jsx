import React, { Component } from 'react';

import '../styles/Store.css';
import Button from '@material-ui/core/Button';

class Store extends Component {

  render() {

    return (
      <div className="Store">
        <div className="Store-left">
        	<img src="/assets/store-icons/24h.png" />
          <Button>
            Start Membership
          </Button>
          <Button>
            Sell Membership
          </Button>
          Best Offer: 18.4 EOS ($100)
        </div>
        <div className="Store-right">
            <div className="Store-title">
              24-Hour Fitness
            </div>
            <div className="Membership-details">
Membership: Basic<br/>
Status: Active<br/>
Price: 1 EOS/mo. ($5.43/mo.)<br/>
Member Since: Sep 1998<br/>
Active Time: 10.17 years<br/>
            </div>
        </div>
      </div>
    );
  }
}

export default Store;