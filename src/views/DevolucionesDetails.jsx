import '../styles/general.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/quienes-somos.css';
import '../styles/devoluciones_details.css';
import React, {useContext, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {DevolucionesContext} from "../context/DevolucionesContext";


export const DevolucionesDetails = () => {
    useEffect(() => {
        document.title = 'LactAmor - Devoluciones Details';
    }, []);
    const { devolucionesId } = useParams();
    const { devoluciones_app } = useContext(DevolucionesContext);
    const devolucion = devoluciones_app.find(r => r.id === devolucionesId);

    if (!devolucion) {
        return <h2>Pedido no encontrado</h2>;
    }

    return (
        <div className="devolucionDetails">
            <p className="devolucionDetails__header">Solicitud de devolucion del pedido: {devolucion.numeroPedido}</p>
            <div >
                <p className="devolucionDetails__text">Lamentamos mucho cualquier inconveniente con tu pedido. Si consideras que el recurso seleccionado no es lo que esperabas, estamos aquí para ayudarte con el proceso de devolución.</p>
                    <p className="devolucionDetails__text">    Queremos asegurarnos de que estés satisfecho con tu elección. Si necesitas cambiar tu pedido o solicitar una devolución, estaremos encantados de ayudarte. Nos pondremos en contacto contigo para iniciar el proceso.</p>

                        <p className="devolucionDetails__text">Gracias por confiar en nosotros y por tu comprensión. Tu satisfacción es nuestra prioridad.
                </p>
            <Link to={`/`}>
                <button className="devolucionDetails__button">Regresar a la pagina principal</button>
            </Link>
            </div>
        </div>
    )
}