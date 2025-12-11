import React from 'react';   
import '../styles/style.css';
import cart from "../assets/cart.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

 
function Navmenu() {

  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // volver a home
  };
  return (
    <nav className="navmenu nav navbar navbar-expand-lg container-fluid">
        <ul className="ul navbar-nav d-flex container justify-content-evenly">
          <li className="li nav-item"><Link className="nav-link" to="/frutas">Frutas</Link></li>
          <li className="li nav-item"><Link className="nav-link" to="/verduras">Verduras</Link></li>
          <li className="li nav-item"><Link className="nav-link" to="/combos">Combos</Link></li>
          <li className="li nav-item"><Link className="nav-link" to="/sobrepocho">Sobre Pocho</Link></li>
          <li className="li nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
          <li htmlFor="search" className="li nav-item buscador d-flex gap-2">
          <input id ="search" type="text" placeholder="¿Qué estás buscando?" className="form-control" />
        <button type="submit" className="btn btn-dark">Buscar</button>
        </li>
        {isAuthenticated ? (
          <>
          <li className="nav-item"><span className="nav-link">Hola, {user.name}</span></li>
          <li className="li nav-item"><Link className="nav-link" to="/carrito"><img src={cart} alt="Carrito" style={{ width: "35px" }} /></Link></li>
          <li className="nav-item"><button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>Cerrar sesión</button></li>
          </>
        ) : (
           <>
          <li className="li nav-item"><Link className="nav-link" to="/login">Iniciar Sesión</Link></li>
          <li className="li nav-item"><Link className="nav-link" to="/register">Registrarse</Link></li>
          </>
          )}
        </ul>
    </nav>
  );
}

export default Navmenu;
