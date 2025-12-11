// Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login({ email, password, isAdmin });

    if (result.ok) {
      if (isAdmin) navigate("/admin");
      else navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "400px" }}>
      <h2 className="mb-3">Iniciar Sesión</h2>

      <form onSubmit={handleSubmit} className="border rounded p-4 shadow-sm">
        
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            className="form-control"
            value={email}
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            className="form-control"
            value={password}
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Check admin */}
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="isAdminCheck"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="isAdminCheck">
            Entrar como administrador
          </label>
        </div>

        <button className="btn btn-primary w-100">Ingresar</button>
      </form>
    </div>
  );
}
