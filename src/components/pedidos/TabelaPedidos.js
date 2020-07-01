import React, { useState } from "react";
import PubSub from 'pubsub-js';


const ListaPedidos = (props) => {
    const {pedidos} = props
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Numero</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Visualizar</th>
                </tr>
            </thead>
            <tbody>
                {pedidos.map(pedido => (
                    <tr key={pedido.id}>
                        <th scope="row">{pedido.id}</th>
                        <td>{pedido.createDate.split('T')[0]}</td>
                        <td>{pedido.status}</td>
                        <td>{pedido.totalPrice}</td>
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
        <div className="card">
            {console.log(pedidoDetalhe)}
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
            <div className="card-header">
                <h5>Lista de Pedidos</h5>
            </div>

            <ListaPedidos pedidos={pedidos} />

        </div>
    )
}

export default TabelaSeries