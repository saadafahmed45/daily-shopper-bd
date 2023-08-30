import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
   return (
      <div>
         <nav className="navbar">
            <div className="logo">
               <h3>Emajhon</h3>
            </div>
            <ul className="nav_items">
               <a href="">Home</a>
               <a href="">About</a>
               <a href="">Cart</a>
               <a href="">Login</a>
               {/* <Link to="/cart"> card</Link> */}
            </ul>
         </nav>
      </div>
   );
};

export default Header;