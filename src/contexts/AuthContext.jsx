import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Leer localStorage al iniciar
  useEffect(() => {
    const token = localStorage.getItem("pocho_token");
    const storedUser = localStorage.getItem("pocho_user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = ({ email, password, isAdmin }) => {
    if (!email || !password) {
      return { ok: false, message: "Credenciales vacías" };
    }

    const fakeToken = "pocho_fake_token_" + Date.now();

    const userObj = {
      email,
      name: email.split("@")[0] || "Usuario",
      role: isAdmin ? "admin" : "user", // 👈 AÑADIDO IMPORTANTE
    };

    localStorage.setItem("pocho_token", fakeToken);
    localStorage.setItem("pocho_user", JSON.stringify(userObj));
    setUser(userObj);

    return { ok: true };
  };

  const logout = () => {
    localStorage.removeItem("pocho_token");
    localStorage.removeItem("pocho_user");
    setUser(null);
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.role === "admin"; // 👈 para verificar rol fácil

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAdmin,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
