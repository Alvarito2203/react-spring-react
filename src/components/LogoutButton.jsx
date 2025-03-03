import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user"); // Eliminar datos del usuario
        navigate("/login"); // Redirigir a la pantalla de login
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            Cerrar Sesión
        </button>
    );
};

export default LogoutButton;
