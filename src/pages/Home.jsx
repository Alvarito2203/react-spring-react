import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
    const [coches, setCoches] = useState([]);
    const [currentPage, setCurrentPage] = useState(0); // Página actual
    const [totalPages, setTotalPages] = useState(1); // Total de páginas

    useEffect(() => {
        axios.get(`http://localhost:9000/coches?page=${currentPage}`)
            .then(response => {
                setCoches(response.data.content);
                setTotalPages(response.data.totalPages);
            })
            .catch(error => console.error("Error al obtener coches:", error));
    }, [currentPage]);

    return (
        <div className="home-container">
            <h1>Catálogo de Coches</h1>
            <div className="product-grid">
                {coches.map((coche) => (
                    <ProductCard key={coche.id} coche={coche} />
                ))}
            </div>

            {/* Controles de paginación */}
            <div className="pagination">
                <button 
                    onClick={() => setCurrentPage(currentPage - 1)} 
                    disabled={currentPage === 0}
                >
                    ◀ Anterior
                </button>
                <span>Página {currentPage + 1} de {totalPages}</span>
                <button 
                    onClick={() => setCurrentPage(currentPage + 1)} 
                    disabled={currentPage + 1 >= totalPages}
                >
                    Siguiente ▶
                </button>
            </div>
        </div>
    );
};

export default Home;
