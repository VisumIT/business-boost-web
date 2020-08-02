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
            console.log(res.data)
            if (res.status === 200) {
                const dados = res.data.map(pedido => {
                    let array = pedido.createDate.split("T")[0].split("-")
                    let horario = pedido.createDate.split("T")[1].split(".")[0].split(":")

                    pedido.createDate = `${array[2]}/${array[1]}/${array[0]} - ${horario[0]}:${horario[1]}`
                    pedido.totalPrice = parseFloat(pedido.totalPrice).toFixed(2).replace(".",",")
                    pedido.discountPrice = parseFloat(pedido.discountPrice).toFixed(2).replace(".",",")

                    pedido.items = pedido.items.map(item=> {
                        item.totalPrice = parseFloat(item.totalPrice).toFixed(2).replace(".",",")

                        item.price = parseFloat(item.price).toFixed(2).replace(".",",")
                        item.product.totalPrice = parseFloat(item.product.totalPrice).toFixed(2).replace(".",",")
                        return item
                    })

                    pedido.priceToPay = "R$ " + parseFloat(pedido.priceToPay).toFixed(2).replace(".",",")
                    
                    return pedido
                })
                setPedidos(dados)
            }
            
            
            
            
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