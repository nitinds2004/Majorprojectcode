import React from 'react';
import"./Header.css";
import { assets } from '../../../assets/assets';
const Header = () => {
  return (
    <div className='main'>
        <img className='header_img' src={assets.Former_header} alt="" />
    </div>
  );
}

export default Header;
