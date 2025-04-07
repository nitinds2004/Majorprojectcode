import React, { useState } from 'react';
import "./Show_product.css"
import Add_from from '../Add_from/Add_from';
import Order from '../Order_detail/Order';

const Show_product = () => {
  const [addproduct,setaddproduct]=useState(false);
  const [orderdetail,setorderdetail]=useState(false)
  
  return (
    <div className='product_main'>
      <h2>Add product</h2>
        <div className="contaier">
            <div className="pra">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit inventore neque ipsum a eaque similique quos perferendis sint nisi obcaecati sequi ullam fuga optio mollitia temporibus dolor, tempore odio voluptatem!</div>
            <div className="butoon">
                <button onClick={()=>addproduct?setaddproduct(false):setaddproduct(true)}>Add product</button>
                <button onClick={()=>orderdetail?setorderdetail(false):setorderdetail(true)}>Order Details</button>
                {addproduct?<Add_from />:<></>}
                {orderdetail?<Order />:<></>}
                
                
            </div>
        </div>
      
    </div>
  );
}

export default Show_product;
