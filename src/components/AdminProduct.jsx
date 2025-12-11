import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Para ir a /admin/productos/nuevo y /editar
import axios from "axios";

function AdminProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://68fa9a28ef8b2e621e8071f3.mockapi.io/products"; 
  // URL de MockAPI

  // Traer productos
  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    } finally {
      setLoading(false);
    }
  };

  // Borrar producto
  const deleteProduct = async (id) => {
    if (!confirm("¿Seguro que querés borrar este producto?")) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts(products.filter((p) => p.id !== id)); // Actualiza visualmente
    } catch (error) {
      console.error("Error eliminando producto:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="table-responsive">

      <div className="d-flex justify-content-end mb-3">
        <Link className="btn btn-success" to="/admin/productos/nuevo">
          ➕ Crear Producto
        </Link>
      </div>

      <table className="table table-bordered table-striped align-middle ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                No hay productos cargados.
              </td>
            </tr>
          ) : (
            products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>${prod.price}</td>
                <td>
                  {prod.image ? (
                    <img
                      src={prod.image}
                      alt={prod.name}
                      width="80"
                      height="60"
                      style={{ objectFit: "cover", borderRadius: "5px" }}
                    />
                  ) : (
                    "Sin imagen"
                  )}
                </td>
                <td>{prod.stock} kg</td>
                <td>{prod.category}</td>
                <td>{prod.description}</td>

                <td className="d-flex">
                  <Link
                    className="btn btn-warning btn-sm"
                    to={`/admin/productos/${prod.id}/editar`}
                  >
                    ✏️ Editar
                  </Link>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(prod.id)}
                  >
                    🗑️ Borrar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProduct;
