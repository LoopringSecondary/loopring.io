import React, { Component } from 'react';
import ImTokenDevice from '../Devices/ImToken';
import Typo from '../../../../../common/typo';

export default class ImImToken extends Component {
  static displayName = 'ImImToken';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bg-primary zb-b-t" style={{padding:'80px 0px'}}>
        <div hidden className="fs30 color-white-3 text-center font-weight">Solution 04</div>
        <div className="fs50 color-white text-center font-weight">Join Loopring DEX Ecosystem</div>
        <div className="pb50"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 pb15">
              <div className="pt50 pb50 pl10 pr10 bg-white text-center" style={{borderRadius:'8px'}}>
                <div className="mb10 fs24 color-black">List My Token </div>
                <div className="mb15 fs18 color-black-2">List your token on loopring DEXs for free.</div>
                <Typo.Button href="https://goo.gl/forms/2RUdyJxOPTdSBkbZ2" target="_blank" shape="pill" boder="bordered" type="primary" size="large" className="m5 bg-primary color-white">
                  Apply
                </Typo.Button>
              </div>
            </div>
            <div className="col-md-4 pb15">
              <div className="pt50 pb50 pl10 pr10 bg-white text-center" style={{borderRadius:'8px'}}>
                <div className="mb10 fs24 color-black">Become a DEX</div>
                <div className="mb15 fs18 color-black-2">Revolutionize crypto trading experience.</div>
                <Typo.Button href="https://wj.qq.com/s/2329875/d6a0" target="_blank" shape="pill" boder="bordered" type="primary" size="large" className="m5 bg-primary color-white">
                  Apply
                </Typo.Button>
              </div>
            </div>
            <div className="col-md-4 pb15">
              <div className="pt50 pb50 pl10 pr10 bg-white text-center" style={{borderRadius:'8px'}}>
                <div className="mb10 fs24 color-black">Provide Liquidity</div>
                <div className="mb15 fs18 color-black-2">Become a market maker to make money.</div>
                <Typo.Button href="https://wj.qq.com/s/2329875/d6a0" target="_blank" shape="pill" boder="bordered" type="primary" size="large" className="m5 bg-primary color-white">
                  Apply
                </Typo.Button>
              </div>
            </div>

          </div>
        </div>
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
