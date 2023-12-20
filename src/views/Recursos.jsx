import '../styles/general.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/quienes-somos.css';
import '../styles/recurso.css';
import '../styles/recurso-details.css';
import '../styles/buscador.css';
import React, { useEffect, useContext} from 'react';
import {Recursos_component} from "../components/Recursos_component";
import {BuscadorContext} from "../context/BuscadorContext";

export const Recursos = () => {
    useEffect(() => {
        document.title = 'Lacta Mama - Recursos';
    }, []);



    const { filtered} = useContext(BuscadorContext);


    return (
        <div>


            <div className="recursos__container">

                {
                    filtered.length > 0 ? (
                        filtered.map((recurso, index) => (
                            <Recursos_component
                                key={index}
                                id={recurso.id}
                                name={recurso.name}
                                description={recurso.description}
                                price={recurso.price}
                                icono={recurso.icono}

                                imageURL={`../images/Recursos/${recurso.icono}`}
                            />
                        ))
                    ) : (
                        <p>No se encontraron recursos con ese nombre.</p>
                    )
                }
            </div>
        </div>
    );
}