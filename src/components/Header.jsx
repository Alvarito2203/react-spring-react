import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/styles.css";

const Header = ({ onLogout }) => {
    const { cart } = useContext(CartContext);

    return (
        <header className="header">
            <div className="logo-container">
                <img src="../fotos/LOGO.png" alt="Logo Tienda" className="logo" />
                <h1>Tienda de Coches</h1>
            </div>

            <nav className="nav-container">
                <Link to="/cart" className="cart-link">
                    🛒 Carrito ({cart.length})
                </Link>
                <button className="logout-button" onClick={onLogout}>
                    Cerrar Sesión
                </button>
            </nav>
        </header>
    );
};

export default Header;
