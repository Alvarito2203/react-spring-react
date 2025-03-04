import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/styles.css";

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

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
          <button className="clear-cart" onClick={() => window.location.reload()}>
            🗑 Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;
