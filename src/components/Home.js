import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Empresa from './empresa/Empresa';
import EditEmpresa from './empresa/EditEmpresa'
import Representantes from './representantes/Representantes';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Products from './Products';
import ContainerPedidos from './pedidos/ContainerPedidos';
import Login from './Login'
import { isSignedIn } from '../services/auth-service';

import { useHistory } from 'react-router-dom';

const PrivateRoutes = ({component: Component, ...rest}) => {
    const history = useHistory();
    return(
        <Route
        {...rest}
            render={props =>
                isSignedIn() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{pathname:'/users/sign_in', state: {from: props.location}}}/>
                )
            }
        />
    )
}
    

function Home() {
    return(
        <div className="container-fluid wrapper bg-light">
            teste
            {/* <div className="row wrapper">
                <Router>
                    <div className="col-2 col-md-2 sidebar text-center">
                        <Navbar /> 
                    </div>

                    <div className="col-10 col-md-10 p-0">
                        <Switch>
                            <Route path='/users/sign_in' component={Login}></Route>
                            <PrivateRoutes path='/user/company' component={Empresa} />
                            <PrivateRoutes path='/user/editCompany/:id' component={EditEmpresa}/>
                            <PrivateRoutes path='/user/representatives' component={Representantes} />
                            <PrivateRoutes path='/user/dashboard' component={Dashboard} />
                            <PrivateRoutes path='/user/products' component={Products} />
                            <PrivateRoutes path='/user/orders' component={ContainerPedidos} />
                        </Switch>
                    </div>
                    
                </Router>
            </div> */}

        </div>
    )
  }
  
  export default Home;