import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Navmenu from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./pages/Cart.jsx";
import Frutas from "./pages/Frutas.jsx";
import Verduras from "./pages/Verduras.jsx";
import Contacto from "./pages/Contacto.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  // 🟢 Agregar producto al carrito (sin duplicar)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Si ya existe, aumenta la cantidad
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si no existe, lo agrega con cantidad 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
      
    });
  };

  // 🟠 Eliminar producto
  const removeFromCart = (idToRemove) => {
    setCart(cart.filter((item) => item.id !== idToRemove));
  };

  // 🔵 Actualizar cantidad (botones + y −)
  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      <div className="layout">
        <Header />
        <Navmenu />

        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />

          <Route
            path="/carrito"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
          <Route path="/frutas" element={<Frutas addToCart={addToCart} />} />
          <Route path="/verduras" element={<Verduras addToCart={addToCart} />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
