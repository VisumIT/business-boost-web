import React from 'react'
import { Link } from 'react-router-dom';
import Api from '../../axios/api';

import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

function CardEmpresa({ empresa, refresh }) {

    async function deleteEmpresa(){
        await Api.delete('/empresa/' + empresa.id)

        return refresh()
    }

    function deleteConfirm(){
        confirmAlert({
            title:'Bussiness Boost',
            message:'Deseja mesmo deletar ' + empresa.nomeFantasia + " ?",
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
            <p> <strong> Nome Fantasia: </strong>{empresa.nomeFantasia} </p>
            <p><strong> E-mail: </strong>{empresa.email}</p>
            <p><strong> Inscricao Estadual: </strong>{empresa.inscricaoEstadual}</p>
            <p><strong> Cnpj: </strong>{empresa.cnpj}</p>
            <hr />
            <Link to={"/editEmpresa/" + empresa.id}>
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </Link>

            <i className="fa fa-trash" aria-hidden="true" onClick={deleteConfirm}/>
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