import React, { Component } from 'react';
import { Table, Image, ButtonGroup, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import { getCompanyId } from '../../services/auth-service';
import '../Spinner.css';
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


        const url = '/companies/' + getCompanyId() + '/representatives'
        api.get(url)
            .then(response => {
                this.setState({
                    representantes: response.data
                })
            })

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
        console.log(this.state.representantes)
        return (
            <div className="container-fluid">
                <Link to="/user/sign_up_representatives">
                    <Button variant="outline-success mb-2 mt-1" size="sm">
                        <FontAwesomeIcon icon={faList} />
                        Cadastrar representante
                    </Button>
                </Link>

                <div className="card">
                
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
                                        {representantes.phones[0].number}
                                    </td>
                                    <td>
                                        <ButtonGroup>
                                            <Link className="btn btn-sm btn-outline-primary" to={"/editrepresentative/" + representantes.id}><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                            <Button size="sm" variant="outline-danger" onClick={() => { this.deletar(representantes.id) }}><FontAwesomeIcon icon={faTrash} /></Button>{' '}
                                        </ButtonGroup>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                {this.state.representantes.length === 0 ? <div className="loader2"></div> : <></>}
                </div>
            </div>
        )
    }
}
