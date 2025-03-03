import { useState } from "react";
import "../styles/styles.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.marca} {item.modelo} - €{item.precio}
              <button onClick={() => removeFromCart(item.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
