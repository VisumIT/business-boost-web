
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import CadastroEmpresa from '../components/CadastroEmpresa';
import Inicial from '../components/Inicial';
import Home from '../components/Home';


const NotFound = () => {
    return(
        <div>
            <h1>Página não encontrada</h1>
        </div>
    )
}

function Routes(){

    return(
        <Router>
            <Switch>
                <Route path='/users/sign_up' component={CadastroEmpresa} />
                <Route path='/users/sign_in' component={Login} />
                <Route path='/user/home' component={Home} />
                <Route path='/' exact component={Inicial} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes;