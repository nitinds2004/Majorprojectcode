import React, { useEffect, useState } from 'react';
import "./Weather.css"
import { assets } from '../../../assets/assets';
import axios from "axios"

const Weather = () => {
  const [apidata,setapidata]=useState({})
  const [wethdata,setwethdata]=useState({})
  const [search,setsearch]=useState("Jabalpur");
 

  // const onapicall =async()=>{
  //   await fetch(`http://api.weatherapi.com/v1/current.json?key=36ade69a250642a68b890809250704&q=${search}&aqi=no`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //    setapidata(data)
  //    console.log(apidata);
     
      
  //      // Set data to state
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data:", error);
  //   });
  // }
  const onapicall =async()=>{
    const response=await axios.post(`http://api.weatherapi.com/v1/current.json?key=36ade69a250642a68b890809250704&q=${search}&aqi=no`)
         setapidata(response.data.location);
         setwethdata(response.data.current)
        console.log(wethdata);
        
  }
   
    

  // }
  // useEffect(() => {
  //   fetch(`http://api.weatherapi.com/v1/current.json?key=36ade69a250642a68b890809250704&q=${search}&aqi=no`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setdata(ddata);
  //     console.log(data);
      
  //      // Set data to state
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data:", error);
  //   });
   
    

  // }, []);
  // console.log(ddata);

  useEffect(()=>{
    onapicall();
  },[])






  return (
    <div className='container'>
        <h1>Weather Details</h1>
        <div className="location">
          <div className="datafield">
            <input type="text" name='name'  onChange={(e) => setsearch(e.target.value)} placeholder='Enter your city name' />
            <button onClick={onapicall}>search</button>
          </div>
        <img src={assets.home} alt="" width={"20px"} />
        {apidata.name},{apidata.region},{apidata.country}
        <img src={assets.down} alt="" width={"15px"} />
        </div>
        <div className="main_con">
        <div className="right">
          <div className="weather_time">
            <h3>Current weather</h3>
            <p>last update : {wethdata.last_updated}</p>  
          </div>
          <div className="weat_tem">
            <img src={assets.cloud} alt="" />
            <div className="tem">
                {wethdata.temp_f} .f
            </div>
            <div className="ti_1">
                <h3>Mostly sunny</h3>
                <p>feels like  {wethdata.temp_f}</p>
            </div>

          </div>
          <p>Expect sunny skies. the high will be 86</p>
          <div className="item">
            <div className="item_1">
                <p>Air quality</p>
                <div>
                    <div className="dot"></div>
                  {wethdata.windchill_c}
                </div>
            </div>
            <div className="item_1">
                <p>Wind</p>
                {wethdata.wind_mph} mph
                <img src="" alt="" />
            </div>
            <div className="item_1">
                <p>Humidity</p>
                {wethdata.humidity}%
            </div>
            <div className="item_1">
                <p>Visibility</p>
                {wethdata.vis_miles} mi
            </div>
            <div className="item_1">
                <p>pressure</p>
                {wethdata.pressure_in} in
            </div>
            <div className="item_1">
               <p> Dew point</p>
               {wethdata.dewpoint_f} F.
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
