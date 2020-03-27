
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from '../components/Home';


const NotFound = () => {
    return(
        <div>
            <h1>Página não encontrada</h1>
        </div>
    )
}


const Routes = () => {

    return(
        <Router>
            <Switch>
                <Route path='/' component={Home} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes;