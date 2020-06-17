import React, {Component, useReducer, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Image, ButtonGroup, Button} from 'react-bootstrap'
import './style.css'
import api from '../../services/api'

/*

Listagem de Pedidos

Victor F. Amaral

*/

 class Pedidos extends Component{

 state = {
     Pedidos: []
 }

 componentDidMount () {
    api.get('/orders')
    .then(response => {
        this.setState({
            Pedidos:response.data
        })
        
    })
    
}


    render () {

        return (
            
            <div className="mb-3 card">
                {console.log(this.state.Pedidos)}
                <div className="card-header">
                    <div className="alignm-items-center">
                        <div className="col">
                            <h5>Pedidos</h5>
                        </div>
                        <div className="text-right col-auto">
                        </div>
                    </div>
                </div>
                <div className="p-0 card-body">
                    <div className="table-responsive">
                        <div className="react-bootstrap-table">
                            <Table className="table table-dashboard table-striped table-sm fs--1 border-bottom mb-0 table-dashboard-th-nowrap">
                                <thead>
                                    <tr className="bg-200 text-900">
                                        <th className="selection-cell-header" data-row-selection="true">
                                            <div class="custom-control custom-checkbox">
                                                <input class="custom-control-input" type="checkbox"/>
                                                <label class="custom-control-label"/>
                                                    
                                            </div>
                                        </th>
                                        <th tabIndex="0" arial-label="Order sortable" className="sortable">
                                            Pedidos
                                            <span className="order-4">
                                                
                                            </span>
                                        </th>
                                        <th tabIndex="0" arial-label="Data sortable" className="sortable">
                                            Data
                                            <span className="order-4">
                                                
                                            </span>
                                        </th>
                                        <th tabIndex="0" arial-label="Data sortable" className="sortable">
                                            Vendido para
                                            <span className="order-4">
                                                
                                            </span>
                                        </th>
                                        <th tabIndex="0" arial-label="Data sortable" className="sortable">
                                            Status
                                            <span className="order-4">
                                                
                                            </span>
                                        </th>
                                        <th tabIndex="0" arial-label="Data sortable" className="sortable">
                                            Quantidade
                                            <span className="order-4">
                                                
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.Pedidos.length === 0 ?
                                        <h1>Teste</h1>:

                                    this.state.Pedidos.map((Pedidos) =>(
                                    <tr className="btn-reveal-trigger" key={Pedidos.id}>
                                        <td className="selection-cell">
                                            <div className="custom-control custom-checkbox">
                                                <input className="custom-control-input"/>
                                                <label className="custom-control-label"/>
                                            </div>
                                        </td>
                                        
                                        <td className="py-2 align-middle">
                                            <a>
                                                <strong>
                                                    #{Pedidos[0].totalPrice} 
                                                </strong>
                                            </a>                                            
                                            <br/>
                                            <a>Email</a>
                                        </td>
                                        <td className="py-2 align-middle">
                                            20/02/2002
                                        </td>
                                        <td className="py-2 align-middle">
                                            Comprador, endereço, bairro, Cidade e numero
                                            <p className="mb-0 text-500"></p>
                                        </td>
                                        <td className="py-2 align-middle">
                                            <span className="rounded-circle fs--1 d-block badge badge-soft-success">
                                                completo
                                                <sgv>
                                                    
                                                </sgv>
                                            </span>
                                        </td>
                                        <td className="py-2 align-middle">
                                            {/* {Pedidos.items.prices} */}
                                        </td>
                                        
                                    </tr>
                                    ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default Pedidos