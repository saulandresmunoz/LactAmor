import {Link} from "react-router-dom";
import React from "react";

export const Recursos_component = ({ id, name, description, price, icono, imageURL }) => {
    const images = require.context( '../images/Recursos',true);
console.log(imageURL);
    return (
        <section className="recursos">
            <div className="recursos__container">
                <div className="recursos__container--div">
                    <Link to={`/recursos/${id}`} className="recursos__container--div--enlaceSinSubrayado">
                        <h3 className="recursos__container--div--title">{name}</h3>
                    </Link>
                    <div className="recursos__container--div--div1">
                        <div className="recursos__container--div--div1--div1">
                            <p className="recursos__container--div--div1--div1--text">Descripcion: {description}</p>
                            <p className="recursos__container--div--div1--div1--text">Precio: ${price}</p>
                        </div>
                        <div className="recursos__container--div--div1--div2">
                            {icono && (
                                <div className="recursos__container--div--div1--div2--icono">
                                    <img src={images(`./${icono}`)} alt={name}></img>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="recursos__container--box">
                    <Link to={`/recursos/${id}`}>
                        <button className="recursos__container--box--button">COMPRA YA</button>
                    </Link>
                </div>
            </div>

        </section>

    );
}