import React from "react";
import AdminProduct from "../../components/AdminProduct.jsx"; 
// Ajustá la ruta si tu componente está en otro lugar

function PanelAdmin() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Panel de administración</h1>
      <p>Gestiona tus productos aquí.</p>

      {/* Componente que lista productos, crea, edita, elimina */}
      <AdminProduct />
    </div>
  );
}

export default PanelAdmin;
