import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Empresa from './empresa/Empresa';
import EditEmpresa from './empresa/EditEmpresa'
import Representantes from './representantes/Representantes';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Products from './Products';
import ContainerPedidos from './pedidos/ContainerPedidos';

const PrivateRoutes = ({ component: Component, ...rest }) => {
    return(
        <Route {...rest} 
            render={ 
                props => 
                    (<div> 
                        {/* <Navbar />  */}
                        <Component {...props} /> 
                    </div>)
            }
        />
    )
}



function Home() {
    return(
        <div className="container-fluid wrapper bg-light">

            <div className="row wrapper">
                <Router>
                    <div className="col-2 col-md-2 sidebar text-center">
                        <Navbar /> 
                    </div>

                    <div className="col-10 col-md-10 p-0">
                        <Switch>
                            <PrivateRoutes path='/user/company' component={Empresa} />
                            <PrivateRoutes path='/user/editCompany/:id' component={EditEmpresa}/>
                            <PrivateRoutes path='/user/representatives' component={Representantes} />
                            <PrivateRoutes path='/user/dashboard' component={Dashboard} />
                            <PrivateRoutes path='/user/products' component={Products} />
                            <PrivateRoutes path='/user/orders' component={ContainerPedidos} />
                        </Switch>
                    </div>
                    
                </Router>
            </div>

        </div>
    )
  }
  
  export default Home;