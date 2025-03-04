import React, { createContext, useState } from "react";

// Crear el contexto
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar un coche al carrito
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]); 
    };

    // Eliminar un coche del carrito
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
