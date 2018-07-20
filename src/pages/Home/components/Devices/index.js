import React from 'react';
import './devices.css'

function Devices(props) {
  return (
    <div className="cd-mac cd-pro">
      <div className="cd-top"></div>
      <div className="cd-bottom"></div>
      <div className="cd-camera"></div>
      <div className="cd-notch"></div>
      <div className="cd-screen">
        <img src="http://i.imgur.com/lgCj5En.jpg" />
        <img src="http://haverzine.com/wp-content/uploads/2014/06/launchpad.png" />
        <img src="https://d13yacurqjgara.cloudfront.net/users/31692/screenshots/1548482/attachments/236312/Fullscreen.png" />
      </div>
    </div>
  )
}
export default Devices
