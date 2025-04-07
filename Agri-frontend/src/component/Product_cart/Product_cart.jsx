import React, { useState } from 'react';
import "./Product_cart.css"
import { assets } from '../../assets/assets';

const Product_cart = ({id,name,description,price,proimage}) => {
  return (
    
    <div className='card'>
        <div className="card_img">
         
            <img src={proimage} alt="" />
        </div>
        <div className="name"><h3>{name}</h3></div>
        <p className="price">Rs.{price}/kg</p>
        <p className='discription'>{description}</p>
      
    </div>
  );
}

export default Product_cart;
