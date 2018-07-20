import React, { Component } from 'react';
import ImLooprWallet from '../ImLooprWallet';

export default class LtDex extends Component {
  static displayName = 'LtDex';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bg-primary" style={{padding:'100px 0px'}}>
        <div className="fs30 color-white-3 text-center font-weight">Solution 02</div>
        <div className="fs50 color-white text-center font-weight">Digital Assets Wallet</div>
        <ImLooprWallet />
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: "auto",
    backgroundColor: '#fff',
    padding: '100px 0',
  },
  body: {
    textAlign: 'left',
  },
  title: {
    fontSize: 48,
    color: '#000',
    marginBottom: 20,
    marginTop: 50,
  },
  text: {
    fontSize: 14,
    color: '#666',
    lineHeight: '24px',
    letterSpacing: 2,
  },
  image: {
    margin: '20px auto 0 auto',
    display: 'block',
  },
};
