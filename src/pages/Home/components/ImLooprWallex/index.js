import React, { Component } from 'react';
import ImTokenDevice from '../Devices/ImToken';
import Typo from '../../../../../@hzbdesign/typo';

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
      <div className="pt50 pb50">
        <div className="fs30 color-black-3 text-center font-weight">Solution 01</div>
        <div className="fs50 color-black text-center font-weight">Web Wallex </div>
        <div className="text-center pt10 pb0 d-block d-sm-none">
          <div className="row justify-content-center ml0 mr0">
            <div className="col-auto">
              <div className="cd-mac cd-pro cd-center cd-scale-40">
                <div className="cd-top"></div>
                <div className="cd-bottom"></div>
                <div className="cd-camera"></div>
                <div className="cd-notch"></div>
                <div className="cd-screen">
                  <img src={require('../Devices/products/wallex-loopr/place-order.png')} />
                </div>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center" style={{textAlign:'left'}}>
              <div className="text-center pt15">
                <div className="fs40 color-black">Loopr</div>
                <div className="fs20 color-black-2">A Web Wallet with Loopring DEX </div>
                <div className="pt10 pb10">
                  <Typo.Button href="http://loopr.loopring.io" target="_blank" shape="pill" size="" className="m5 bg-primary color-white">
                    Try The Demo
                  </Typo.Button>
                  <Typo.Button href="http://loopring.org/developers.html" target="_blank" shape="pill" boder="bordered" size="" className="m5 bg-primary color-white">
                    Learn More
                  </Typo.Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center d-none d-sm-block">
          <div className="pb50"></div>
          <div className="row justify-content-center ml0 mr0">
            <div className="col-auto d-flex align-items-center" style={{textAlign:'left'}}>
              <div className="text-center">
                <div className="fs40 color-black">Loopr</div>
                <div className="fs20 color-black-2">A Web Wallet with Loopring DEX </div>
                <div className="pt10 pb10">
                  <Typo.Button href="http://loopr.loopring.io" target="_blank" shape="pill" size="large" className="m5 bg-primary color-white">
                    Try The Demo
                  </Typo.Button>
                  <Typo.Button href="http://loopring.org/developers.html" target="_blank" shape="pill" boder="bordered" size="large" className="m5 bg-primary color-white">
                    Learn More
                  </Typo.Button>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="cd-mac cd-pro cd-center">
                <div className="cd-top"></div>
                <div className="cd-bottom"></div>
                <div className="cd-camera"></div>
                <div className="cd-notch"></div>
                <div className="cd-screen">
                  <img src={require('../Devices/products/wallex-loopr/place-order.png')} />
                </div>
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
    overflow: 'hidden',
    padding:'100px 0px'
  },
  body: {
    textAlign: 'left',
  },
  title: {
    fontSize: 48,
    color: '#000',
    marginBottom: 20,
    marginTop: 10,
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
