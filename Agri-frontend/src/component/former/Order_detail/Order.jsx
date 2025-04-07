import React from 'react';
import "./Order.css"
import { assets } from '../../../assets/assets';

const Order = () => {
  return (
    <div className='order_container'>
        <div className="order_cart">
            <div className="order_left">
                <img src={assets.tameto} alt="" width="90px"/>
            <div>
            <p>Price : 60 /kg</p>
            <p>description :- this good and halthy</p>
            </div>
            </div>
            <div className="order_right">
                <div><p>Quantity :- 20 kg</p>
                <p>Total Amount :-1200 rs</p>
                </div>
                <button>process</button>
            </div>
        </div>
        <div className="order_cart">
            <div className="order_left">
                <img src={assets.Baingan} alt="" width="90px"/>
            <div>
            <p>Price : 100 /kg</p>
            <p>description :- this good and halthy</p>
            </div>
            </div>
            <div className="order_right">
                <div><p>Quantity :- 20 kg</p>
                <p>Total Amount :-2000 rs</p>
                </div>
                <button>process</button>
            </div>
        </div>
        <div className="order_cart">
            <div className="order_left">
                <img src={assets.Cabbage} alt="" width="90px"/>
            <div>
            <p>Price : 80 /kg</p>
            <p>description :- this good and halthy</p>
            </div>
            </div>
            <div className="order_right">
                <div><p>Quantity :- 20 kg</p>
                <p>Total Amount :-1600 rs</p>
                </div>
                <button>process</button>
            </div>
        </div>
      
    </div>
  );
}

export default Order;
