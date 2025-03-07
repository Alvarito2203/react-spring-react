import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    // ✅ Calcular el precio total
    const totalPrice = cart.reduce((total, item) => total + item.precio, 0);

    return (
        <div className="cart-page">
            <h1>Mi Carrito</h1>

            {/* ✅ Botón para volver atrás */}
            <button className="back-button" onClick={() => navigate(-1)}>⬅ Volver a la tienda</button>

            <ul className="cart-list">
                {cart.length > 0 ? (
                    cart.map((coche) => (
                        <li key={coche.id} className="cart-item">
                            {/* ✅ Asegurar que la imagen se obtiene de la base de datos */}
                            <img src={coche.imagenUrl} alt={`${coche.marca} ${coche.modelo}`} />
                            <span>{coche.marca} {coche.modelo} - €{coche.precio}</span>
                            <button onClick={() => removeFromCart(coche.id)}>❌</button>
                        </li>
                    ))
                ) : (
                    <p>Tu carrito está vacío</p>
                )}
            </ul>

            {/* ✅ Mostrar total del carrito */}
            {cart.length > 0 && <h2 className="cart-total">Total: €{totalPrice.toLocaleString()}</h2>}
        </div>
    );
};

export default CartPage;
