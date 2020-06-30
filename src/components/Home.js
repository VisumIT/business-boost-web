import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Empresa from './Empresa';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import ContainerPedidos from './Pedidos/ContainerPedidos';
import Representantes from './representantes/Representantes';

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
        <>
            <Router>
                <Navbar /> 
                <Switch>
                    <PrivateRoutes path='/empresa' component={Empresa} />
                    <PrivateRoutes path='/dashboard' component={Dashboard} />
                    <PrivateRoutes path='/representative' component={Representantes} />
                    <PrivateRoutes path='/orders' component={ContainerPedidos} />
                </Switch>
            </Router>
        </>
    )
  }
  
  export default Home;