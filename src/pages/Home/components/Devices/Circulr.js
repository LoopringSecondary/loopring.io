import React from 'react';
import './devices.min.css'

function Devices(props) {
  return (
    <div className="container">
      <div className="row no-gutters align-items-end justify-content-center">
        <div className="col-2 pr0" style={{position:'relative',zIndex:'0'}}>
          <div className="cd-mac cd-pro cd-scale-70" style={{width:'auto'}}>
            <div className="cd-top"></div>
            <div className="cd-bottom"></div>
            <div className="cd-camera"></div>
            <div className="cd-notch"></div>
            <div className="cd-screen">
              <img src={require('./products/webdex-circulr/circulr.png')} />
            </div>
          </div>
        </div>
        <div className="col" style={{position:'relative',zIndex:'1'}}>
          <div className="cd-mac cd-pro" style={{width:'auto'}}>
            <div className="cd-top"></div>
            <div className="cd-bottom"></div>
            <div className="cd-camera"></div>
            <div className="cd-notch"></div>
            <div className="cd-screen">
              <img src={require('./products/webdex-circulr/circulr.png')} />
            </div>
          </div>
        </div>
        <div className="col-2 pl0"  style={{position:'relative',zIndex:'0'}}>
          <div className="cd-mac cd-pro cd-scale-70" style={{width:'auto'}}>
            <div className="cd-top"></div>
            <div className="cd-bottom"></div>
            <div className="cd-camera"></div>
            <div className="cd-notch"></div>
            <div className="cd-screen">
              <img src={require('./products/webdex-circulr/circulr.png')} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Devices
