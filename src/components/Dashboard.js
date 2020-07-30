import React, { Component } from 'react';
import Api from '../axios/api'
import { getCompanyId, getCompany, getOrders } from '../services/auth-service'

import './Dashboard.css';

class Dashboard extends Component {

    state = {
        company: []
    }

    componentDidMount = async () => {
        console.log()
        this.setState({ company: getCompany() })
    }

    render() {

        var valor = 0;

        const teste = getOrders().map(order => {
            valor += order.totalPrice;
        })

        var orders10 = []

        for (let i = 0; i < 5; i++) {
            orders10.push(getOrders().reverse()[i])
        }

        return (

            // <div class="page-wrapper">

            <div class="container-fluid">
                {console.log(orders10)}
                {/* <!-- ============================================================== -->
                <!-- Bread crumb and right sidebar toggle -->
                <!-- ============================================================== --> */}
                <div class="row page-titles mt-2">
                    <div class="col-md-5 align-self-center">
                    </div>
                    <div class="col-md-7 align-self-center text-right">
                        <div class="d-flex justify-content-end align-items-center">
                            <a class="btn btn-success d-none d-lg-block m-l-15" href="https://wrappixel.com/templates/elegant-admin/"> Upgrade To Pro</a>
                        </div>
                    </div>
                </div>
                {/* <!-- ============================================================== -->
                <!-- End Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Yearly Sales -->
                <!-- ============================================================== --> */}
                <div class="row">
                    <div class="col-lg-8">
                        <div class="card oh">
                            <div class="card-body">
                                <div class="d-flex m-b-30 align-items-center no-block">
                                    <h5 class="card-title ">Yearly Sales</h5>
                                </div>
                                <div id="morris-area-chart" style={{ "height": "350px;" }}></div>
                            </div>
                            <div class="card-body bg-light">
                                <div class="row text-center m-b-20">
                                    <div class="col-lg-4 col-md-4 m-t-20">
                                        <h2 class="m-b-0 font-light">{valor}</h2><span class="text-muted">Preço total de pedidos</span>
                                    </div>
                                    <div class="col-lg-4 col-md-4 m-t-20">
                                        <h2 class="m-b-0 font-light">{getOrders().length}</h2><span class="text-muted">Total de Pedidos</span>
                                    </div>
                                    <div class="col-lg-4 col-md-4 m-t-20">
                                        <h2 class="m-b-0 font-light">2000</h2><span class="text-muted">Total de Representantes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ============================================================== -->
                <!-- News -->
                <!-- ============================================================== --> */}
                <div class="row mt-2">
                    {/* <!-- column --> */}
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <h5 class="card-title">Ultimos Pedidos</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Representante ID</th>
                                            <th class="text-center">Cliente ID</th>
                                            <th class="text-center">DATE</th>
                                            <th class="text-center">PRICE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders10.map(order => (
                                            <tr key={order.id}>
                                                <td class="text-center">{order.representativeId}</td>
                                                <td class="text-center">{order.clientId}</td>
                                                <td class="text-center">{order.createDate.split('T', 1)}</td>
                                                <td class="text-center"><span class="text-success">R${order.totalPrice}</span></td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            // </div>
        )
    }
}
export default Dashboard;