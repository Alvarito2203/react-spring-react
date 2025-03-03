import React, { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

const Login = ({ onLogin }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email.includes("@")) {
            setMessage("❌ Introduce un correo válido.");
            return;
        }
        if (password.length < 6) {
            setMessage("❌ La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        try {
            if (isRegister) {
                // REGISTRO
                await axios.post("http://localhost:9000/usuarios", {
                    correo: email,
                    contraseña: password,
                });
                setMessage("✅ Registro exitoso. Ahora puedes iniciar sesión.");
                setIsRegister(false);
            } else {
                // LOGIN
                const response = await axios.get("http://localhost:9000/usuarios");
                const user = response.data.find(user => user.correo === email && user.contraseña === password);

                if (user) {
                    localStorage.setItem("user", JSON.stringify(user)); // Guardar sesión
                    onLogin(user); // Enviar usuario a App.js
                } else {
                    setMessage("❌ Credenciales incorrectas.");
                }
            }
        } catch (error) {
            setMessage("❌ Error en el servidor. Inténtalo más tarde.");
        }
    };

    return (
        <div className="login-container">
            <h2>{isRegister ? "Registro" : "Iniciar Sesión"}</h2>

            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">{isRegister ? "Registrarse" : "Ingresar"}</button>
            </form>

            <p className="message">{message}</p>

            <button className="toggle-button" onClick={() => { setIsRegister(!isRegister); setMessage(""); }}>
                {isRegister ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
            </button>
        </div>
    );
};

export default Login;
