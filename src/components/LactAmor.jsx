import React from "react";
import Base from "../images/noticias/noticias-lactancia.png";

export const LactAmor = () => {
    return (
        <section className="LactAmor">
            <div className="LactAmor__header">
                <p className="LactAmor__header--Title">LactAmor</p>
                <p className="LactAmor__header--Subtitle">ASESORÍA EN LACTANCIA MATERNA Y CUIDADO DEL BEBÉ</p>
            </div>
            <div className="LactAmor__noticias">
                <div className="LactAmor__noticias--image">
                    <img src={Base} alt="noticias"></img>
                </div>
                <div className="LactAmor__noticias--text">
                    <p className="LactAmor__noticias--text--title">Noticias y Promociones</p>
                    <ul>
                        <li>
                            <span className="LactAmor__noticias--text--subtitle--bold">Maternidad Consciente:</span>
                            <p className="LactAmor__noticias--text--subtitle">Únete a nuestro programa integral de lactancia materna y descubre técnicas efectivas para una lactancia plena y consciente. Obtén un 10% de descuento en la inscripción este mes.</p>
                        </li>
                        <li>
                            <span className="LactAmor__noticias--text--subtitle--bold">Dúo de Conexión:</span>
                            <p className="LactAmor__noticias--text--subtitle">¡Especial para dúos dinámicos! Inscriban a mamá y a su compañero para aprender juntos sobre la lactancia materna y reciban un 15% de descuento en el total de la matrícula.</p>
                        </li>
                        <li>
                            <span className="LactAmor__noticias--text--subtitle--bold">Asesoramiento Personalizado:</span>
                            <p className="LactAmor__noticias--text--subtitle">Resuelve tus dudas y aprende técnicas personalizadas con nuestras consultas individuales. Reserva un paquete de 5 sesiones y obtén una sesión gratis.</p>
                        </li>
                        <li>
                            <span className="LactAmor__noticias--text--subtitle--bold">Madres Empoderadas:</span>
                            <p className="LactAmor__noticias--text--subtitle">Únete a nuestra comunidad de madres empoderadas y accede a grupos de apoyo, talleres y eventos exclusivos. ¡La primera membresía anual tiene un 20% de descuento!</p>
                        </li>
                        <li>
                            <span className="LactAmor__noticias--text--subtitle--bold">Curso Virtual Completo:</span>
                            <p className="LactAmor__noticias--text--subtitle">Aprende desde la comodidad de tu hogar con nuestro curso virtual completo de lactancia materna. ¡Inscríbete ahora y accede a un descuento del 15% más una sesión de asesoramiento en línea gratis!</p>
                        </li>
                    </ul>
                </div>


            </div>
        </section>

    );
}

