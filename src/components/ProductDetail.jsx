import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetail = ({ coche, agregarAlCarrito }) => {
    const navigate = useNavigate();  // 👈 Hook para regresar atrás

    return (
        <div className="product-detail-container">
            <div className="product-detail-content">
                <img src={coche.imagen} alt={coche.modelo} />
                
                <div className="product-info">
                    <h2>{coche.marca} {coche.modelo}</h2>
                    <p><strong>Precio:</strong> €{coche.precio}</p>
                    <p><strong>Año:</strong> {coche.año}</p>
                    <p><strong>Descripción:</strong> {coche.descripcion}</p>
                    <p><strong>Categoría:</strong> {coche.categoria}</p>

                    <button className="add-to-cart-button" onClick={() => agregarAlCarrito(coche)}>
                        🛒 Agregar al Carrito
                    </button>

                    {/* ✅ Botón de Volver Atrás */}
                    <button className="back-button" onClick={() => navigate(-1)}>
                        ◀ Volver Atrás
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;