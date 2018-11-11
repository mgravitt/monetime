import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import '../styles/Market.css';

class Market extends Component {

  render() {

    return (
      <div id="Market">
      	<div id="Menu-logo">Monetime</div>
        <div id="Menu-marketplace">Browse Marketplace</div>
      	<div id="Menu-header">My Memberships</div>
      	<ul>
      		<li>24-Hour Fitness</li>
      		<li>World of Warcraft</li>
      		<li>Minecraft</li>
      		<li>Verizon Wireless</li>
      		<li>Evernote</li>
      	</ul>
      </div>
    );
  }
}

export default Market
