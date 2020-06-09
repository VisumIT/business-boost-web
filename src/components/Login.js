import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';

// Layout da tela de Login
function TelaLogin () {
    return(
        <>
            <div className="alert alert-secondary" role="alert">
                Login -> Criar tela de login
            </div>
            <button type="button" className="btn btn-success">
                <Link to="/user/home">Entrar no Sistema</Link>
            </button>
        </>
    )
}

function Login() {
    return(
        <Router>
            <Switch>
                <Route path='/user/home' component={Home} />
                <Route path='/users/sign_in'  component={TelaLogin} />
            </Switch>
        </Router>
    )
}

export default Login;