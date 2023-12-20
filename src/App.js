import React from 'react';
import GlobalRouter from "./router/GlobalRouter";
import {RecursosContext} from "./context/RecursosContext";
import CarritoProvider from "./context/CarritoContext"
import PagoProvider from "./context/PagoContext"

import {useRecursos} from "./hooks/useRecursos";
import {useDevoluciones} from "./hooks/useDevoluciones";

import {DevolucionesContext} from "./context/DevolucionesContext";
import BuscadorProvider, {BuscadorContext} from "./context/BuscadorContext";


function App() {
    const recursos_app = useRecursos();
    const devoluciones_app = useDevoluciones();

  return (

      <CarritoProvider>

            <PagoProvider>
              <BuscadorProvider>
                <RecursosContext.Provider value={{recursos_app}}>
                    <DevolucionesContext.Provider value={{devoluciones_app}}>
                        <GlobalRouter></GlobalRouter>
                    </DevolucionesContext.Provider>
                </RecursosContext.Provider>
              </BuscadorProvider>
            </PagoProvider>

      </CarritoProvider>
  );
}

export default App;
