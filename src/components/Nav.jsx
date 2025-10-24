import React from 'react';   
import '../styles/style.css';
import cart from "../assets/cart.svg";
import { Link } from 'react-router-dom';

 
function Navmenu() {
  return (
    <nav className="navmenu nav navbar navbar-expand-lg container-fluid">
        <ul className="ul navbar-nav d-flex container justify-content-evenly">
          <li className="li nav-item"><Link className="nav-link" to="/frutas">Frutas</Link></li>
          <li className="li nav-item"><Link className="nav-link" to="/verduras">Verduras</Link></li>
          <li className="li nav-item"><Link className="nav-link" to="/combos">Combos</Link></li>
          <li className="li nav-item"><Link className="nav-link" to="/sobrepocho">Sobre Pocho</Link></li>
          <li className="li nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
          <li className="li nav-item buscador d-flex gap-2">
          <input type="text" placeholder="¿Qué estás buscando?" className="form-control" />
        <button type="submit" className="btn btn-dark">Buscar</button>
        </li>
          <li className="li nav-item"><Link className="nav-link" to="/carrito"><img src={cart} alt="Carrito" style={{ width: "35px" }} /></Link></li>
          <li className="li nav-item"><Link className="nav-link" to="/iniciar-sesion">Iniciar Sesión</Link></li>
        </ul>
    </nav>
  );
}

export default Navmenu;
