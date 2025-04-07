import React from 'react';
import "./header.css"
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className='header'>
      <div className="header_con">
       <img className='header_img' src={assets.bg_img} alt="" />
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, sequi!</p>
       </div>

      <hr className='s1' />

    </div>
  );
}

export default Header;
