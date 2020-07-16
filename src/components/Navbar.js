import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar () {

    return(
        <>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link active text-dark" to="/user/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-dark" to="/user/company">Empresa</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-dark" to="/user/representatives">Representantes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-dark" to="/user/orders">Pedidos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-dark" to="/user/products">Produtos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-dark" to="/user/CadastroProducts">Cadastrar Produtos</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar