import React from 'react'
import { Link } from 'react-router-dom';
import Api from '../../axios/api';

import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

function CardEmpresa({ companies, refresh }) {

    async function deleteEmpresa(){
        await Api.delete('/companies/' + companies.id)

        return refresh()
    }

    function deleteConfirm(){
        confirmAlert({
            title:'Bussiness Boost',
            message:'Deseja mesmo deletar ' + companies.fictitiousName + " ?",
            buttons:[
                {
                    label:'DELETE',
                    onClick:()=>deleteEmpresa()
                },
                {
                    label:'NO',
                    onClick:()=>{}
                }
            ]
        })
    }

    return (
        <div className="col-md-11 card" style={{ margin: 5 }}>
            <p> <strong> Nome Fantasia: </strong>{companies.fictitiousName} </p>
            <p><strong> E-mail: </strong>{companies.email}</p>
            <p><strong> Inscricao Estadual: </strong>{companies.stateRegistration}</p>
            <p><strong> Cnpj: </strong>{companies.cnpj}</p>
            <hr />
            <Link to={"/user/editCompany/" + companies.id}>
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </Link>

            <i className="fa fa-trash" role="button" aria-hidden="true" onClick={deleteConfirm}/>
            <br />
        </div>
        // <table class="table table-striped">
        //     <thead>
        //         <tr>
        //         <th scope="col">Nome Fantasia</th>
        //         <th scope="col">Razão Social</th>
        //         <th scope="col">Email</th>
        //         <th scope="col">Descrição</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //         <th scope="row">{empresa.nomeFantasia}</th>
        //         <td>{empresa.razaoSocial}</td>
        //         <td>{empresa.email}</td>
        //         <td>{empresa.descricao}</td>
        //         </tr>
        //     </tbody>
        // </table>
    )
}

export default CardEmpresa;