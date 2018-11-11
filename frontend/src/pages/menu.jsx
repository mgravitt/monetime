import React, { Component } from 'react';

import '../styles/Menu.css';

class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: ''
    }
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange(event) {
    this.props.handlePageChange('market')
  }

  render() {

    return (
      <div id="Menu">
      	<div id="Menu-logo">Monetime</div>
        <ul>
          <li id="Menu-browse" onClick={this.handlePageChange}>Browse Marketplace</li>
        </ul>
      	<h2>My Memberships</h2>
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

export default Menu;
