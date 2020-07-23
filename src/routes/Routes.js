import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../components/Login';
import CadastroEmpresa from '../components/empresa/CadastroEmpresa';
import Inicial from '../components/Inicial';
import Home from '../components/Home';

import Empresa from '../components/empresa/Empresa';
import EditEmpresa from '../components/empresa/EditEmpresa'
import Representantes from '../components/representantes/Representantes';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import ContainerPedidos from '../components/pedidos/ContainerPedidos';
import { isSignedIn } from '../services/auth-service';

import { useHistory } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
            <h1>Página não encontrada</h1>
        </div>
    )
}

const PrivateRoutes = ({ component: Component, ...rest }) => {
    const history = useHistory();
    return (
        <Route
            {...rest}
            render={props =>
                isSignedIn() ? (
                    <div className="container-fluid wrapper bg-light">
                        <div className="row wrapper">
                            <div className="col-2 col-md-2 sidebar text-center">
                                <Navbar />
                            </div>
                            <div className="col-10 col-md-10 p-0">
                            <Component {...props} />
                            </div>
                        </div>
                    </div>
                    
                ) : (
                        <Redirect to={{ pathname: '/users/sign_in', state: { from: props.location } }} />
                    )
            }
        />
    )
}

function Routes() {

    return (
        <Router>
            <Switch>
                <Route path='/users/sign_up' component={CadastroEmpresa} />
                <Route path='/users/sign_in' component={Login} />
                <Route path='/' exact component={Inicial} />
                <PrivateRoutes path='/user/home' component={Home} />

                <PrivateRoutes path='/user/company' component={Empresa} />
                <PrivateRoutes path='/user/editCompany/:id' component={EditEmpresa} />
                <PrivateRoutes path='/user/representatives' component={Representantes} />
                <PrivateRoutes path='/user/dashboard' component={Dashboard} />
                <PrivateRoutes path='/user/products' component={Products} />
                <PrivateRoutes path='/user/orders' component={ContainerPedidos} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes;