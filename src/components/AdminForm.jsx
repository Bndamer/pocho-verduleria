import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function AdminForm({ id }) {

  const navigate = useNavigate();

 const API_URL = "https://68fa9a28ef8b2e621e8071f3.mockapi.io/products";

  const [product, setProduct] = useState({
    name:"",
    price:"",
    description:"",
    image:"",
    category:"",
    stock:""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Traer datos del producto si estamos editando
  useEffect(() => {
    if (!id) return; // si no hay id → es creación

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError("Error al cargar el producto");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  // Validación rápida
  const validate = () => {
    if (!product.name.trim()) return "El nombre es obligatorio";
    if (Number(product.price) <= 0) return "El precio debe ser mayor a 0";
    if (product.description.length < 10)
      return "La descripción debe tener al menos 10 caracteres";
    if (Number(product.stock) < 0) return "El stock no puede ser negativo";
    return null;
  };

  // Submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");

    try {
      if (id) {
        // Modo editar
        await axios.put(`${API_URL}/${id}`, product);
      } else {
        // Modo crear
        await axios.post(API_URL, product);
      }

      navigate("/admin"); // vuelve al panel
    } catch (err) {
      setError("Error al guardar el producto");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading && id) return <p>Cargando datos...</p>;

  return (
    <div className="container mt-4">
      <h2>{id ? "Editar Producto" : "Nuevo Producto"}</h2>

      {error && <p className="alert alert-danger">{error}</p>}

      <form
        className="border p-4 rounded shadow-sm"
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px" }}
      >
        {/* Nombre */}
        <div className="mb-3">
          <label htmlFor="01" className="form-label">Nombre</label>
          <input id="01"
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>

        {/* Precio */}
        <div className="mb-3">
          <label htmlFor="02" className="form-label">Precio</label>
          <input id="02"
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>

        {/* Imagen URL */}
        <div className="mb-3">
          <label htmlFor="03" className="form-label">URL de Imagen</label>
          <input
            id="03"
            type="text"
            className="form-control"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </div>

        {/* STOCK */}
        <div className="mb-3">
          <label htmlFor="04" className="form-label">Stock (KG)</label>
          <input
            id="04"
            type="number"
            className="form-control"
            rows="4"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </div>

        {/* Categoria */}
        <div className="mb-3">
          <label htmlFor="05" className="form-label">Categoría</label>
          <select
            id="05"
            className="form-control"
            name="category"
            value={product.category}
            onChange={handleChange}
          >
            <option value="Sin Categoria">-- Seleccionar categoría --</option>
            <option value="Fruta">Fruta</option>
            <option value="Verdura">Verdura</option>
            <option value="Aromática">Aromática</option>
          </select>
        </div>


        {/* Descripción */}
        <div className="mb-3">
          <label htmlFor="06" className="form-label">Descripción</label>
          <textarea
            id="06"
            className="form-control"
            rows="4"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Escriba 10 caracteres mínimo"
          />
        </div>

        {/* Botón */}
        <button className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Guardando..." : id ? "Guardar Cambios" : "Crear Producto"}
        </button>
      </form>
    </div>
  );
}

export default AdminForm;
