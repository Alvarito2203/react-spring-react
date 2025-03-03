import React, { useState, useEffect } from "react";

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                cart.map((coche) => (
                    <div key={coche.id} className="cart-item">
                        <img src={coche.imagenUrl} alt={coche.marca} />
                        <div>
                            <h3>{coche.marca} {coche.modelo}</h3>
                            <p>€{coche.precio}</p>
                            <button onClick={() => removeFromCart(coche.id)}>Eliminar</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
