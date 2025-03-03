import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Header = ({ onLogout }) => {
    return (
        <header className="header">
            {/* Logo y título */}
            <div className="logo-container">
                <img src="/logo.png" alt="Logo Tienda" className="logo" />
                <h1>Tienda de Coches</h1>
            </div>

            {/* Barra de navegación */}
            <nav className="nav-container">
                <Link to="/cart" className="cart-link">
                    🛒 Carrito
                </Link>
                <button className="logout-button" onClick={onLogout}>
                    Cerrar Sesión
                </button>
            </nav>
        </header>
    );
};

export default Header;
