import { useParams } from "react-router-dom";
import AdminForm from "../../components/AdminForm";

export default function ModalEdit() {
  const { id } = useParams(); // El ID del producto viene por la URL

  return (
    <div className="container mt-4">
      <h2>Editar Producto</h2>
      <AdminForm id={id} />
    </div>
  );
}
