import { useContext, useEffect, useState } from 'react';
import { RecursosContext } from '../context/RecursosContext';
import { CarritoContext } from '../context/CarritoContext';

const useRecursoDetails = (recursoId) => {
    const { recursos_app } = useContext(RecursosContext);
    const { mensaje, addRecurso } = useContext(CarritoContext);
    const [loading, setLoading] = useState(true);
    const [cantidad, setCantidad] = useState(0);
    const [recurso, setRecurso] = useState(null);

    useEffect(() => {
        const recursoEncontrado = recursos_app.find((r) => r.id === recursoId);
        if (recursoEncontrado) {
            setRecurso(recursoEncontrado);
            setLoading(false);
        }
    }, [recursoId, recursos_app]);

    const sumar = () => {
        if (cantidad < 5) {
            setCantidad(cantidad + 1);
        }
    };

    const restar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    const onAdd = (nuevaCantidad) => {
        const recursoData = {
            id: recurso.id,
            name: recurso.name,
            description: recurso.description,
            price: recurso.price,
            cantidad: nuevaCantidad,
        };
        addRecurso(recursoData, nuevaCantidad);
    };

    return {
        recurso,
        cantidad,
        mensaje,
        sumar,
        restar,
        onAdd,
        setRecurso,
    };
};

export default useRecursoDetails;