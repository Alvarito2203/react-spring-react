import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext"; // Importar el contexto del carrito
import "./styles/styles.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser.correo) {
          setUser(parsedUser);
        } else {
          localStorage.removeItem("user"); 
          setUser(null);
        }
      } catch (error) {
        localStorage.removeItem("user"); 
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <CartProvider>
      <div>
        {user && <Header onLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> : <Login onLogin={(user) => setUser(user)} />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
          <Route path="/product/:id" element={user ? <ProductPage /> : <Navigate to="/" />} />
          <Route path="/cart" element={user ? <CartPage /> : <Navigate to="/" />} />
        </Routes>
        {user && <Footer />}
      </div>
    </CartProvider>
  );
}

export default App;
