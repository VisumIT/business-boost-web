import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import TelaLogin from './login/Login'


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