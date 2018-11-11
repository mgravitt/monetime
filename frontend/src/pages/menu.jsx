import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import '../styles/Menu.css';

const styles = theme => ({
  card: {
    margin: 20,
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  formButton: {
    marginTop: theme.spacing.unit,
    width: "100%",
  },
  pre: {
    background: "#ccc",
    padding: 10,
    marginBottom: 0,
  }
});

class Menu extends Component {

  render() {

    return (
      <div id="Menu">
      	<div id="Menu-logo">Monetime</div>
        <ul>
          <li>Browse Marketplace</li>
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

export default withStyles(styles)(Menu);
