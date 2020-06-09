
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from '../components/Home';
import Empresa from '../components/Empresa';
import Representantes from '../components/Representantes';
import ListaRepresentantes from '../components/ListaRepresentantes';


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
                <Route path='/empresa' component={Empresa} />
                <Route path='/representantes' component={Representantes} />
                <Route path='/Editarepresentantes/:id' component={Representantes} />
                <Route path='/listaderepresentantes' component={ListaRepresentantes} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes;