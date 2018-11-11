import React, { Component } from 'react';

import AppIcon from '../components/app-icon';

import '../styles/Market.css';

class Market extends Component {

  render() {

    return (
      <div id="Market">
        <section>
          <h2>Apps</h2>
          <AppIcon name="World of Warcraft" symbol="wow" handlePageChange={this.props.handlePageChange} />
          <AppIcon name="24-Hour Fitness" symbol="24h" handlePageChange={this.props.handlePageChange} />
          <AppIcon name="New York Times" symbol="nyt" handlePageChange={this.props.handlePageChange} />
          <AppIcon name="Verizon" symbol="verizon" handlePageChange={this.props.handlePageChange} />
        </section>
        <section>
          <h2>Charities</h2>
          <AppIcon name="Red Cross" symbol="redcross" handlePageChange={this.props.handlePageChange} />
          <AppIcon name="Susan G. Komen" symbol="komen" handlePageChange={this.props.handlePageChange} />
          <AppIcon name="Unicef" symbol="unicef" handlePageChange={this.props.handlePageChange} />
          <AppIcon name="USO" symbol="uso" handlePageChange={this.props.handlePageChange} />
        </section>
        {/*<section>
          <h2>Productivity</h2>
          <AppIcon name="Dropbox" symbol="dbx" />
          <AppIcon name="Duolingo" symbol="duolingo" />
          <AppIcon name="Evernote" symbol="evernote" />
          <AppIcon name="Tweetbot" symbol="tweetbot" />
        </section>*/}
      </div>
    );
  }
}

export default Market
