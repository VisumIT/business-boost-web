import React, { Component, useReducer, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSave, faUndo} from '@fortawesome/free-solid-svg-icons'
import {Button, Card} from 'react-bootstrap'
import InputMask from 'react-input-mask';
import api from '../../axios/api';
import { getToken, getCompanyId } from '../../services/auth-service';

/*

Victor F. Amaral
Cadastro dos representantes

*/



function Cliente() {

    var [clientInput, setClientInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            id: '',
            name: '',
            email: '',
            address: '',
            publicPlace: '',
            number: '',
            uf: '',
            neighborhood: '',
            city: '',
            cep: ''
        }
    );


    var [telefoneInput, setTelefoneInput] = useState('')

    const handleChange = e => {
        const { name, value } = e.target;
        // console.log(e.target)
        setClientInput({ [name]: value })

        console.log(setClientInput)
    }



    const enviaDados = async (e) => {
        e.preventDefault()
        clientInput = {
            phones: [
                { number: telefoneInput }
            ],
            ...clientInput

        }
        // representanteInput.dateOfBirth = moment(representanteInput.dateOfBirth, "DD/MM/YYYY").format('YYYY-MM-DD');
        if(clientInput.name != 400 ) {
            alert('Por favor corriga o Erro')
        }
        console.error(clientInput)
        
     const res = await  api.post('/companies/'+getCompanyId()+'/new-client',
            clientInput,
            {headers: {Authorization: getToken()}}
        )
        
        console.log(res)
           

    //  const update = await api.patch('/companies/'+getCompanyId()+'/representatives/' + res.data.id, {headers: {Authorization: getToken()}}
    //     )

    //     console.log(update)
    }



    const limpar = () => {
        setClientInput(

            {
                id: '',
                name: '',
                email: '',
                address: '',
                publicPlace: '',
                number: '',
                uf: '',
                neighborhood: '',
                city: '',
                cep: '',
                phones: [
                    { number: '' }
                ],
            }

        )
    }
 
    return (
        <div className="container">
            {/* {console.log(clientInput)} */}
            <div className="content">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="header">
                                <h4 className="title pt-2 ml-3">Cadastro de Cliente</h4>
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
                                                    value={clientInput.name}
                                                    name="name"
                                                    required
                                                    className="form-control">
                                                </input>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="control-label">Cep</label>
                                                <InputMask
                                                    autoComplete="off"
                                                    placeholder="Cep"
                                                    type="text"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                    // required
                                                    value={clientInput.cep}
                                                    name="cep"
                                                    mask="99999-999"
                                                >

                                                </InputMask>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ml-1">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label className="control-label">Endereço</label>
                                                <input
                                                    autoComplete="off"
                                                    placeholder="Endereço"
                                                    type="text" className="form-control"
                                                    onChange={handleChange}
                                                    required
                                                    value={clientInput.address}
                                                    name="address"
                                                >

                                                </input>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label className="control-label">Lugar</label>
                                                <input
                                                    autoComplete="off"
                                                    placeholder="Lugar"
                                                    type="text" className="form-control"
                                                    onChange={handleChange}
                                                    required
                                                    value={clientInput.publicPlace}
                                                    name="publicPlace"
                                                >

                                                </input>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label className="control-label">Estado</label>
                                                <input
                                                    autoComplete="off"
                                                    placeholder="Estado"
                                                    type="text" className="form-control"
                                                    onChange={handleChange}
                                                    required
                                                    value={clientInput.uf}
                                                    name="uf"
                                                >

                                                </input>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <label className="control-label">Numero</label>
                                                <input
                                                    autoComplete="off"
                                                    placeholder="Numero"
                                                    type="text" className="form-control"
                                                    onChange={handleChange}
                                                    required
                                                    value={clientInput.number}
                                                    name="number"
                                                >

                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ml-1">
                                        <div className="col-md-7">
                                            <div className="form-group">
                                                <label className="control-label">Vizinhança</label>
                                                <input
                                                    autoComplete="off"
                                                    placeholder="Vizinhança"
                                                    type="text"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                    required
                                                    value={clientInput.neighborhood}
                                                    name="neighborhood"
                                                    
                                                >

                                                </input>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="control-label">Cidade</label>
                                                <input
                                                    autoComplete="off"
                                                    placeholder="Cidade"
                                                    type="text"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                    required
                                                    value={clientInput.city}
                                                    name="city">
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
                                                    value={clientInput.email}
                                                    name="email">

                                                </input>
                                            </div>
                                        </div>
                                          <div className="col-md-6">
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

                                                    mask=" (99)\99999-9999"
                                                >

                                                </InputMask>
                                                {console.log(telefoneInput)}
                                            </div>
                                        </div>
                                    </div>
                                    <Card.Footer style={{ "textAlign": "right" }}>
                                        <Button size="sm" variant="success" type="submit">
                                            <FontAwesomeIcon icon={faSave} /> Cadastrar
                                            </Button>{' '}
                                        <Button size="sm" variant="info" onClick={limpar}>
                                            <FontAwesomeIcon icon={faUndo} /> deletar
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

export default Cliente;