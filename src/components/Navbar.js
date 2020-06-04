import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar () {

    return(
        <>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <Link class="nav-link active text-dark" to="/dashboard">Dashboard</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active text-dark" to="/empresa">Empresa</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active text-dark" to="/addEmpresa">Add Empresa</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active text-dark" to="/representante">Representante</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active text-dark" to="/produto">Produtos</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar;