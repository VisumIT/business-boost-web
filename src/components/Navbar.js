import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <ul className="nav">
            <li className="current">
                <Link className=" " to="/user/dashboard">Dashboard</Link>
            </li>
            <li className="">
                <Link className=" " to="/user/company">Empresa</Link>
            </li>
            <li className="">
                <Link className="" to="/user/representatives">Representantes</Link>
            </li>
            <li className="">
                <Link className=" " to="/user/orders">Pedidos</Link>
            </li>
            <li className="">
                <Link className=" " to="/user/products">Produtos</Link>
            </li>
        </ul>
    )
}

export default Navbar