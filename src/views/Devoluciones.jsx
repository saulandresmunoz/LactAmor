import '../styles/general.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/quienes-somos.css';
import '../styles/devoluciones.css';
import React, { useEffect, useContext} from 'react';
import Devolucion_component from "../components/Devolucion_component";
import {BuscadorContext} from "../context/BuscadorContext";
import '../styles/buscador.css';

export const Devoluciones = () => {
    useEffect(() => {
        document.title = 'LactAmor - Devoluciones';
    }, []);

    const { filtered} = useContext(BuscadorContext);

    return (

        <section className="devolucion">
            <div className="devolucion__table--div">
                <table className="devolucion__table--header">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Número de Pedido</th>
                        <th>Precio</th>
                        <th>Solicita tu devolución</th>
                    </tr>
                    </thead>
                </table>
                <div>

                    {
                        filtered.length > 0 ? (
                            filtered.map((devolucion, index) => (
                                <Devolucion_component
                                    key={index}
                                    id={devolucion.id}
                                    numeroPedido={devolucion.numeroPedido}
                                    price={devolucion.price}
                                />
                            ))
                        ) : null
                    }
                </div>
            </div>

        </section>
    );
}