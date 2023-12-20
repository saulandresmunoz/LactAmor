import { useContext, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { PagoContext } from '../context/PagoContext';

const useCarrito = () => {
    const [mostrarLink, setMostrarLink] = useState(false);
    const carritoContext = useContext(CarritoContext);

    const { carrito, totalPrecio, setBotonActivado, botonActivado, clearCarrito, setNumeroPedido } = carritoContext;
    const pagoContext = useContext(PagoContext);
    const { setPrecioPago, setPedidoPago } = pagoContext;

    const mostrarContenidoPrivado = () => {
        setMostrarLink(true);
        setBotonActivado(true);
        const numeroAleatorio = Math.floor(Math.random() * 101);
        setNumeroPedido(numeroAleatorio);
        const newPrecioPago = totalPrecio();
        setPrecioPago(newPrecioPago);
        setPedidoPago(numeroAleatorio);
    };

    return {
        mostrarLink,
        mostrarContenidoPrivado,
        carrito,
        totalPrecio,
        botonActivado,
        clearCarrito,
    };
};

export default useCarrito;