import React from 'react'
import { Link } from 'react-router-dom';
import Api from '../../axios/api';

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

function CardProduto({ products, refresh }) {

    async function deleteProduto() {
        await Api.delete('/company/15/products/' + products.id)

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
                <td className="td-produtos">{products.name}</td>
                <td className="td-produtos">{products.brand}</td>
                <td className="td-produtos">{products.category}</td>
                <td className="td-produtos">R${products.price}</td>
                <td className="td-produtos">{products.status}</td>
                <td className="td-produtos">
                    <Link to={"/user/editproducts/" + products.id}>
                        <i className="fa fa-pencil-square-o mr-2" aria-hidden="true"></i>
                    </Link>
                    <i className="fa fa-trash mr-2" role="button" aria-hidden="true" onClick={deleteConfirm} />
                    <Link to={"/user/product/" + products.id + "/image"}>
                        <i className="fa fa-image mr-2" aria-hidden="true" />
                    </Link>
                </td>
            </tr>
        </>



        // <tbody data-aura-rendered-by="284:0">
        //     <tr data-aura-rendered-by="437:0">
        //         <td data-aura-rendered-by="438:0">{products.name}</td>
        //         <td data-aura-rendered-by="440:0">{products.brand}</td>
        //         <td data-aura-rendered-by="442:0">{products.category}</td>
        //         <td data-aura-rendered-by="444:0">R${products.price}</td>
        //         <td data-aura-rendered-by="448:0">{products.discount}%</td>
        //         <td data-aura-rendered-by="448:0">
        //             <Link to={"/user/editproducts/" + products.id}>
        //                 <i className="fa fa-pencil-square-o mr-2" aria-hidden="true"></i>
        //             </Link>
        //             <i className="fa fa-trash mr-2" role="button" aria-hidden="true" onClick={deleteConfirm} />
        //         </td>
        //     </tr>
        // </tbody>

    )
}

export default CardProduto;