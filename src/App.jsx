import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Login from "./components/Login";
import Header from "./components/Header";
import "./styles/styles.css";

function App() {
  const [user, setUser] = useState(null);

  // Verificar si hay un usuario en el localStorage al cargar la app
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser.correo) {
          setUser(parsedUser);
        } else {
          localStorage.removeItem("user"); // Si los datos no son válidos, eliminarlos
          setUser(null);
        }
      } catch (error) {
        localStorage.removeItem("user"); // Si hay un error al leer, eliminarlo
        setUser(null);
      }
    }
  }, []);

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      {/* Solo mostrar el Header si el usuario está autenticado */}
      {user && <Header onLogout={handleLogout} />}

      <Routes>
        {/* Si el usuario está logueado, redirige de Login a Home */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login onLogin={(user) => setUser(user)} />} />
        
        {/* Solo permitir acceso a Home si el usuario está autenticado */}
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        
        {/* Solo permitir acceso a ProductPage si el usuario está autenticado */}
        <Route path="/product/:id" element={user ? <ProductPage /> : <Navigate to="/" />} />
        
        {/* Solo permitir acceso al carrito si el usuario está autenticado */}
        <Route path="/cart" element={user ? <CartPage /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
