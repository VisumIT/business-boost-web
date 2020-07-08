import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import './Navbar.css'

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
                    <Link class="nav-link active" to="/representative">Representante</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" to="/produto">Produtos</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar;