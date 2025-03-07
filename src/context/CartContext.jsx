import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (coche) => {
        setCart((prevCart) => [...prevCart, coche]);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(coche => coche.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};