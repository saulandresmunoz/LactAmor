
import {QuienesSomos} from "../components/Quienes-somos";
import '../styles/general.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/quienes-somos.css';
import '../styles/lact-amor.css';
import React, { useEffect } from 'react';

export const AboutUs = () => {
    useEffect(() => {
        document.title = 'LactAmor - About Us';
    }, []);
    return (
        <div>
            <QuienesSomos></QuienesSomos>
        </div>
    );
}