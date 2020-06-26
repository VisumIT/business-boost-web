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
                    <Link className="nav-link active text-dark" to="/user/representante">Representante</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-dark" to="/user/produto">Produtos</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar;