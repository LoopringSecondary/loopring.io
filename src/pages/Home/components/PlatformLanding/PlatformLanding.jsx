import React, { Component } from 'react';
import { Button } from '@icedesign/base';

export default class PlatformLanding extends Component {
  static displayName = 'PlatformLanding';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.wrapper}>
          <div className="container" style={{paddingTop:'150px',paddingBottom:'100px'}}>
            <div className="text-center pt50 pb50">
              <img className="mb10" style={{height:'45px'}} src={require('../../../../assets/images/logo-white.png')} />
              <div className="fs50 color-white font-weight-bold">Loopring Ecosystem Solutions</div>
              <div className="fs20 color-white">partners: wallets , exchanges , medias, socials etc</div>
            </div>
            <div className="row pt25 pb25 align-items-center justify-content-center">
              <div className="col p10 d-flex align-items-center justify-content-center">
                <div className="text-center bg-primary d-flex align-items-center justify-content-center" style={{width:'220px',height:'220px',borderRadius:'50em'}}>
                  <div className="">
                    <div className="fs40 lh20 mb10 color-white font-weight-bold">01</div>
                    <div className="fs40 color-white">DEX</div>
                    <div hidden className="fs18 color-white"></div>
                  </div>
                </div>
              </div>
              <div className="col p10 d-flex align-items-center justify-content-center">
                <div className="text-center bg-primary d-flex align-items-center justify-content-center" style={{width:'220px',height:'220px',borderRadius:'50em'}}>
                  <div className="">
                    <div className="fs40 lh20 mb10 color-white font-weight-bold">02</div>
                    <div className="fs40 color-white">Wallet</div>
                    <div hidden className="fs18 color-white"></div>
                  </div>
                </div>
              </div>
              <div className="col p10 d-flex align-items-center justify-content-center">
                <div className="text-center bg-primary d-flex align-items-center justify-content-center" style={{width:'220px',height:'220px',borderRadius:'50em'}}>
                  <div className="">
                    <div className="fs40 lh20 mb10 color-white font-weight-bold">03</div>
                    <div className="fs40 color-white">Wallex</div>
                    <div hidden className="fs18 color-white"></div>
                  </div>
                </div>
              </div>
              <div className="col p10 d-flex align-items-center justify-content-center">
                <div className="text-center bg-primary d-flex align-items-center justify-content-center" style={{width:'220px',height:'220px',borderRadius:'50em'}}>
                  <div className="">
                    <div className="fs40 lh20 mb10 color-white font-weight-bold">04</div>
                    <div className="fs40 color-white">More</div>
                    <div hidden className="fs18 color-white"></div>
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
  buttons: { textAlign: 'center', marginTop: 33 },
  wrapper: {
    overflow: 'hidden',
    height: "auto",
    backgroundImage: `url(${require('../../../../assets/images/loopring-medium.jpg')})`,
    position: 'relative',
    backgroundSize: 'cover',
    backgroundColor: '#66ABFF',
    boxShadow: '0 1px 16px 0 rgba(0,0,0,0.10)',
  },
  title: {
    fontSize: '32px',
    color: '#333',
    letterSpacing: '2px',
    lineHeight: '48px',
    textAlign: 'center',
  },
  primaryButton: {
    height: 50,
    fontSize: 16,
    padding: '0 58px',
    lineHeight: '50px',
    color: '#fff',
  },
  secondaryButton: {
    height: 50,
    fontSize: 16,
    padding: '0 58px',
    lineHeight: '50px',
    marginRight: 20,
    backgroundColor: 'transparent',
    borderColor: '#5485f7',
    color: '#5485f7',
  },
};
