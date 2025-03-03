import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Header = ({ onLogout }) => {
    return (
        <header className="header">
            <h1>Tienda de Coches</h1>
            <input type="text" placeholder="Buscar coches..." />

            <div>
                <Link to="/cart">🛒 Carrito</Link>
                <button className="logout-button" onClick={onLogout}>Cerrar Sesión</button>
            </div>
        </header>
    );
};

export default Header;
