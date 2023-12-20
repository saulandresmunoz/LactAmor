import React ,{useState} from "react";
export const CarritoContext = React.createContext();

const CarritoProvider=({ children })=>{
    const [carrito,setCarrito]=useState([]);
    const [botonActivado, setBotonActivado] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [numeroPedido, setNumeroPedido] = useState('');

    const clearCarrito =()=>setCarrito([]);
    const removeRecurso =(id)=>{

        setCarrito(prevCarrito =>
            prevCarrito.filter(recurso => !(recurso.id === id))
        );

    }

    const addRecurso = (item, nuevaCantidad) => {
        if (nuevaCantidad !== 0) {
            const recursoExistente = carrito.find(
                recurso => recurso.id === item.id
            );

            if (recursoExistente) {
                const updatedCarrito = carrito.map(recurso =>
                    recurso.id === item.id
                        ? { ...recurso, cantidad: recurso.cantidad + nuevaCantidad }
                        : recurso
                );
                setCarrito(updatedCarrito);
                setMensaje('¡Recurso actualizado en el carrito!');
            } else {
                setCarrito([...carrito, { ...item, cantidad: nuevaCantidad }]);
                setMensaje('¡Recurso añadido al carrito!');
            }
            setTimeout(() => {
                setMensaje('');
            }, 3000);
        }
    };

    const totalPrecio =() =>{
        return carrito.reduce((prev, recursos)=> prev+recursos.cantidad* recursos.price,0)

    }
    const totalRecursos =() =>{
        return carrito.reduce((count, recursoActual)=> count+recursoActual.cantidad,0)

    }


    return(
        <CarritoContext.Provider value={{
            clearCarrito,removeRecurso, addRecurso, totalPrecio,totalRecursos,
            carrito, botonActivado, setBotonActivado, mensaje, setMensaje,numeroPedido,setNumeroPedido,
        }}>
            {children}
        </CarritoContext.Provider>
    )
}
export default CarritoProvider