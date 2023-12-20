import React from 'react';
import useRedirection from "../hooks/useRedirection";

function RedirectionPago() {

    useRedirection("/pago", 3000);

    return (
        <div className="redirigiendo">

                <h1>Se está redirigiendo al pago</h1>

        </div>
    );
}

export default RedirectionPago;
