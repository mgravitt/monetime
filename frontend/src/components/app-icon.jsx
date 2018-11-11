import React, { Component } from 'react';

import '../styles/AppIcon.css';

class AppIcon extends Component {

  render() {

    let iconURL = "/assets/store-icons/" + this.props.symbol + ".png"

    return (
      <div class="AppIcon">
        <img src={iconURL} /><br/>
        {this.props.name}
      </div>
    );
  }
}

export default AppIcon
