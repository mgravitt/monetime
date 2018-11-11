import React, { Component } from 'react';

import AppIcon from '../components/app-icon';

import '../styles/Market.css';

class Market extends Component {

  render() {

    return (
      <div id="Market">
        <section>
          <h2>Real-world Services</h2>
          <AppIcon name="24-Hour Fitness" symbol="24h" handlePageChange={this.props.handlePageChange} />
          <AppIcon name="HBO" symbol="hbo" handlePageChange={this.props.handlePageChange} />
          <AppIcon name="New York Times" symbol="nyt" handlePageChange={this.props.handlePageChange} />
          <AppIcon name="Verizon" symbol="verizon" handlePageChange={this.props.handlePageChange} />
        </section>
        <section>
          <h2>Games</h2>
          <AppIcon name="World of Warcraft" symbol="wow" handlePageChange={this.props.handlePageChange} />
          <AppIcon name="Angry Birds" symbol="birds" handlePageChange={this.props.handlePageChange} />
          <AppIcon name="Assassin's Creed" symbol="creed" handlePageChange={this.props.handlePageChange} />
          <AppIcon name="Minecraft" symbol="minecraft" handlePageChange={this.props.handlePageChange} />
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
