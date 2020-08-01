import React, { useState } from "react";
import PubSub from 'pubsub-js';


const ListaPedidos = (props) => {
    const { pedidos } = props
    console.log(pedidos)
    // formatar dados para serem listados na tabela
    for(let i = 0; pedidos.length > i; i++){
        let array = pedidos[i].createDate.split("T")[0].split('-')
        pedidos[i].createDate = `${array[2]}/${array[1]}/${array[0]}`
        if(pedidos[i].totalPrice.toString().indexOf('.') === -1){
            pedidos[i].totalPrice = pedidos[i].totalPrice.toString() + ",00"
        }else{
            if(pedidos[i].totalPrice.toString().split('.')[1].length === 2){
                pedidos[i].totalPrice = pedidos[i].totalPrice.toString().replace(".", ",")
            }else{
                pedidos[i].totalPrice = pedidos[i].totalPrice.toString().replace(".", ",") + "0"
            }
        }
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Numero</th>
                    <th scope="col">Data</th>
                    <th scope="col">Status</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Informações</th>
                </tr>
            </thead>
            <tbody>
                {pedidos.map(pedido => (
                    <tr key={pedido.id}>
                        <th scope="row">{pedido.id}</th>
                        <td>{pedido.createDate}</td>
                        <td>{pedido.status === "created" ? "recebido" : "pendente"}</td>
                        <td>R$ { pedido.totalPrice }</td>
                        <td>
                            <button
                                className="btn btn-info ml--2"
                                href="#"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                onClick={
                                    () => {
                                        PubSub.publish('pedidoDetalhe', pedido)
                                    }
                                } >
                                Info
                            </button>
                        </td>
                    </tr>
                )).reverse()}

            </tbody>
        </table>
    )
}

function TabelaSeries(props) {

    const [pedidoDetalhe, setPedidoDetalhe] = useState('');

    PubSub.subscribe('pedidoDetalhe', (msg, pedido) => {
        setPedidoDetalhe(pedido)
    })

    const { pedidos } = props

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{pedidoDetalhe.createDate}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {pedidoDetalhe.totalPrice}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
            <ListaPedidos pedidos={pedidos} />
        </>
    )
}

export default TabelaSeries