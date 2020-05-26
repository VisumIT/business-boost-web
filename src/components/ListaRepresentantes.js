import React, {Component} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Image, ButtonGroup, Button} from 'react-bootstrap'
import foto from "./fts/foto.jpg";
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'


export default class ListaRepresentante extends Component {

    
 constructor(props) {
        super(props);
        this.state = {
            representantes : [],    
        };
    }

 componentDidMount() {
        axios.get("http://localhost:8080/representante")
            .then(response => response.data)
            .then((data) => {
                this.setState({representantes: data})
                
            })
    }

    deletar = (representantesid) => {
        alert(representantesid)
    }

render() {


    return(
        <Table bordered hover striped variant="dark">
            <thead>
                <tr>
                <th>cpf</th>
                <th>Nome</th>
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
                                {representantes.cpf}
                           </td>
                           <td>
                                {representantes.nome}
                           </td>
                           <td>
                                {representantes.email}
                           </td>
                           <td>
                                {/* {representantes.numero} */}
                           </td>
                           <td>
                                <ButtonGroup>
                                    <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit}/></Button>{' '}
                                    <Button size="sm" variant="outline-danger" onClick={this.deletar.bind(this.representantesid)}><FontAwesomeIcon icon={faTrash}/></Button>{' '}

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
