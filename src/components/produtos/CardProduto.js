import PubSub from 'pubsub-js'
import React from 'react'
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { getCompanyId } from '../../services/auth-service'

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

function CardProduto({ products, refresh }) {

    async function deleteProduto() {
        await api.delete(`/company/${getCompanyId()}/products/` + products.id)

        return refresh()
    }

    function deleteConfirm() {
        confirmAlert({
            title: 'Bussiness Boost',
            message: 'Deseja mesmo deletar ' + products.name + " ?",
            buttons: [
                {
                    label: 'DELETE',
                    onClick: () => deleteProduto()
                },
                {
                    label: 'NO',
                    onClick: () => { }
                }
            ]
        })
    }

    return (
        <>
            <tr className="text-center">
                <td className="td-produtos">{products.reference}</td>
                <td className="td-produtos">{products.name}</td>
                <td className="td-produtos">{products.brand}</td>
                <td className="td-produtos">{products.category}</td>
                <td className="td-produtos">R$ {products.totalPrice}</td>
                <td className="td-produtos">{products.status}</td>
                <td className="td-produtos">
                    <Link to={"/user/editproducts/" + products.id}>
                        <i className="fa fa-pencil-square-o mr-2" aria-hidden="true"></i>
                    </Link>
                    <i className="fa fa-trash mr-2" role="button" aria-hidden="true" onClick={deleteConfirm} />
                    <Link to={"/user/imageProduct/" + products.id}>
                        <i className="fa fa-image mr-2" aria-hidden="true" />
                    </Link>
                    <button
                        className="btn btn-info ml--2"
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={
                            () => {
                                PubSub.publish('produtoDetalhe', products)
                            }
                        } >
                        Info</button>
                </td>
            </tr>
        </>

    )
}

export default CardProduto;