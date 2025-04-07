import React from 'react';
import "./Weather.css"
import { assets } from '../../../assets/assets';

const Weather = () => {
  return (
    <div className='container'>
        <h1>Weather Details</h1>
        <div className="location">
        <img src={assets.home} alt="" width={"20px"} />
        Jablpur, Madhya Pradesh, India 
        <img src={assets.down} alt="" width={"15px"} />
        </div>
        <div className="main_con">
        <div className="right">
          <div className="weather_time">
            <h3>Current weather</h3>
            <p>11:32 AM</p>  
          </div>
          <div className="weat_tem">
            <img src={assets.cloud} alt="" />
            <div className="tem">
                78 .f
            </div>
            <div className="ti_1">
                <h3>Mostly sunny</h3>
                <p>feels like  90</p>
            </div>

          </div>
          <p>Expect sunny skies. the high will be 86</p>
          <div className="item">
            <div className="item_1">
                <p>Air quality</p>
                <div>
                    <div className="dot"></div>
                    183
                </div>
            </div>
            <div className="item_1">
                <p>Wind</p>
                2 mph
                <img src="" alt="" />
            </div>
            <div className="item_1">
                <p>Humidity</p>
                49%
            </div>
            <div className="item_1">
                <p>Visibility</p>
                2.5 mi
            </div>
            <div className="item_1">
                <p>pressure</p>
                29.99 in
            </div>
            <div className="item_1">
               <p> Dew point</p>
               58
            </div>

          </div>



        </div>
        <div className="left">
            <img src={assets.map} alt="" />

        </div>
        </div>

      
    </div>
  );
}

export default Weather;
