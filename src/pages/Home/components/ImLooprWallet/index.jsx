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
      <div className="bg-grey-50 zb-b-t pt50 pb50">
        <div className="fs30 color-black-3 text-center font-weight">Solution 04</div>
        <div className="fs50 color-black text-center font-weight">Noncustodial Wallet</div>
        <div className="pb50"></div>
        <div className="row justify-content-center ml0 mr0">
          <div className="col-auto">
            <div class="cd-iphone-6 cd-scale-80">
              <div class="cd-body">
                <div class="cd-sound"></div>
                <div class="cd-sleep"></div>
                <div class="cd-camera"></div>
                <div class="cd-ear"></div>
                <div class="cd-home"></div>
                <div class="cd-screen">
                  <img src={require('../Devices/products/wallet-loopr/wallets.png')} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto d-none d-sm-block">
            <div class="cd-iphone-6 cd-scale-80">
              <div class="cd-body">
                <div class="cd-sound"></div>
                <div class="cd-sleep"></div>
                <div class="cd-camera"></div>
                <div class="cd-ear"></div>
                <div class="cd-home"></div>
                <div class="cd-screen">
                  <img src={require('../Devices/products/wallet-loopr/assets.png')} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto d-none d-sm-block">
            <div class="cd-iphone-6 cd-scale-80">
              <div class="cd-body">
                <div class="cd-sound"></div>
                <div class="cd-sleep"></div>
                <div class="cd-camera"></div>
                <div class="cd-ear"></div>
                <div class="cd-home"></div>
                <div class="cd-screen">
                  <img src={require('../Devices/products/wallet-loopr/place-order-success.png')} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto d-flex align-items-center" style={{textAlign:'right'}}>
            <div className="text-center">
              <img className="mb10 d-none d-sm-block" style={{borderRadius:'12px',width:'100px',height:'100px',margin:'0 auto'}} src={require('../Devices/products/logos/loopr-ios.png')} />
              <div className="mt10 fs40 color-black ">Loopr iOS</div>
              <div className="fs20 color-black-2">A Native Wallet with Loopring DEX</div>
              <div hidden className="pt5 pb5 text-left">
                <div className="fs14 pb5 color-grey-500">
                  ☉ Open sourced at 2018.07
                </div>
                <div className="fs14 pb5 color-grey-500">
                  ☉ Easy to customize UI theme
                </div>
                <div className="fs14 pb5 color-grey-500">
                  ☉ Trading without touching you privatekey
                </div>
                <div className="fs14 pb5 color-grey-500">
                  ☉ Walelts Supported: Metamask, Ledger, TREZOR, Loopr, tokenenst
                </div>
              </div>
              <div className="pt10 pb10">

                <div className="text-center d-block d-sm-none">
                  <Typo.Button shape="pill" size="" className="m5 bg-primary color-white">
                    Coming Soon
                  </Typo.Button>
                  <Typo.Button href="http://loopring.org/developers.html" target="_blank" shape="pill" boder="bordered" type="primary" size="" className="m5 bg-primary color-white">
                    Learn More
                  </Typo.Button>
                </div>
                <div className="text-center d-none d-sm-block">
                  <Typo.Button href="http://upwallet.io" target="_blank" shape="pill" boder="bordered" type="primary" size="large" className="m5 bg-primary color-white">
                    Example
                  </Typo.Button>
                  <Typo.Button href="http://loopring.org/developers.html" target="_blank" shape="pill" boder="bordered" type="primary" size="large" className="m5 bg-primary color-white">
                    Learn More
                  </Typo.Button>
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
