import React from "react";
import Base from "../images/about-us/lactancia.jpg";

export const QuienesSomos = () => {
    return (
        <div className="AboutUs">
            <div className="AboutUs__image">
                <img src={Base} alt="lactancia"></img>
            </div>
            <div>
                <p className="AboutUs__text">Bienvenidos a LactAmor, donde la experiencia y el compromiso se unen para apoyar a las madres en su viaje de lactancia materna, destete y porteo. Nuestro equipo de doctores, orgullosamente graduados de la UTPL, se dedica a ofrecer cursos especializados y guía experta para empoderar a las familias en estas importantes etapas.</p>
                <p className="AboutUs__text">    En LactAmor, entendemos que la lactancia materna es un vínculo invaluable entre madre e hijo, y estamos comprometidos a proporcionar la mejor información y apoyo para que este proceso sea gratificante y exitoso. Nuestros cursos están diseñados con un enfoque médico respaldado por la investigación actualizada y la experiencia práctica, brindando a las madres las herramientas necesarias para enfrentar cualquier desafío que puedan encontrar.</p>
                <p className="AboutUs__text"> Además, el destete y el porteo son momentos cruciales en el crecimiento de un bebé, y nuestro equipo de expertos está aquí para ofrecer orientación y asesoramiento compasivo en estas transiciones. Como graduados de la UTPL, mantenemos altos estándares de excelencia académica y ética profesional, asegurando un servicio integral y de calidad.</p>
                <p className="AboutUs__text">    Nuestra misión va más allá de impartir conocimiento: nos esforzamos por crear una comunidad de apoyo donde cada madre se sienta empoderada y respaldada en su elección individual. ¡Únete a nosotros en este viaje de cuidado y amor!</p>
            </div>


        </div>

    );
}