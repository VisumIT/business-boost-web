import React, {Component, useReducer, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash, faSave, faUndo} from '@fortawesome/free-solid-svg-icons'
import {Table, Image, ButtonGroup, Button, Card} from 'react-bootstrap'
import InputMask from 'react-input-mask';
import api from '../axios/api';

/*

Victor F. Amaral
Cadastro dos Clientes

*/



function CadastroCliente () {
    
    var [ clienteInput, setClienteInput] = useReducer(
        ( state, newState ) => ( {...state, ...newState} ),
        {   
            name: "teste da silva",
            email: "sdADFASDFADSF@teste.com",
            address:"Sol",
            publicPlace:"Rua",
            number:"1002",
            uf:"SP",
            neighborhood:"Jardim Tupanci",
            city:"Barueri",
            cep:"06414-070"
        
        
        }
    );

   
    var [telefoneInput, setTelefoneInput] = useState( '5555555')

    const handleChange = e => {
        const { name, value } = e.target;
        // console.log(e.target)
        setClienteInput({[name] : value})
    }


    
    const enviaDados = async (e) => {
        e.preventDefault()
        clienteInput= {
            telefone: [
               {numero: telefoneInput}
           ],
           ...clienteInput

      }
   
    
        console.log(clienteInput);
        console.log(telefoneInput);

        api.post('/companies/id/new-client', 
                clienteInput
            )
            .then(function(response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
        });
    }

  

    const limpar = () => {
        setClienteInput(

            {
                name: [],
                email: [],
                address: [],
                publicPlace: [],
                number: [],
                uf: [],
                neighborhood: [],
                city:[],
                cep: []
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
                                <h4 className="title pt-2 ml-3">Cadastro de Clientes</h4>
                                <p className="category"></p>
                            </div>
                            <div className="content">
                                <form method="post" onSubmit={enviaDados}>
                                    <div className="row ml-1">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label className="control-label">Nome</label>
                                                <input 
                                                    autoComplete="off"
                                                    placeholder="Nome"  
                                                    type="text" 
                                                    onChange={handleChange}    
                                                    value={clienteInput.name}
                                                    name="name"
                                                    required
                                                    className="form-control">
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
                                                    placeholder="Email"  
                                                    type="email" className="form-control"
                                                    onChange={handleChange} 
                                                    required   
                                                    value={clienteInput.email}
                                                    name="Email"
                                                    >

                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ml-1">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="control-label">Telefone</label>
                                                <InputMask 
                                                    autoComplete="off"
                                                    placeholder="Telefone"  
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={e => setTelefoneInput(e.target.value)} 
                                                       
                                                    required
                                                    value={telefoneInput}
                                                    name="numero"
                                                    
                                                    mask="+5\5 99999-9999"
                                                    >

                                                </InputMask>
                                                {console.log(telefoneInput)}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row-ml-1">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label className="control-label">Cep</label>
                                                <InputMask 
                                                    autoComplete="off"
                                                    placeholder="Cep" 
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={handleChange}    
                                                    required
                                                    value={clienteInput.cep}
                                                    name="cep"
                                                    mask="99999-999"
                                                    >

                                                </InputMask>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row ml-1">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label className="control-label">Bairro</label>
                                                <input
                                                    autoComplete="off"
                                                    placeholder="Endereço"  
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={handleChange}    
                                                    required
                                                    value={clienteInput.address}
                                                    name="address"
                                                    
                                                    >

                                                </input>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="control-label">Rua</label>
                                                <input 
                                                    autoComplete="off"
                                                    placeholder="Rua" 
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={handleChange}    
                                                    required
                                                    value={clienteInput.publicPlace}
                                                    name="publicPlace">

                                                </input>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-group">
                                                <label className="control-label">N°</label>
                                                <input 
                                                    autoComplete="off"
                                                    placeholder="numero" 
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={handleChange}    
                                                    required
                                                    value={clienteInput.number}
                                                    name="number">

                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row ml-1">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label className="control-label">Cidade</label>
                                                <input 
                                                    autoComplete="off"
                                                    placeholder="Cidade"  
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={handleChange}    
                                                    required
                                                    value={clienteInput.city}
                                                    name="city">

                                                </input>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="control-label">Vizinhança</label>
                                                <input 
                                                    autoComplete="off"
                                                    placeholder="senha" 
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={handleChange}    
                                                    required
                                                    value={clienteInput.neighborhood}
                                                    name="neighborhood">

                                                </input>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <label className="control-label">Estado</label>
                                                <input 
                                                    autoComplete="off"
                                                    placeholder="Estado" 
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={handleChange}    
                                                    required
                                                    value={clienteInput.uf}
                                                    name="uf">

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
                </div>
            </div>
        </div>   
    )
}

export default CadastroCliente;