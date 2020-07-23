import React from 'react';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Inicial from '../components/Inicial';
import Login from '../components/Login';
import CadastroEmpresa from '../components/empresa/CadastroEmpresa';

import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import Empresa from '../components/empresa/Empresa';
import EditEmpresa from '../components/empresa/EditEmpresa'
import Representantes from '../components/representantes/Representantes';
import Products from '../components/Products';
import ContainerPedidos from '../components/pedidos/ContainerPedidos';

import { isSignedIn } from '../services/auth-service';

import './Routes.css';

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
                    <div className="body">
                        <div className="page-content">
                            <div class="row">
                                <div className="col-md-2">
                                    <div class="sidebar content-box" style={{ "display": "block;" }}>
                                        <Navbar />
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="row">
                                        <Component {...props} />
                                    </div>
                                </div>
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
                <Route path='/' exact component={Inicial} />
                <Route path='/users/sign_up' component={CadastroEmpresa} />
                <Route path='/users/sign_in' component={Login} />
                <PrivateRoutes path='/user/dashboard' component={Dashboard} />
                <PrivateRoutes path='/user/company' component={Empresa} />
                <PrivateRoutes path='/user/editCompany/:id' component={EditEmpresa} />
                <PrivateRoutes path='/user/representatives' component={Representantes} />
                <PrivateRoutes path='/user/products' component={Products} />
                <PrivateRoutes path='/user/orders' component={ContainerPedidos} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes;