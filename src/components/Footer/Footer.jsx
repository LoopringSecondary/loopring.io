import React from 'react';
import Logo from '../Logo';

export default () => {
  return (
    <div className="pt15 pb15 bg-primary" style={{borderTop:'1px solid rgba(255,255,255,0.1)'}}>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col text-left">
            <img style={{height:'28px',filter: "grayscale(0)",opacity:'0.5'}} src={require('../../assets/images/logo-white.png')} />
          </div>
          <div className="col-auto color-white-3 pt10 pb10">
            © 2017-2018 Loopring Foundation. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
