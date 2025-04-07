import React from 'react';
import "./Mobile.css"
import { assets } from '../../assets/assets';

const Mobile = () => {
  return (
    <div className='mobile_viwe'>
        <div className="article">
            <p>For Better Experience In Mobile </p>
            <p>Download now</p>
        </div>
        <div className="buttan_img">
            <img src={assets.app_store} alt="" />
            <img src={assets.play_store} alt="" />
        </div>
      
    </div>
  );
}

export default Mobile;
