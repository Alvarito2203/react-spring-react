import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
    const [coches, setCoches] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCoches, setFilteredCoches] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:9000/coches?page=${currentPage}`)
            .then(response => {
                setCoches(response.data.content);
                setTotalPages(response.data.totalPages);
            })
            .catch(error => console.error("Error al obtener coches:", error));
    }, [currentPage]);

    useEffect(() => {
        if (searchTerm === "") {
            setFilteredCoches(coches);
        } else {
            setFilteredCoches(
                coches.filter(coche =>
                    coche.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    coche.modelo.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm, coches]);

    return (
        <div className="home-container">
              <h2 className="catalog-title">Catálogo de Coches</h2>
            
            {/* Barra de búsqueda en el lugar correcto */}
            <div className="search-container">
                <SearchBar setSearchTerm={setSearchTerm} />
            </div>

            <div className="product-grid">
                {filteredCoches.map((coche) => (
                    <ProductCard key={coche.id} coche={coche} />
                ))}
            </div>

            {/* Controles de paginación */}
            {searchTerm === "" && (
                <div className="pagination">
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>
                        ◀ Anterior
                    </button>
                    <span>Página {currentPage + 1} de {totalPages}</span>
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage + 1 >= totalPages}>
                        Siguiente ▶
                    </button>
                </div>
            )}
        </div>
    );
};

export default Home;
