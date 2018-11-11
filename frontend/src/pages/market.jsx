import React, { Component } from 'react';

import AppIcon from '../components/app-icon';

import '../styles/Market.css';

class Market extends Component {

  render() {

    return (
      <div id="Market">
        <section>
          <h2>Real-world Services</h2>
          <AppIcon name="24-Hour Fitness" symbol="24h" />
          <AppIcon name="HBO" symbol="hbo" />
          <AppIcon name="New York Times" symbol="nyt" />
          <AppIcon name="Verizon" symbol="verizon" />
        </section>
        <section>
          <h2>Games</h2>
          <AppIcon name="World of Warcraft" symbol="wow" />
          <AppIcon name="Angry Birds" symbol="birds" />
          <AppIcon name="Assassin's Creed" symbol="creed" />
          <AppIcon name="Minecraft" symbol="minecraft" />
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
