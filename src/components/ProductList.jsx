import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "../styles/styles.css";

function ProductList() {
  const [coches, setCoches] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/coches?page=0&size=20")
      .then(response => setCoches(response.data.content))
      .catch(error => console.error("Error al obtener coches:", error));
  }, []);

  return (
    <div className="product-list">
      {coches.map(coche => (
        <ProductCard key={coche.id} coche={coche} />
      ))}
    </div>
  );
}

export default ProductList;
