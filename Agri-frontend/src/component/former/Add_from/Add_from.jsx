import React from 'react';
import "./Add_from.css"
const Add_from = () => {
  return (
    <div className='form_main'>
      <form action="">
      <div className="image_con">
      <label htmlFor="image">choose your product  Image</label>
      <input type="file" id='image' name='image' readOnly/>
      </div>
      <label htmlFor="name">Product Name</label>
      <input type="text" name='name' id='name' />
      <label htmlFor="price">Price</label>
      <input type="text" name='price' id='price' />
      <label htmlFor="Quantity">Available Quantity</label>
      <input type="text" name='Quantity' id='Quantity' />
      <label htmlFor="description">Description</label>
      <textarea name="description" id="description" >
      </textarea>
      </form>
      <button >
           Add product
      </button>
    
    </div>
  );
}

export default Add_from;
