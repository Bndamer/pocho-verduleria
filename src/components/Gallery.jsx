 import '../styles/style.css'; 
import React, { useState, useEffect } from "react";
 
function Gallery({ addToCart,categoryFilter  }) {
  // Array de productos de prueba
  /*     const products = [
        {
          id: 1,
          name: "Frutillas",
          price: 1500,
          image: "/galeria/berry.jpg",
        },
        {
          id: 2,
          name: "Bananas",
          price: 1200,
          image: "/galeria/banana.png",
        },
        {
          id: 3,
          name: "Naranjas",
          price: 1300,
          image: "/galeria/orange.webp",
        },
        {
            id:4,
            name: "Fruta Dragon",
            price: 4000,
            image: "/galeria/dragon.webp",
        }
      ]; */

  const [products, setProducts] = useState([]); // Estado para los productos
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // URL de MockAPI
  const MockAPI = "https://68fa9a28ef8b2e621e8071f3.mockapi.io/products";

  // useEffect para obtener los datos al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(MockAPI);
        if (!res.ok) throw new Error("Error al obtener los productos");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Mientras carga
  if (loading) return <p className="text-center mt-3">Cargando productos...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

    //  Filtro por categoría si categoryFilter existe
  const displayedProducts = categoryFilter
    ? products.filter((p) => p.category === categoryFilter)
    : products;

  return (
    <section className=" ">
      <h2 className="text-center mt-3">Nuestros Productos 🍓🍌🍊</h2>
      <div className="container d-flex justify-content-space-between flex-wrap gap-3">
        {displayedProducts.map((product) => (
          <div className="" key={product.id}>
            <div className="productos card" style={{ width: "15rem" }}>
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                style={{ height: "150px", objectFit: "cover", borderRadius: "8px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="">${product.price}</p>
                <button
                  className="btn btn-dark"
                  onClick={() => addToCart(product)}
                >
                  🛒 Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
 
export default Gallery;