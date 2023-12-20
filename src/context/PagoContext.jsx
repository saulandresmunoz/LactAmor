import React ,{useState} from "react";
export const PagoContext = React.createContext();

const PagoProvider=({ children })=>{
    const [precioPago,setPrecioPago]=useState("");
    const [pedidoPago, setPedidoPago] = useState("");

    return(
        <PagoContext.Provider value={{
            precioPago,setPrecioPago,pedidoPago,setPedidoPago
        }}>
            {children}
        </PagoContext.Provider>
    )
}
export default PagoProvider