import React, {useEffect, useContext} from "react";
import {BuscadorContext} from "../context/BuscadorContext";
import { useBuscador } from "../hooks/useBuscador";

export const Buscador = ({ array_to_filter, filterProperty, placeholderValue }) => {

    const { searchTerm, setSearchTerm, filtered } = useBuscador(array_to_filter, filterProperty);

    const { setFiltered } = useContext(BuscadorContext);


    useEffect(() => {
        setFiltered(filtered);
        return () => {
            setFiltered([]);
        };
    }, [filtered, setFiltered]);


    return (
        <section className="search">
            <form className="search__form">
                <input className="search__form-bar"
                       type="text"
                       placeholder={placeholderValue}
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
        </section>

    );
}