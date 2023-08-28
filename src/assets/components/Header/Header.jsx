import React from 'react';
import './Header.css'
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
               <a href="">Contact</a>
            </ul>
         </nav>
      </div>
   );
};

export default Header;