import React from 'react';
import {Link} from "react-router-dom";

const Devolucion_component=({ id, numeroPedido, price})=>{

    return(
        <section className="devolucion">

                <table className="devolucion__table">
                    <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{numeroPedido}</td>
                        <td>${price}</td>
                        <td>
                            <Link to={`/devoluciones/${id}`}>
                                <button className="devolucion__table--goButton">Quiero devolución</button>
                            </Link>
                        </td>
                    </tr>
                    </tbody>
                </table>



        </section>

    )
}

export default Devolucion_component