import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Image, ButtonGroup, Button } from 'react-bootstrap'

import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import api from '../../axios/api'
import { Link, Redirect } from 'react-router-dom'
import { getToken, getCompanyId } from '../../services/auth-service';




/*

Victor F. Amaral
Listagem e mostra dos clientes

*/


export default class ListaRepresentante extends Component {


    constructor(props) {
        super(props);
        this.state = {
            clientes: [],
        };
    }

    componentDidMount() {
        this.mostrarClientes();
    }

    mostrarClientes() {


        const url = '/companies/' + getCompanyId() + '/customers'
        api.get(url, {
            headers:
                { Authorization: getToken() }
        })
            .then(response => {
                this.setState({
                    clientes: response.data

                })
                console.log(response.data)
            })



    }

    deletar = (id) => {
        api.delete("/customers/" + id)
            .then(response => {
                if (response.data != null) {
                    alert('Cliente deletado')
                    this.setState({
                        clientes: this.state.clientes.filter(clientes =>
                            clientes.id !== id)
                    })
                }
            })
    }

    render() {

        console.log(this.state)

        return (
            <div className="container">

                <Table bordered hover striped variant="light">
                    <Link to="/user/sign_up_clients">
                        <Button variant="outline-success" size="sm">
                            <FontAwesomeIcon icon={faList} />
                            {' '}
                            Cadastrar Cliente
                        </Button>
                    </Link>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>cpf</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.clientes.length === 0 ?

                            <tr align="center">
                                <td colSpan="6"> clientes cadastrados</td>
                            </tr> :
                            this.state.clientes.map((clientes) => (
                                <tr key={clientes.id}>
                                    <td>
                                        <Image roundedCircle width="25" height="25" />
                                        {clientes.name}
                                    </td>
                                    <td>
                                        {clientes.cpf}
                                    </td>
                                    <td>
                                        {clientes.email}
                                    </td>
                                    <td>
                                        {/* {clientes.numero} */}
                                    </td>
                                    <td>
                                        <ButtonGroup>
                                            {/* <Link class="btn btn-sm btn-outline-primary" to={"/editrepresentative/" + clientes.id}><FontAwesomeIcon icon={faEdit} /></Link>{' '} */}
                                            <Button size="sm" variant="outline-danger" onClick={() => { this.deletar(clientes.id) }}><FontAwesomeIcon icon={faTrash} /></Button>{' '}
                                        </ButtonGroup>
                                    </td>

                                </tr>
                            ))
                        }


                    </tbody>
                </Table>
            </div>
        )





    }
}
