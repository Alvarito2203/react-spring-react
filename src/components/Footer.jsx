import React from "react";
import "../styles/styles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <span className="footer-text">
                    © 2025 Concesionario Mercedes. Todos los derechos reservados.
                </span>
                <div className="footer-links">
                    <a href="#">Contacto</a>
                    <a href="#">Términos y Condiciones</a>
                    <a href="#">Privacidad</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
