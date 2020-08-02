import React, { Component } from 'react';
import api from '../services/api'
import { getCompany, getOrders, getCompanyId } from '../services/auth-service'

import './Dashboard.css';
import './Spinner.css';

class Dashboard extends Component {

    state = {
        company: [],
        representanteCount: '',
        ordersCount: '',
        ordersTotal: '',
        orders: []
    }

    componentDidMount = async () => {
        console.log()
        this.setState({ company: getCompany() })

        try {
            api.get(`/companies/${getCompanyId()}/representatives`)
                .then(res => { this.setState({ representanteCount: res.data.length }) })
            api.get(`/company/${getCompanyId()}/orders`)
                .then(res => {
                    this.setState({
                        ordersCount: res.data.length,
                        ordersTotal: res.data.reduce(function (total, item) {
                            return total + item.totalPrice
                        }, 0).toFixed(2).replace(".", ","),
                        orders: res.data.reverse().slice(0, 5).map(pedido => {
                            let array = pedido.createDate.split("T")[0].split("-")
                            let horario = pedido.createDate.split("T")[1].split(".")[0].split(":")

                            pedido.createDate = `${array[2]}/${array[1]}/${array[0]} - ${horario[0]}:${horario[1]}`
                            pedido.totalPrice = parseFloat(pedido.totalPrice).toFixed(2).replace(".", ",")
                            pedido.discountPrice = parseFloat(pedido.discountPrice).toFixed(2).replace(".", ",")

                            pedido.items = pedido.items.map(item => {
                                item.totalPrice = parseFloat(item.totalPrice).toFixed(2).replace(".", ",")

                                item.price = parseFloat(item.price).toFixed(2).replace(".", ",")
                                item.product.totalPrice = parseFloat(item.product.totalPrice).toFixed(2).replace(".", ",")
                                return item
                            })

                            pedido.priceToPay = "R$ " + parseFloat(pedido.priceToPay).toFixed(2).replace(".", ",")

                            return pedido
                        })
                    })
                })

        } catch (error) {
            this.setState({
                representanteCount: "error",
                ordersCount: "error",
                ordersTotal: "error",
            })
        }
    }

    componentWillMount = async () => {

    }

    render() {
        console.log(this.state.orders)
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="card oh">
                            <div className="card-body">
                                <div className="d-flex m-b-30 align-items-center no-block">
                                    <h5 className="card-title ">Dados Atualizados da Empresa</h5>
                                </div>
                                <div id="morris-area-chart" style={{ "height": "100" }}></div>
                            </div>
                            <div className="card-body bg-light">
                                <div className="row text-center m-b-20">
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <div className="text-muted mb-1">Preço total de pedidos</div>
                                        {this.state.ordersCount != '' ? (
                                            <h2 className="m-b-0 font-light">
                                                R$ {this.state.ordersTotal}
                                            </h2>
                                        ) : (
                                                <div className="spinner-border text-primary" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            )}
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <div className="text-muted mb-1">Total de Pedidos</div>
                                        {this.state.ordersCount != '' ? (
                                            <h2 className="m-b-0 font-light">
                                                {this.state.ordersCount}
                                            </h2>
                                        ) : (
                                                <div className="spinner-border text-primary" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            )}
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <div className="text-muted mb-1">Total de Representantes</div>
                                        {this.state.representanteCount != '' ? (
                                            <h2 className="m-b-0 font-light">
                                                {this.state.representanteCount}
                                            </h2>
                                        ) : (
                                                <div className="spinner-border text-primary" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div>
                                        <h5 className="card-title">Ultimos Pedidos</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Numero do pedido</th>
                                            <th className="text-center">Data de Emissão</th>
                                            <th className="text-center">Quantidade de items</th>
                                            <th className="text-center">Preço Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.orders.length > 0 ? this.state.orders.map(order => (
                                            <tr key={order.id}>
                                                <td className="text-center">{order.id}</td>
                                                <td className="text-center">{order.createDate}</td>
                                                <td className="text-center">{order.items.length}</td>
                                                <td className="text-center text-success" >R$ {order.totalPrice}</td>
                                            </tr>
                                        )) : <></>}

                                    </tbody>
                                </table>
                                {this.state.orders.length  > 0 ? <></> : <div className="loader2"></div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard;