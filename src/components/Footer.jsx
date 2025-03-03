import React from "react";
import "../styles/styles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Tienda de Coches. Todos los derechos reservados.</p>
            <div className="footer-links">
                <a href="#">Contacto</a>
                <a href="#">Términos y Condiciones</a>
                <a href="#">Privacidad</a>
            </div>
        </footer>
    );
};

export default Footer;
