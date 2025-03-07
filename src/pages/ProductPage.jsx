import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [coche, setCoche] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        axios.get(`http://localhost:9000/coches/${id}`)
            .then(response => setCoche(response.data))
            .catch(error => console.error("Error al obtener detalles del coche:", error));
    }, [id]);

    if (!coche) return <p className="loading">Cargando detalles...</p>;

    return (
        <div className="product-detail-container">
            <div className="product-detail-card">
                <img src={coche.imagenUrl} alt={coche.marca} className="product-image"/>
                <div className="product-info">
                    <h2>{coche.marca} {coche.modelo}</h2>
                    <p><strong>Precio:</strong> €{coche.precio}</p>
                    <p><strong>Año:</strong> {coche.año}</p>
                    <p><strong>Descripción:</strong> {coche.descripcion}</p>
                    <p><strong>Categoría:</strong> {coche.categoria}</p>
                    
                    {/* Botón de Agregar al Carrito */}
                    <button className="add-to-cart-button" onClick={() => addToCart(coche)}>
                        🛒 Agregar al Carrito
                    </button>

                    {/* Botón de Volver Atrás */}
                    <button className="back-button" onClick={() => navigate(-1)}>
                        ◀ Volver Atrás
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;