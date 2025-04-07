import React from 'react';
import "./Former.css"
import Footer from '../../component/Footer copy/Footer';
import Navbar from '../../component/Navbar_formwr/Navbar';
import Header from '../../component/former/for_Header/Header';
import Weather from '../../component/former/Weather/Weather';
import Market from '../../component/former/market/Market';
import Show_product from '../../component/former/Show_product/Show_product';

const Former = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Weather/>
        <Market/>
        <Show_product/>
        
        <Footer/>
      
    </div>
  );
}

export default Former;
