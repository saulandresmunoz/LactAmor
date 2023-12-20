import React, {useContext, useState} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import {Overview} from "../views/Overview";
import {Recursos} from "../views/Recursos";
import {Header} from "../components/Header";
import {SubHeader} from "../components/SubHeader";
import {Footer} from "../components/Footer";
import RecursosDetails from "../views/RecursosDetails";
import {AboutUs} from "../views/About-Us";
import {Pago} from "../views/Pago";
import {Carrito} from "../views/Carrito";
import {CarritoContext} from "../context/CarritoContext";
import {Devoluciones} from "../views/Devoluciones";
import {DevolucionesDetails} from "../views/DevolucionesDetails";
import {Buscador} from "../components/Buscador";
import {RecursosContext} from "../context/RecursosContext";
import {DevolucionesContext} from "../context/DevolucionesContext";
import {LactAmor} from "../components/LactAmor";

function GlobalRouter() {

    const carritoContext=useContext(CarritoContext);
    const {botonActivado}=carritoContext;
    const { recursos_app} = useContext(RecursosContext);
    const { devoluciones_app} = useContext(DevolucionesContext);

    return (

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Layout><Overview /></Layout>} />
                <Route path="/quienes-somos" element={<Layout><SubHeader subheader="About Us"></SubHeader><AboutUs /></Layout>} />
                <Route path="/recursos" element={<Layout><SubHeader subheader="Recursos"></SubHeader><Buscador array_to_filter={recursos_app} filterProperty="name" placeholderValue="Buscar por Nombre..."></Buscador><Recursos /></Layout>} />
                <Route path="/recursos/:recursoId" element={<Layout><RecursosDetails /></Layout>} />
                <Route path="/devoluciones" element={<Layout><SubHeader subheader="Devoluciones"></SubHeader><Buscador array_to_filter={devoluciones_app} filterProperty="numeroPedido" placeholderValue="Buscar por Numero de Pedido..."></Buscador><Devoluciones /></Layout>} />
                <Route path="/devoluciones/:devolucionesId" element={<Layout><DevolucionesDetails /></Layout>} />
                <Route path="/carrito" element={<Layout><SubHeader subheader="Carrito"></SubHeader><Carrito /></Layout>} />
                {botonActivado ? (
                    <Route path="/pago" element={<Pago />} />
                ) : (
                    <Route path="/pago" element={<Navigate to="/" />} />
                )}

            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default GlobalRouter;