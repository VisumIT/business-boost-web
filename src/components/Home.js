import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Empresa from './Empresa';
import Representante from './Representante';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Products from './Products';


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
                    <PrivateRoutes path='/dashboard' component={Dashboard} />
                    <PrivateRoutes path='/produto' component={Products} />

                </Switch>
            </Router>
        </>
    )
  }
  
  export default Home;