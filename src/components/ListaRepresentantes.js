import React, {Component} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Image, ButtonGroup, Button} from 'react-bootstrap'
import foto from "./fts/foto.jpg";
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import api from '../services/api'
import { Link, Redirect } from 'react-router-dom'



/*

Victor F. Amaral
Listagem e mostra dos representantes

*/


export default class ListaRepresentante extends Component {

    
 constructor(props) {
        super(props);
        this.state = {
            representantes : [],    
        };
    }

 componentDidMount() {
        this.mostrarRepresentantes();
    }

    mostrarRepresentantes() {
        api.get('/representante')
        .then(response => {
            this.setState({
                representantes: response.data
            })
        })
        
    }

    deletar = (id) => {
        axios.delete("http://localhost:8080/representante/" + id)
            .then(response => {
            if(response.data != null) {
                alert('representante deletado')
                this.setState({
                    representantes: this.state.representantes.filter(representantes =>
                 representantes.id !== id)
                })
            }
        })
    }

render() {


    return(
        <Table bordered hover striped variant="dark">
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
                    </tr>:
                    this.state.representantes.map((representantes) =>(
                       <tr key={representantes.id}>
                           <td>
                                <Image  src={foto} roundedCircle width="25" height="25"/>
                                {representantes.nome}
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
                                    <Link class="btn btn-sm btn-outline-primary" to={"/Editarepresentantes" + representantes.id}><FontAwesomeIcon icon={faEdit}/></Link>{' '}
                                    <Button size="sm" variant="outline-danger" onClick={( ) => {this.deletar(representantes.id)}}><FontAwesomeIcon icon={faTrash}/></Button>{' '}                                  
                                </ButtonGroup>
                           </td>
                       </tr> 
                    ))
                }
                

            </tbody>
        </Table>
    )





    }
}
