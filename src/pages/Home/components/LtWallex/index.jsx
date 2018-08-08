import React, { Component } from 'react';
import ImLooprWallex from '../ImLooprWallex';

export default class LtWallex extends Component {
  static displayName = 'LtWallex';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="" style={{padding:'100px 0px',backgroundColor: '#333',}}>
        <div className="fs30 color-white-3 text-center font-weight">Solution 03</div>
        <div className="fs50 color-white text-center font-weight">Wallex = Wallet + DEX</div>
        <ImLooprWallex />
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: "auto",

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
