import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/Logo.png";
import { Link } from 'react-router-dom';


function Header() {
  return ( 
    <header className="header d-flex justify-content-evenly align-items-center p-3">
      <Link to="/">
      <div className="">
        <img className="logo" src={logo} alt="Logo" />
        </div>
        </Link>
        <h4 className="">Frescura directa del productor a tu mesa</h4>
        
      
    </header>
  );
}

export default Header;