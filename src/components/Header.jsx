import React from "react";
import {Link, useLocation} from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname !== '/';
    return (


        <header className="header">

            {isHomePage && (
                <div className="header__title">
                    <Link to={`/`}>
                        <button className="header__title--text">LactAmor</button>
                    </Link>
                    <p className="header__subtitle--text">ASESORÍA EN LACTANCIA MATERNA Y CUIDADO DEL BEBÉ</p>
                </div>
            )}

            <div className="header__navbar">
                <Link to={`/`}>
                    <button id="inicio" className="header__navbar--button">Inicio</button>
                </Link>
                <Link to={`/quienes-somos`}>
                    <button id="quienes-somos" className="header__navbar--button">About Us</button>
                </Link>
                <Link to={`/recursos`}>
                    <button id="recursos" className="header__navbar--button">Recursos</button>
                </Link>
                <Link to={`/devoluciones`}>
                    <button id="devoluciones" className="header__navbar--button">Devoluciones</button>
                </Link>
                <Link to={`/carrito`}>
                    <button id="carrito" className="header__navbar--button">Carrito</button>
                </Link>

            </div>
        </header>
    );
}