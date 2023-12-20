import React ,{useState} from "react";
export const BuscadorContext = React.createContext();

const BuscadorProvider=({ children })=>{

    const [filtered, setFiltered] = useState([]);

    return(
        <BuscadorContext.Provider value={{
            filtered, setFiltered,
        }}>
            {children}
        </BuscadorContext.Provider>
    )
}
export default BuscadorProvider