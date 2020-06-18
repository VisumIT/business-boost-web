import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Empresa from './Empresa';
import Representante from './Representantes';
import ListaRepresentante from './ListaRepresentantes';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Pedidos from './Pedidos/Pedidos';


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
            {/* <h1>Criando Menu de navegação</h1> */}

            <Router>
                <Navbar /> 

                <Switch>
                    <PrivateRoutes path='/empresa' component={Empresa} />
                    <PrivateRoutes path='/representante' component={Representante} />
                    <PrivateRoutes path='/listaderepresentantes' component={ListaRepresentante} />
                    <PrivateRoutes path='/dashboard' component={Dashboard} />
                    <PrivateRoutes path='/orders' component={Pedidos} />
                </Switch>
            </Router>
        </>
    )
  }
  
  export default Home;