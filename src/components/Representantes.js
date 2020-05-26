import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from "./fts/foto.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faEdit, faTrash, faSave, faUndo} from '@fortawesome/free-solid-svg-icons'
import {Table, Image, ButtonGroup, Button, Card} from 'react-bootstrap'

import axios from 'axios'


function Representante () {
    
    var [ representanteInput, setRepresentanteInput] = useReducer(
        ( state, newState ) => ( {...state, ...newState} ),
        {
            foto: "ssssss.jpg",
            cpf: '666666',
            nome : 'Victor',
            email: '123@g.com',
            senha: '123',
            descricao: 'ssssss',
            dataNascimento: '26122002',
            sexo: 'M'
        
        }
    );

   
    var [telefoneInput, setTelefoneInput] = useState( '222')

    const handleChange = e => {
        const { name, value } = e.target;
        // console.log(e.target)
        setRepresentanteInput({[name] : value})
    }

 
    
    const enviaDados = async (e) => {
        e.preventDefault()
        representanteInput= {
            telefone: [
               {numero: telefoneInput}
           ],
           ...representanteInput
      }
   
    
        console.log(representanteInput);
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
       
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: representanteInput,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8080/representante", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

  return





        axios.post('http://localhost:8080/representante', 
            representanteInput
        )
        .then(function(response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });           
        
    }

  

    const limpar = () => {
        setRepresentanteInput(

            {
                foto: {foto},
                cpf: '',
                nome : '',
                email: '',
                senha: '',
                telefone: [
                    {numero: ''}
                ],
                descricao: '',
                dataNascimento: '',
                sexo: ''
                
            }

        )     
    }
//    const deletarRegistro = () => {
//         this.setState(() => this.initialState);
//     }
    
    return(
        <div className="container">
            {/* {console.log(representanteInput)} */}
            <div className="content">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="header">
                                <h4 className="title pt-2 ml-3">Cadastro de Representante</h4>
                                <p className="category"></p>
                            </div>
                            <div className="content">
                                <form method="post" onSubmit={enviaDados}>
                                    <div className="row ml-1">
                                        <div className="col-md-10">
                                            <div className="form-group">
                                                <label className="control-label">Nome</label>
                                                <input 
                                                    autoComplete="off"
                                                    placeholder="Nome"  
                                                    type="text" 
                                                    onChange={handleChange}    
                                                    value={representanteInput.nome}
                                                    name="nome"
                                                    required
                                                    className="form-control">
                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ml-1">
                                        <div className="col-md-9">
                                            <div className="form-group">
                                                <label className="control-label">Descrição</label>
                                                <input 
                                                    autoComplete="off"
                                                    placeholder="Descrição"  
                                                    type="text" className="form-control"
                                                    onChange={handleChange} 
                                                    required   
                                                    value={representanteInput.descricao}
                                                    name="descricao"
                                                    >

                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ml-1">
                                        <div className="col-md-10">
                                            <div className="form-group">
                                                <label className="control-label">Telefone</label>
                                                <input 
                                                    autoComplete="off"
                                                    placeholder="Telefone"  
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={setTelefoneInput}    
                                                    required
                                                    value={telefoneInput}
                                                    name="numero">

                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row ml-1">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label className="control-label">Nascimento</label>
                                                <input 
                                                    autoComplete="off"
                                                    placeholder="Data de Nascimento"  
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={handleChange}    
                                                    required
                                                    value={representanteInput.dataNascimento}
                                                    name="dataNascimento">

                                                </input>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label className="control-label">Sexo</label>
                                                <input 
                                                    autoComplete="off"
                                                    placeholder="sexo" 
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={handleChange}    
                                                    required
                                                    value={representanteInput.sexo}
                                                    name="sexo">

                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row ml-1">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label className="control-label">Email</label>
                                                <input 
                                                    autoComplete="off"
                                                    placeholder="Emai"  
                                                    type="email" 
                                                    className="form-control"
                                                    onChange={handleChange}    
                                                    required
                                                    value={representanteInput.email}
                                                    name="email">

                                                </input>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label className="control-label">Senha</label>
                                                <input 
                                                    autoComplete="off"
                                                    placeholder="senha" 
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={handleChange}    
                                                    required
                                                    value={representanteInput.senha}
                                                    name="senha">

                                                </input>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label className="control-label">Cpf</label>
                                                <input 
                                                    autoComplete="off"
                                                    placeholder="Cpf" 
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={handleChange}    
                                                    required
                                                    value={representanteInput.cpf}
                                                    name="cpf">

                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                    <Card.Footer style={{"textAlign":"right"}}>
                                            <Button size="sm" variant="success" type="submit">
                                                    <FontAwesomeIcon icon={faSave}/> Cadastrar
                                            </Button>{' '}
                                            <Button size="sm" variant="info" onClick={limpar}>
                                                    <FontAwesomeIcon icon={faUndo}/> deletar
                                            </Button>
                                    </Card.Footer>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-user">
                            <div className="image">

                            </div>
                        </div>
                        <div className="content">
                            <div className="author">
                                <a href="#universo">
                                    <img className="rounded-circle avatar border-gray img-fluid rounded" src={foto} alt="..."></img>
                                    <h4 className="title-center text-center badge-primary rounded">
                                        Victor Amaral
                                        <br/>
                                        <small>Victor123</small>
                                    </h4>
                                </a>
                            </div>
                            <p className="description text-center">
                                <span>
                                    ""Lolzera""
                                    <br/>
                                    Rito gomes
                                    <br/>
                                </span>
                            </p>
                        </div>
                        <hr/>
                        <div className="text-center">
                            <div>
                                <button type="button" className="btn-simple btn btn-default">
                                    <i className="fa fa-facebook-square"></i>
                                </button>
                                <button type="button" className="btn-simple btn btn-default">
                                    <i className="fa fa-linkedin-square"></i>
                                </button>
                                <button type="button" className="btn-simple btn btn-default">
                                    <i className="fa fa-google-plus-square"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Representante;