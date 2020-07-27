import React, {Component, useReducer, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faEdit, faTrash, faSave, faUndo} from '@fortawesome/free-solid-svg-icons'
import {Table, Image, ButtonGroup, Button, Card} from 'react-bootstrap'
import InputMask from 'react-input-mask';
import axios from 'axios'

/*

Victor F. Amaral
Cadastro dos representantes

*/



function Representante () {
    
    var [ representanteInput, setRepresentanteInput] = useReducer(
        ( state, newState ) => ( {...state, ...newState} ),
        {   
            
            cpf: '666666',
            name : 'Victor',
            email: '123@g.com',
            password: '123',
            description: 'ssssss',
            dateOfBirth: '20021112',
            gender: 'M'
        
        }
    );

   
    var [telefoneInput, setTelefoneInput] = useState( '5555555')

    const handleChange = e => {
        const { name, value } = e.target;
        // console.log(e.target)
        setRepresentanteInput({[name] : value})

        console.log(representanteInput)
    }


    
    const enviaDados = async (e) => {
        e.preventDefault()
        representanteInput= {
            phones: [
               {number: telefoneInput}
           ],
           ...representanteInput

      }
   
    
        console.log(representanteInput);
        console.log(telefoneInput);

        axios.post('http://localhost:8080/representatives', 
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
                id: '' ,
                // foto: {foto},
                cpf: '',
                name : '',
                email: '',
                password: '',
                phones: [
                    {number: ''}
                ],
                description: '',
                dateOfBirth: '',
                gender: ''
                
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
                                                    value={representanteInput.name}
                                                    name="name"
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
                                                    value={representanteInput.description}
                                                    name="description"
                                                    >

                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ml-1">
                                        <div className="col-md-10">
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
                                                    name="phones"
                                                    
                                                    mask="+5\5 99999-9999"
                                                    >

                                                </InputMask>
                                                {console.log(telefoneInput)}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row ml-1">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label className="control-label">Nascimento</label>
                                                <InputMask 
                                                    autoComplete="off"
                                                    placeholder="Data de Nascimento"  
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={handleChange}    
                                                    required
                                                    value={representanteInput.dateOfBirth}
                                                    name="dateOfBirth"
                                                    mask="9999/99/99"
                                                    >

                                                </InputMask>
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
                                                    value={representanteInput.gender}
                                                    name="gender">

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
                                                    value={representanteInput.password}
                                                    name="password">

                                                </input>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label className="control-label">Cpf</label>
                                                <InputMask 
                                                    autoComplete="off"
                                                    placeholder="Cpf" 
                                                    type="text" 
                                                    className="form-control"
                                                    onChange={handleChange}    
                                                    required
                                                    value={representanteInput.cpf}
                                                    name="cpf"
                                                    mask="999.999.999-99"
                                                    >

                                                </InputMask>
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

export default Representante;