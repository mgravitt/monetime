import React, { Component } from 'react';

import '../styles/Menu.css';

class Menu extends Component {

  constructor(props) {
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange(event) {
    this.props.handlePageChange('market')
  }

  render() {

    let wowLi = ""
    let gymLi = ""
    let marketLi = <li id="Menu-browse" onClick={this.handlePageChange}>Browse Marketplace</li>
    if (this.props.subs && this.props.subs['wow']) {
      if (this.props.selected == 'wow')
        wowLi = <li className="selected">World of Warcraft</li>
      else
        wowLi = <li>World of Warcraft</li>
    }

    if (this.props.subs && this.props.subs['24h']) {
      if (this.props.selected == '24h')
        gymLi = <li className="selected">24-Hour Fitness</li>
      else
        gymLi = <li>24-Hour Fitness</li>
    }

    if (this.props.selected == 'market')
      marketLi = <li id="Menu-browse" className="selected" onClick={this.handlePageChange}>Browse Marketplace</li>

    return (
      <div id="Menu">
      	<div id="Menu-logo"><img src="/assets/ui/logo.svg" /></div>
        <ul>
          {marketLi}
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
