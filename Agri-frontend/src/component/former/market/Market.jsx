import React,{ useEffect, useState } from 'react';
import "./Market.css"
import axios from "axios"

const Market = () => {

    const [pricedata,setpricedata]=useState([]);
    const [market , setmarket]=useState("Gurgaon")
    const [dis , setdis]=useState("Gurgaon")
    const [state , setstate]=useState("Haryana")

    
        useEffect(() => {
          const fetchMarketData = async () => {
            try {
              const response = await fetch(
                'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdc3b564546246a772a26393094f5645&offset=0&limit=all&format=json'
              );
              const data = await response.json();
              const mpRecords = data.records.filter(
                (item) => item.state?.toLowerCase() === state.toLowerCase() &&
                item.district?.toLowerCase() === dis.toLowerCase() &&
                item.market?.toLowerCase() === market.toLowerCase()
              );
              setpricedata(mpRecords);
              console.log('Market Data:', data.records);
            } catch (error) {
              console.error('Error fetching market data:', error);
            }
          };
          console.log(pricedata);

          
      
          fetchMarketData();
        }, [market,state,dis]);

        // useEffect(()=>{
          
        //   console.log(market);
        //   console.log(state);
        //   console.log(dis);

        // },[market,state,dis]);
  return (

    <div className='main-con'>
        <h1>Market Scenario</h1>
        <div className="m_item">
        <div className="m_left">
            <form className='market_from'>
                <label htmlFor="Area">Area</label>
                <input type="text" onChange={(e) => setmarket(e.target.value)} id='Area' placeholder='Jabalpur' />
                <label htmlFor="Dristic">Dristic</label>
                <input type="text" id='Dristic'onChange={(e) => setdis(e.target.value)} placeholder='Jabalpur' />
                <label htmlFor="State">State</label>
                <input type="text" id='State' onChange={(e) => setstate(e.target.value)} placeholder='Madhya pradesh' />
            </form>
            <button>Get Data</button>

        </div>
        <div className="m_right">
            <div className="head">
                <p>Name</p>
                <p>Price</p>
                <p>/quintal</p>
            </div>
              
            <div className="product_list">
                
            
            {pricedata.map((item, index) => (
                
            <div key={index}>
                <div className="price_cart">
                <div className="product_name">
                {item.commodity}
                </div>
                <div className="price"> 
                ₹{item.modal_price}
                </div>
                <div>
                    /q
                </div>             
            </div>
            </div>
          ))}
                {/* <div className="product_name">
                    rice
                </div>
                <div className="price"> 
                    2500
                </div>
                <div>
                    /kg
                </div> */}
            </div>
            {/* <div className="price_cart">
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
            </div> */}
            

        </div>
        
        </div>
    </div>
  );
}

export default Market;
