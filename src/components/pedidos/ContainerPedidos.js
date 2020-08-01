import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { getCompanyId } from '../../services/auth-service';

import TabelaPedidos from './TabelaPedidos';
import '../Spinner.css'
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
        <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    <h5>Lista de Pedidos</h5>
                </div>
                {pedidos.length > 0 ? <TabelaPedidos pedidos={pedidos} /> : <div className="loader2"></div>}
            </div>
        </div>
    )
}

export default ContainerPedidos;