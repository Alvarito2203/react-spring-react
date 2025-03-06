import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { CartContext } from "../context/CartContext";

const Home = () => {
    const { cart, addToCart } = useContext(CartContext);
    const [coches, setCoches] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCoches, setFilteredCoches] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    // ✅ Cargar coches con paginación
    useEffect(() => {
        if (searchTerm === "") {
            axios.get(`http://localhost:9000/coches?page=${currentPage}`)
                .then(response => {
                    setCoches(response.data.content);
                    setTotalPages(response.data.totalPages);
                    setFilteredCoches(response.data.content);
                })
                .catch(error => console.error("Error al obtener coches:", error));
        }
    }, [currentPage, searchTerm]);

    // ✅ Nueva función de búsqueda global
    useEffect(() => {
        if (searchTerm === "") {
            setFilteredCoches(coches);
        } else {
            axios.get(`http://localhost:9000/coches/search?query=${searchTerm}`)
                .then(response => {
                    setFilteredCoches(response.data);
                })
                .catch(error => console.error("Error en la búsqueda:", error));
        }
    }, [searchTerm]);

    // ✅ Filtrar coches que NO estén en el carrito
    const cochesDisponibles = filteredCoches.filter(coche => !cart.some(item => item.id === coche.id));

    return (
        <div className="home-container">
            <br />
            <br />

            {/* ✅ Barra de búsqueda */}
            <div className="search-container">
                <SearchBar setSearchTerm={setSearchTerm} />
            </div>

            {/* ✅ Mostrar coches disponibles */}
            <div className="product-grid">
                {cochesDisponibles.length > 0 ? (
                    cochesDisponibles.map((coche) => (
                        <ProductCard key={coche.id} coche={coche} onAddToCart={() => addToCart(coche)} />
                    ))
                ) : (
                    <p>No hay coches disponibles</p>
                )}
            </div>

            {/* ✅ Controles de paginación (solo si no hay búsqueda) */}
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
