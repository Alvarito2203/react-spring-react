import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Calcular el total del carrito
  const totalPrice = cart.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="cart-page">
      <h1>🛒 Mi Carrito</h1>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.imagenUrl} alt={item.marca} />
                <span>{item.marca} {item.modelo} - €{item.precio.toLocaleString()}</span>
                <button onClick={() => removeFromCart(item.id)}>❌</button>
              </li>
            ))}
          </ul>

          {/* Mostrar el total del carrito */}
          <h2 className="cart-total">Total: €{totalPrice.toLocaleString()}</h2>

          {/* Botón para vaciar el carrito */}
          <button className="clear-cart" onClick={() => window.location.reload()}>
            🗑 Vaciar Carrito
          </button>

          {/* Botón para volver atrás */}
          <button className="back-button" onClick={() => navigate(-1)}>
            ⬅ Volver Atrás
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;
