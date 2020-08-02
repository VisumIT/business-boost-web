import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Inicial from '../components/Inicial';
import Login from '../components/Login';
import CadastroEmpresa from '../components/empresa/CadastroEmpresa';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import Empresa from '../components/empresa/Empresa';
import EditEmpresa from '../components/empresa/EditEmpresa';
import ImagemEmpresa from '../components/empresa/ImagemEmpresa';
import Representantes from '../components/representantes/Representantes';
import Products from '../components/produtos/Produtos';
import CadastroProduto from '../components/produtos/CadastroProduto'
import ImagemProduto from '../components/produtos/imagemProduto'
import ContainerPedidos from '../components/pedidos/ContainerPedidos';
import ListaRepresentantes from '../components/representantes/ListaRepresentantes';
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
    return (
        <Route
            {...rest}
            render={props =>
                isSignedIn() ? (
                    <div className="body">
                        <div className="page-content">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="sidebar content-box mt-1" style={{ "display": "block" }}>
                                        <Navbar />
                                    </div>
                                </div>
                                <div className="col-md-9 mt-1">
                                    <div className="row">
                                        <Component {...props} />
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <button type="button" className="btn btn-dark mt-1">Sair</button>
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
                <PrivateRoutes path='/user/editrepresentative/:id' component={Representantes} />
                <PrivateRoutes path='/user/sign_up_representatives' component={Representantes} />
                <PrivateRoutes path='/user/representatives' component={ListaRepresentantes}/>
                <PrivateRoutes path='/user/products' component={Products} />
                <PrivateRoutes path='/user/orders' component={ContainerPedidos} />
                <PrivateRoutes path='/user/newProduct' component={CadastroProduto} />
                <PrivateRoutes path='/user/imageProduct/:id' component={ImagemProduto} />
                <PrivateRoutes path='/user/imageCompany' component={ImagemEmpresa} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes;