import React from 'react';
import "./Market.css"

const Market = () => {
  return (

    <div className='main-con'>
        <h1>Market Scenario</h1>
        <div className="m_item">
        <div className="m_left">
            <form className='market_from'>
                <label htmlFor="Area">Area</label>
                <input type="text" id='Area' placeholder='Jabalpur' />
                <label htmlFor="Dristic">Dristic</label>
                <input type="text" id='Dristic' placeholder='Jabalpur' />
                <label htmlFor="State">State</label>
                <input type="text" id='State' placeholder='Madhya pradesh' />
            </form>
            <button>Get Data</button>

        </div>
        <div className="m_right">
            <div className="head">
                <p>Name</p>
                <p>Price</p>
                <p>/kg</p>
            </div>
            <div className="product_list">
            <div className="price_cart">
                <div className="product_name">
                    rice
                </div>
                <div className="price"> 
                    2500
                </div>
                <div>
                    /kg
                </div>
            </div>
            <div className="price_cart">
                <div className="product_name">
                    rice
                </div>
                <div className="price"> 
                    2500
                </div>
                <div>
                    /kg
                </div>
            </div>
            <div className="price_cart">
                <div className="product_name">
                    rice
                </div>
                <div className="price"> 
                    2500
                </div>
                <div>
                    /kg
                </div>
            </div>
            <div className="price_cart">
                <div className="product_name">
                    rice
                </div>
                <div className="price"> 
                    2500
                </div>
                <div>
                    /kg
                </div>
            </div>
            <div className="price_cart">
                <div className="product_name">
                    rice
                </div>
                <div className="price"> 
                    2500
                </div>
                <div>
                    /kg
                </div>
            </div>
            <div className="price_cart">
                <div className="product_name">
                    rice
                </div>
                <div className="price"> 
                    2500
                </div>
                <div>
                    /kg
                </div>
            </div>
            <div className="price_cart">
                <div className="product_name">
                    rice
                </div>
                <div className="price"> 
                    2500
                </div>
                <div>
                    /kg
                </div>
            </div>
            <div className="price_cart">
                <div className="product_name">
                    rice
                </div>
                <div className="price"> 
                    2500
                </div>
                <div>
                    /kg
                </div>
            </div>
            <div className="price_cart">
                <div className="product_name">
                    rice
                </div>
                <div className="price"> 
                    2500
                </div>
                <div>
                    /kg
                </div>
            </div>
            <div className="price_cart">
                <div className="product_name">
                    rice
                </div>
                <div className="price"> 
                    2500
                </div>
                <div>
                    /kg
                </div>
            </div>
            </div>

        </div>
        
        </div>
    </div>
  );
}

export default Market;
