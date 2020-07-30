import React from 'react'
import { Link } from 'react-router-dom';
import Api from '../../axios/api';

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

import './cardEmpresa.css'

function CardEmpresa({ companies, refresh }) {

    async function deleteEmpresa() {
        await Api.delete('/companies/' + companies.id)

        return refresh()
    }

    function deleteConfirm() {
        confirmAlert({
            title: 'Bussiness Boost',
            message: 'Deseja mesmo deletar ' + companies.fictitiousName + " ?",
            buttons: [
                {
                    label: 'DELETE',
                    onClick: () => deleteEmpresa()
                },
                {
                    label: 'NO',
                    onClick: () => { }
                }
            ]
        })
    }

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4 >Company Profile</h4>
                    <div className="box box-info">
                        <div className="box-body">
                            <div className="col-sm-6">
                                <div align="center"> <img alt="User Pic" src={companies.logo} style={{ height: 150, width: 150 }}></img>
                                <Link to={"/user/imageCompany"}>
                                    <button className='btn btn-dark ml-3'>Cadastrar imagem</button>
                                </Link>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-5">
                                <span><h4 style={{ color: "#00b1b1" }}>{companies.companyName}</h4></span>
                            </div>
                            <div className="col-sm-5 col-xs-6 tital h4" >Nome Ficticio: <span className='h5' style={{ color: '#00b1b1' }}>{companies.fictitiousName}</span></div>

                            <div className="bot-border"></div>

                            <div className="col-sm-5 col-xs-6 tital h4 mt-3" >CNPJ: <span className='h5' style={{ color: '#00b1b1' }}>{companies.cnpj}</span></div>

                            <div className="bot-border"></div>

                            <div className="col-sm-5 col-xs-6 tital h4 mt-3" >Inscrição Estadual: <span className='h5' style={{ color: '#00b1b1' }}>{companies.stateRegistration}</span></div>

                            <div className="bot-border"></div>

                            <div className="col-sm-5 col-xs-6 tital h4 mt-3" >E-mail: <span className='h5' style={{ color: '#00b1b1' }}>{companies.email}</span></div>


                            <div className="bot-border"></div>

                            <div className="col-sm-5 col-xs-6 tital h4 mt-3" >Descrição: <span className='h5' style={{ color: '#00b1b1' }}>{companies.description}</span></div>

                            <div className="bot-border"></div>

                            <div className="col-sm-5 col-xs-6 tital h4 mt-3" >Site: <span className='h5' style={{ color: '#00b1b1' }}>{companies.site}</span></div>

                            <div className="bot-border"></div>

                            <div className="col-sm-5 col-xs-6 tital h4 mt-3" >
                                <Link to={"/user/editCompany/" + companies.id}>
                                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </Link>
                                |
                                <i className="fa fa-trash" role="button" aria-hidden="true" onClick={deleteConfirm} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardEmpresa;