import React from "react";
import { Link, NavLink } from "react-router-dom";
import './index.css'

function Header() {
  return (
    <header>
      
      <nav id="Nav">
        <ul>
          <li><NavLink to="/"  className={(navData) =>(navData.isActive ? "active":"pending")}
  >Mainpage</NavLink> </li>
          <li><NavLink to='/contact'className={(navData) =>(navData.isActive ? "active":"pending")} >Contact</NavLink></li>
          <li><NavLink to='/Login' className={(navData) =>(navData.isActive ? "active":"pending")}>Login</NavLink></li>
          <li><NavLink to='/products' className={(navData) =>(navData.isActive ? "active":"pending")}>Products</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
