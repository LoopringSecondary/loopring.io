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
      <div style={styles.wrapper}>
        <div className="row justify-content-center">
          <div className="col-auto d-flex align-items-center" style={{textAlign:'right'}}>
            <div className="text-center">
              <img className="mb10" style={{borderRadius:'12px',width:'100px',height:'100px'}} src={require('../Devices/products/logos/imtoken.png')} />
              <div className="fs40 color-white">ImToken DEX</div>
              <div className="fs20 color-white-2">a loopring DEX embedded in imToken</div>
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
                <Typo.Button shape="pill" size="large" className="m5 bg-primary color-white">
                  Coming Soon
                </Typo.Button>
                <Typo.Button href="http://loopring.org/developers.html" target="_blank" shape="pill" boder="bordered" size="large" className="m5 bg-primary color-white">
                  Document
                </Typo.Button>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div class="cd-iphone-6 cd-scale-80">
              <div class="cd-body">
                <div class="cd-sound"></div>
                <div class="cd-sleep"></div>
                <div class="cd-camera"></div>
                <div class="cd-ear"></div>
                <div class="cd-home"></div>
                <div class="cd-screen">
                  <img src={require('../Devices/products/h5dex-imtoken/place-order.jpg')} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div class="cd-iphone-6 cd-scale-80">
              <div class="cd-body">
                <div class="cd-sound"></div>
                <div class="cd-sleep"></div>
                <div class="cd-camera"></div>
                <div class="cd-ear"></div>
                <div class="cd-home"></div>
                <div class="cd-screen">
                  <img src={require('../Devices/products/h5dex-imtoken/place-order-confirm.jpg')} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div class="cd-iphone-6 cd-scale-80">
              <div class="cd-body">
                <div class="cd-sound"></div>
                <div class="cd-sleep"></div>
                <div class="cd-camera"></div>
                <div class="cd-ear"></div>
                <div class="cd-home"></div>
                <div class="cd-screen">
                  <img src={require('../Devices/products/h5dex-imtoken/place-order-sign.jpg')} />
                </div>
              </div>
            </div>
          </div>

        </div>
        <ImTokenDevice />
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: "auto",
    backgroundColor: '#333',
    padding: '100px 0',
    paddingTop: '50px',
  },
  body: {
    textAlign: 'right',
  },
  title: {
    fontSize: 40,
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
