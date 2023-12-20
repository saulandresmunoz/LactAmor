import {LactAmor} from "../components/LactAmor";
import '../styles/general.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/lact-amor.css';
import React, { useEffect} from 'react';


export const Overview = () => {
    useEffect(() => {
        document.title = 'LactAmor - Principal';
    }, []);


    return (
        <div>
                        <LactAmor          />
        </div>
    );
}