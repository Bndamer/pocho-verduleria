import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState(""); // para mostrar éxito/error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de envío
    console.log("Formulario enviado:", formData);
    setStatus("Mensaje enviado correctamente ✅");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="container" style={{ width: "350px",backgroundColor: "#82ffd7a6", borderRadius: "15px",padding: "25px 50px 25px 50px" }}>
      <h2 className="text-center mb-3">Contáctanos</h2>

      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          name="nombre"
          className="form-control"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Mensaje</label>
        <textarea
          name="mensaje"
          className="form-control"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-dark w-100">
        Enviar mensaje
      </button>

      {status && <p className="alert alert-success mt-3">{status}</p>}
    </form>
  );
}

export default ContactForm;