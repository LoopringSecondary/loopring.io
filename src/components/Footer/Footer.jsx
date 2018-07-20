import React from 'react';
import Logo from '../Logo';

export default () => {
  return (
    <div className="pt25 pb25 " style={{background:'#333',borderTop:'1px solid rgba(255,255,255,0.1)'}}>
      <div className="container">
        <div className="row no-gutters">
          <div className="col text-left">
            <img style={{height:'28px'}} src={require('../../assets/images/logo-white.png')} />
          </div>
          <div className="col-auto color-white">
            © 2017-2018 Loopring Foundation. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
