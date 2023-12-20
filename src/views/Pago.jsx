import '../styles/general.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/quienes-somos.css';
import '../styles/pago.css';
import {Link} from "react-router-dom";
import {CarritoContext} from "../context/CarritoContext";
import {PagoContext} from "../context/PagoContext";
import React, { useEffect, useContext} from 'react';
import {Footer} from "../components/Footer";
export const Pago = () => {
    const carritoContext=useContext(CarritoContext);
    const  pagoContext=useContext(PagoContext);
    const {clearCarrito}=carritoContext;
    const {precioPago,pedidoPago}=pagoContext;

    useEffect(() => {
        document.title = 'LactAmor - Pago';

    }, []);

    clearCarrito();



    return (
        <section className="Pago">
            <div className="Pago__container">
                <p className="Pago__container--header">Su pago de ${precioPago} fue generado con exito. Su numero de pedido es {pedidoPago}</p>
                <p className="Pago__container--text">Su número de pedido es {pedidoPago}</p>
                <p className="Pago__container--text">Te agradecemos mucho por tu compra, has
                    tomado la mejor decisión para ti y tu bebé.
                    A tu correo llegará el link de acceso al recurso
                    seleccionado, si te equivocaste de pedido puedes
                    seleccionar devolución y nos pondremos en
                    contacto contigo
                </p>
                <Link to={`/`}>
                    <button className="Pago__container--button">Regresar a la pagina principal</button>
                </Link>
            </div>

            <Footer></Footer>
        </section>

    );

}