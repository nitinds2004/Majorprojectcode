import React, { useContext } from 'react';
import "./Display_product.css"
// import { Storecontext } from '../../context/Storecontext';
import Product_cart from '../Product_cart/Product_cart';
import { product } from '../../assets/assets';

const Display_product = () => {
  // const {productitem}=useContext(Storecontext)
  return (
    <div className='product_con'>
      <div><h1>Product</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nemo similique adipisci delectus. Reprehenderit magnam eaque amet inventore necessitatibus sapiente!</p>
      </div>
      <div className="product-cards">
        {product.map((item,index)=>{
          return <Product_cart key={index} name={item.name} id={item._id} description={item.discription} price={item.price} proimage={item.product_img}/>
        })}
       

      </div>

    </div>
  );
}

export default Display_product;
