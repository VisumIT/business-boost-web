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
                    <Link class="nav-link active" to="/representante">Representantes</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" to="/orders">Pedidos</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar;