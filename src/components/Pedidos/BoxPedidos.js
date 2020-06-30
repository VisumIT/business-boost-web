import React, { useReducer, useState, useEffect } from "react";
import api from "../../services/api";

import TabelaPedidos from './TabelaPedidos'
function BoxEmpresa() {
    const [pedidos, setPedidos] = useState([]);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // const [show, setShow] = useState(false);
    // const [pedidoModal, setPedidoModal] = useState('');

    const [count, setCount] = useState(0);

    useEffect(() => {
        async function listaPedidos() {
            let idCompany = 2
            const res = await api.get(`/company/${idCompany}/orders`)
            // console.log(res.data)
            if (res.status == 200) setPedidos(res.data)
        }
        listaPedidos();
    }, []);




    return (
        <div className="container">
            <TabelaPedidos pedidos={pedidos} />
            
        </div>
    )
}

export default BoxEmpresa;