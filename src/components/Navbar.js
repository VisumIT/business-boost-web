import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar () {

    return(
        <>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <Link class="nav-link active text-dark" to="/user/dashboard">Dashboard</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active text-dark" to="/user/empresa">Empresa</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active text-dark" to="/user/addEmpresa">Add Empresa</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active text-dark" to="/user/representante">Representante</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active text-dark" to="/user/produto">Produtos</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar;