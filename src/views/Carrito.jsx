import '../styles/general.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/quienes-somos.css';
import '../styles/carrito.css';
import React, { useEffect } from 'react';
import Carrito_component from "../components/Carrito_component";
import RedirectionPago from "./Redirection";
import useCarrito from "../hooks/useCarrito";

export const Carrito = () => {
    useEffect(() => {
        document.title = 'LactAmor - Carrito';
    }, []);
    const { mostrarLink, mostrarContenidoPrivado, carrito, totalPrecio }=useCarrito();

    if (carrito.length===0){
        return (
          <div>
              <p>No hay elementos en el carrito</p>
          </div>
        );
    }

    return (

        <section className="carrito">
            <table className="carrito__table-header">
                <thead>
                <tr>
                    <th>Recurso</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
            </table>

            {carrito.map(recurso=> <Carrito_component key={recurso.id} recursos={recurso}/>)}
            <div className="carrito__Pago">
                <p className="carrito__Pago--precioTotal">Precio Total:{totalPrecio()}</p>
                <button onClick={mostrarContenidoPrivado} className="carrito__Pago--button">
                    Ir al pago
                </button>
                {mostrarLink && <RedirectionPago />}
            </div>


        </section>
    );
}