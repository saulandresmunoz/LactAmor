import React from 'react';
import {useContext} from 'react';
import {CarritoContext} from "../context/CarritoContext";

const Carrito_component=({recursos})=>{
    const carritoContext=useContext(CarritoContext);
    const {removeRecurso}=carritoContext;
    return(
        <section className="carrito">
            <table className="carrito__table">
                <tbody>
                <tr>
                    <td>{recursos.name}</td>
                    <td>{recursos.cantidad}</td>
                    <td>${recursos.price}</td>
                    <td>${recursos.cantidad * recursos.price}</td>
                    <td>                    <button
                        className="carrito__table--deleteButton"
                        onClick={() => removeRecurso(recursos.id)}
                    >
                        X
                    </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>

    )
}

export default Carrito_component