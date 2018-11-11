import React, { Component } from 'react';

import '../styles/AppIcon.css';

class AppIcon extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: ''
    }
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange(event) {
    this.props.handlePageChange(this.props.symbol)
  }

  render() {

    let iconURL = "/assets/store-icons/" + this.props.symbol + ".png"

    return (
      <div className="AppIcon">
        <img onClick={this.handlePageChange} src={iconURL} /><br/>
        {this.props.name}
      </div>
    );
  }
}

export default AppIcon
