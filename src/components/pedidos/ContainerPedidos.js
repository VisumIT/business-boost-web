import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { getCompanyId } from '../../services/auth-service';

import TabelaPedidos from './TabelaPedidos';

function ContainerPedidos() {

    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        async function listaPedidos() {
            let idCompany = getCompanyId()
            const res = await api.get(`/company/${idCompany}/orders`)
            if (res.status === 200) setPedidos(res.data)
        }
        listaPedidos();
    }, []);

    return (
        <div className="container mt-3">
            <TabelaPedidos pedidos={pedidos} />
        </div>
    )
}

export default ContainerPedidos;