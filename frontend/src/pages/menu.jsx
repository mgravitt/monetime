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
      	though
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
