import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/styles.css";
import logo from "../fotos/png.jpg";

const Header = ({ onLogout }) => {
    const { cart } = useContext(CartContext);

    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo Tienda" className="logo" />
                <h1>Concesionario Mercedes</h1>
            </div>

            <nav className="nav-container">
                <Link to="/cart" className="cart-link">
                    🛒 Carrito <span className="cart-count">({cart.length})</span>
                </Link>
                <button className="logout-button" onClick={onLogout}>
                    Cerrar Sesión
                </button>
            </nav>
        </header>
    );
};

export default Header;
