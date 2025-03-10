import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import "../styles/styles.css";

function ProductCard({ coche }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={coche.imagenUrl} alt={coche.marca} />
      <h3>{coche.marca} {coche.modelo}</h3>
      <p>Precio: €{coche.precio.toLocaleString("es-ES", { minimumFractionDigits: 2 })}</p>
      <Link to={`/product/${coche.id}`} className="view-details-button">Ver Detalles</Link>
      <button className="add-to-cart" onClick={() => addToCart(coche)}>🛒 Agregar al Carrito</button>
    </div>
  );
}

export default ProductCard;