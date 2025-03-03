import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/styles.css";

function ProductPage() {
  const { id } = useParams();
  const [coche, setCoche] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:9000/coches/${id}`)
      .then(response => setCoche(response.data))
      .catch(error => console.error("Error al obtener detalles del coche:", error));
  }, [id]);

  if (!coche) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="product-page">
      <img src={coche.imagenUrl} alt={coche.marca} />
      <h2>{coche.marca} {coche.modelo}</h2>
      <p><strong>Precio:</strong> €{coche.precio.toLocaleString("es-ES", { minimumFractionDigits: 2 })}</p>
      <p><strong>Año:</strong> {coche.año}</p>
      <p><strong>Descripción:</strong> {coche.descripcion}</p>
      <p><strong>Categoría:</strong> {coche.categoria}</p>
      <p><strong>Stock disponible:</strong> {coche.stock}</p>
      <button className="add-to-cart">🛒 Agregar al Carrito</button>
    </div>
  );
}

export default ProductPage;
