import React from 'react';
import './Hero.css'
import Products from '../Products/Products';
import MyCart from '../Cart/MyCart';
const Hero = () => {




   return (
      <div className="hro">

         <Products />

         <MyCart />

      </div>
   );
};

export default Hero;