import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImCirculr from './components/ImCirculr';
import ImImToken from './components/ImImToken';
import ImLooprWallet from './components/ImLooprWallet';
import ImLooprWallex from './components/ImLooprWallex';
import JoinUs from './components/JoinUs';
import PlatformIntro from './components/PlatformIntro';
import PlatformToolsIntro from './components/PlatformToolsIntro';
import PlatformJoinus from './components/PlatformJoinus';
import PlatformLanding from './components/PlatformLanding';
import PlatformBlackIntro from './components/PlatformBlackIntro';
import LeftContentDisplay from './components/LeftContentDisplay';
import IntroTab from './components/IntroTab';
import LtDex from './components/LtDex';
import LtWallet from './components/LtWallet';
import LtWallex from './components/LtWallex';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bg-white w-100">
        {false && <Header />}
        <PlatformLanding />
        <ImLooprWallex />
        <ImCirculr />
        <ImImToken />
        <ImLooprWallet />
        <JoinUs />
        <Footer />
      </div>
    );
  }
}
