import React from 'react';
import "./Navbar.css"
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="logo">
            <img src={assets.logo} alt="" width="180px" height="70px" />
        </div>
        <ul className="nav_list">
            <li>Home</li>
            <li>Product</li>
            <li>Mobile-app</li>
            <li>Contect us</li>
        </ul>

        <div className="nav_right">
            <div className="search_icon"><img src={assets.search_icon} alt="" /></div>
            <div className="Navcart"><img src={assets.bag_icon} alt="" /></div>
            <button >Login</button>
        </div>
      
    </div>
  );
}

export default Navbar;
