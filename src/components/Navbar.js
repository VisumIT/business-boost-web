import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {

    return(
        <>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <Link class="nav-link active" to="/dashboard">Dashboard</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" to="/empresa">Empresa</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" to="/representante">Representante</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" to="/listaderepresentantes">representantelistagem</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" to="/client">Cadastro de clientes</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar;