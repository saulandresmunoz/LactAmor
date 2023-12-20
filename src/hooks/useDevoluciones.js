import {useEffect, useState} from "react";
export const useDevoluciones = () => {

    const [devoluciones, setDevoluciones] = useState([]);

    useEffect(() => {

        setTimeout(() => {
            setDevoluciones([
                {id: "1", numeroPedido: "1", price: "20"},
                {id: "2", numeroPedido: "2", price: "30"},
                {id: "3", numeroPedido: "3", price: "50"},
                {id: "4", numeroPedido: "4", price: "10"},
                {id: "5", numeroPedido: "5", price: "50"},
                {id: "6", numeroPedido: "6", price: "220"},
                {id: "7", numeroPedido: "7", price: "360"},
                {id: "8", numeroPedido: "8", price: "250"},
                {id: "9", numeroPedido: "9", price: "520"},
                {id: "10", numeroPedido: "10", price: "690"},
            ]);
        }, 500);
    }, []);

    return devoluciones;
}