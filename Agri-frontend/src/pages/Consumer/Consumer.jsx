import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Header from '../../component/Header/Header';
import Display_product from '../../component/display_product/Display_product';
import Mobile from '../../component/Mobile viwe/Mobile';
import Footer from '../../component/Footer copy/Footer';

const Consumer = () => {
  return (
    <div>
     <div class="relative h-full w-full bg-white"><div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="main">
        <Navbar/>
         <Header/>
         <Display_product/>
         <Mobile/>
         <Footer/>
      </div>
      </div>
      
    </div>
  );
}

export default Consumer;
