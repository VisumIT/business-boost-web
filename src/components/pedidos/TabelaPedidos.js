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
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header badge-info">
                            <h5 className="modal-title" id="exampleModalLabel">Data de Emissão: {pedidoDetalhe.createDate}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h6>Número do Pedido: {pedidoDetalhe.id}</h6>
                            <table class="table table-striped border-bottom">
                                <thead class="bg-200 text-900">
                                    <tr>
                                        <th class="border-0">Referencia</th>
                                        <th class="border-0">Produto</th>
                                        <th class="border-0 text-center">Quantidade</th>
                                        <th class="border-0 text-right">Preço Uni.</th>
                                        <th class="border-0 text-right">Preço Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pedidoDetalhe.length != '' ? pedidoDetalhe.items.map(item => (
                                        <tr>
                                            <td class="align-middle text-left">{item.product.reference}</td>
                                            <td class="align-middle">
                                                <h6 class="mb-0 text-nowrap">{item.product.name}</h6>
                                                <p class="mb-0">{item.product.name.productInformation}</p>
                                            </td>
                                            <td class="align-middle text-center">{item.quantity}</td>
                                            <td class="align-middle text-right">R$ {item.product.totalPrice}</td>
                                            <td class="align-middle text-right">R$ {item.totalPrice}</td>
                                        </tr>
                                    )) : 
                                    <></>}
                                </tbody>
                            </table>
                            <div class="row no-gutters justify-content-end">
                                <div class="col-auto">
                                    <table class="table table-sm table-borderless fs--1 text-right">
                                        <tbody><tr>
                                            <th class="text-900">Subtotal:</th>
                                            <td class="font-weight-semi-bold">R$ {pedidoDetalhe.totalPrice}</td>
                                        </tr>
                                            <tr>
                                                <th class="text-900">Desconto {pedidoDetalhe.dicountId}%:</th>
                                                <td class="font-weight-semi-bold">R$ {pedidoDetalhe.discountPrice}</td>
                                            </tr>
                                            <tr class="border-top">
                                                <th class="text-900">Total:</th>
                                                <td class="font-weight-semi-bold">R$ {pedidoDetalhe.priceToPay}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

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