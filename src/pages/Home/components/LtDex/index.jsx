import React, { Component } from 'react';
import ImCirculr from '../ImCirculr';
import ImImToken from '../ImImToken';

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
      <div style={styles.wrapper}>
        <div className="fs30 color-white-3 text-center font-weight">Solution 01</div>
        <div className="fs50 color-white text-center font-weight">Decentralized Exchange</div>
        <ImCirculr />
        <ImImToken />
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: "auto",
    backgroundColor: '#333',
    padding: '100px 0',
    paddingBottom: '0px',
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
