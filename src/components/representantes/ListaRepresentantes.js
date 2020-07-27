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
Listagem e mostra dos representantes

*/


export default class ListaRepresentante extends Component {


    constructor(props) {
        super(props);
        this.state = {
            representantes: [],
        };
    }

    componentDidMount() {
        this.mostrarRepresentantes();
    }

    mostrarRepresentantes() {
        // const url = '/companies/'+getCompanyId()+'/representatives'
        // api.get(url, {header: { Authorization: getToken()}})
        // .then(response => {
        //     this.setState({
        //         representantes: response.data

        //     })
        // })
        // api.get('/companies/1/representatives')
        // .then(response => {
        //     this.setState({
        //         representantes: response.data

        //     })
        // })

        // axios.get(api)
        //     .then(response => response.data)
        //     .then((data) => {
        //         this.setState({representantes: data})

        //     })


        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhMUBnbWFpbC5jb20iLCJleHAiOjE1OTU4OTcyNjl9.ewef1hPvjxz4NXwOrvYEMMeUSeIEBAcE68_c4tVMLEbO6qEBX-vk6u9MO9IjZtOC7kmS5jCbLSLzmYnX2eAyrA");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://52.3.253.2:8080/companies/"+getCompanyId()+"/representatives", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    deletar = (id) => {
        api.delete("/representatives/" + id)
            .then(response => {
                if (response.data != null) {
                    alert('representante deletado')
                    this.setState({
                        representantes: this.state.representantes.filter(representantes =>
                            representantes.id !== id)
                    })
                }
            })
    }

    render() {


        return (
            <div className="container">
                <Link to="/user/sign_up_representatives">
                    <Button variant="outline-dark">Cadastrar representante</Button>
                </Link>
                <Table bordered hover striped variant="light">

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
                        {this.state.representantes.length === 0 ?

                            <tr align="center">
                                <td colSpan="6"> representantes cadastrados</td>
                            </tr> :
                            this.state.representantes.map((representantes) => (
                                <tr key={representantes.id}>
                                    <td>
                                        <Image roundedCircle width="25" height="25" />
                                        {representantes.name}
                                    </td>
                                    <td>
                                        {representantes.cpf}
                                    </td>
                                    <td>
                                        {representantes.email}
                                    </td>
                                    <td>
                                        {/* {representantes.numero} */}
                                    </td>
                                    <td>
                                        <ButtonGroup>
                                            <Link class="btn btn-sm btn-outline-primary" to={"/Editarepresentantes" + representantes.id}><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                            <Button size="sm" variant="outline-danger" onClick={() => { this.deletar(representantes.id) }}><FontAwesomeIcon icon={faTrash} /></Button>{' '}
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
