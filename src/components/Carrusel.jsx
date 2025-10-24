import React from 'react';  
import { Carousel } from "react-bootstrap";
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import img1 from "../assets/carrusel/promocionesydescuentos.png";
import img2 from "../assets/carrusel/pack.png";
import img3 from "../assets/carrusel/calendario-fruta.png";
import img4 from "../assets/carrusel/conservacion.png";
 
function Main() {
  return (
    <main className="bg-dark">
      <div
        id="mainCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3500"
      >
        {/* Indicadores */}
        <div className="carousel-indicators">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 carousel-img" alt="Promociones y descuentos" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="fw-bold text-light text-shadow">Promociones y Descuentos</h2>
              <p>Conocé nuestras ofertas especiales de temporada 🍪</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img2} className="d-block w-100 carousel-img" alt="Packs" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="fw-bold text-light text-shadow">Packs & Combos</h2>
              <p>Stockeate con nuestros combos</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img3} className="d-block w-100 carousel-img" alt="Calendario de fruta" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="fw-bold text-light text-shadow">Calendario de Frutas</h2>
              <p>Usamos ingredientes frescos de cada estación 🍓</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img4} className="d-block w-100 carousel-img" alt="Conservación" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="fw-bold text-light text-shadow">Conservación y Calidad</h2>
              <p>Te contamos cómo mantener tus verduras y frutas </p>
            </div>
          </div>
        </div>

        {/* Controles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </main>
  );
}

export default Main;