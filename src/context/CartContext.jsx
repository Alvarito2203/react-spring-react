import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // ✅ Agregar coche al carrito
    const addToCart = (coche) => {
        setCart([...cart, coche]);
    };

    // ✅ Eliminar coche del carrito
    const removeFromCart = (id) => {
        setCart(cart.filter(coche => coche.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
