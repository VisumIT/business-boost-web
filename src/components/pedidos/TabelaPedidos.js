import React, { useState } from "react";
import PubSub from 'pubsub-js';


const ListaPedidos = (props) => {
    const { pedidos } = props

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
                        <td>R$ {pedido.totalPrice}</td>
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
                        <div className="modal-header badge-info">
                            <h5 className="modal-title" id="exampleModalLabel">{pedidoDetalhe.createDate}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Numero do pedido</th>
                                        <th>Status do pedido</th>
                                        <th>Preço</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            {pedidoDetalhe.id}
                                        </th>
                                        <td>
                                            {pedidoDetalhe.status}
                                        </td>
                                        <td>
                                            {pedidoDetalhe.totalPrice}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="modal fade" id="modalCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">Your cart</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product name</th>
                                        <th>Price</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Product 1</td>
                                        <td>100$</td>
                                        <td><a><i class="fas fa-times"></i></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Product 2</td>
                                        <td>100$</td>
                                        <td><a><i class="fas fa-times"></i></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Product 3</td>
                                        <td>100$</td>
                                        <td><a><i class="fas fa-times"></i></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Product 4</td>
                                        <td>100$</td>
                                        <td><a><i class="fas fa-times"></i></a></td>
                                    </tr>
                                    <tr class="total">
                                        <th scope="row">5</th>
                                        <td>Total</td>
                                        <td>400$</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                      
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Close</button>
                            <button class="btn btn-primary">Checkout</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <ListaPedidos pedidos={pedidos} />
        </>
    )
}

export default TabelaSeries