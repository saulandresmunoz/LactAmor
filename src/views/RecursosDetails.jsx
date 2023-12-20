import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import useRecursoDetails from "../hooks/useRecursosDetails";

const images = require.context( '../images/Recursos',true);

const RecursosDetails = () => {
    useEffect(() => {
        document.title = 'LactAmor - Detalle del Recurso';
    }, []);
    const [loadingDelay, setLoadingDelay] = useState(true);
    const { recursoId } = useParams();
    const {recurso, cantidad, mensaje, sumar, restar,onAdd} = useRecursoDetails(recursoId);
    useEffect(() => {
        document.title = 'LactAmor - Detalle del Recurso';
        const delayTimer = setTimeout(() => {
            setLoadingDelay(false); // Cambia el estado para mostrar el contenido después de 0.5 segundo
        }, 500);

        return () => clearTimeout(delayTimer);
    }, []);

    if (loadingDelay) {
        return <div className="cargando">Cargando...</div>;
    }

    if (!recurso) {
        return <h2>Recurso no encontrado</h2>;
    }




    return (
        <section className="recursoDetails">
            <p className="subheader">{recurso.name}</p>
            <div className="recursoDetails__container">

                <div className="recursoDetails__container--left">
                    <p className="recursoDetails__container--left--text">Descripcion: {recurso.description}</p>
                    <p className="recursoDetails__container--left--text">Precio: ${recurso.price}</p>
                    <div className="recursoDetails__container--left--add">
                        <button className="recursoDetails__container--left--add--buttonMinus" onClick={restar}>-</button>
                        <span className="recursoDetails__container--left--add--cantidad">{cantidad}</span>
                        <button className="recursoDetails__container--left--add--buttonPlus" onClick={sumar}>+</button>
                    </div>
                    <div className="recursoDetails__container--left--box">
                        <button className="recursoDetails__container--left--box--button" onClick={()=>onAdd(cantidad)}>Agregar al carrito</button>

                        {mensaje && <p className="recursoDetails__container--left--box--mensaje">{mensaje}</p>}
                        <div className="recursoDetails__container--left--box--noBorder">
                            <Link to={"/recursos"}>
                                <button className="recursoDetails__container--left--box--noBorder--button">Regresar a los Recursos</button>
                            </Link>
                            <Link to={"/carrito"}>
                                <button className="recursoDetails__container--left--box--noBorder--button">Ir al carrito</button>
                            </Link>

                        </div>

                    </div>


                </div>
                <div className="recursoDetails__container--image">
                    <img src={images(`./${recurso.imagen}`)} alt={recurso.name}></img>
                </div>
            </div>
        </section>

    );
}

export default RecursosDetails;