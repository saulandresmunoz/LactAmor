import { useEffect, useState } from "react";

export const useBuscador = (arrayToFilter, filterProperty) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        if (filterProperty && arrayToFilter && arrayToFilter.length > 0) {
            const filteredData = arrayToFilter.filter(recurso =>
                recurso[filterProperty].toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFiltered(filteredData);
        } else {
            setFiltered([]);
        }
    }, [searchTerm, arrayToFilter, filterProperty]);

    return { searchTerm, setSearchTerm, filtered };
};