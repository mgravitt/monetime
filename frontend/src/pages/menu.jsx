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

    let wowLi = ""
    let gymLi = ""
    if (this.props.subs && this.props.subs['wow'])
      wowLi = <li>World of Warcraft</li>

    if (this.props.subs && this.props.subs['24h'])
      gymLi = <li>24-Hour Fitness</li>

    return (
      <div id="Menu">
      	<div id="Menu-logo"><img src="/assets/ui/logo.svg" /></div>
        <ul>
          <li id="Menu-browse" onClick={this.handlePageChange}>Browse Marketplace</li>
        </ul>
      	<h2>My Subscriptions</h2>
      	<ul>
      		{wowLi}
          {gymLi}
      		
      		<li>Minecraft</li>
      		<li>Verizon Wireless</li>
      		<li>Evernote</li>
      	</ul>
      </div>
    );
  }
}

export default Menu;
