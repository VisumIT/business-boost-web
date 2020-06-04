import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Empresa from './Empresa/Empresa';
import AddEmpresa from './Empresa/AddEmpresa';
import EditEmpresa from './Empresa/EditEmpresa'
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
        <div className="container-fluid wrapper bg-light">

            <div className="row wrapper">
                <Router>
                    <div className="col-2 col-md-2 sidebar text-center">
                        <Navbar /> 
                    </div>

                    <div className="col-10 col-md-10 p-0">
                        <Switch>
                            <PrivateRoutes path='/empresa' component={Empresa} />
                            <PrivateRoutes path='/addEmpresa' component={AddEmpresa}/>
                            <PrivateRoutes path='/editEmpresa/:id' component={EditEmpresa}/>
                            <PrivateRoutes path='/representante' component={Representante} />
                            <PrivateRoutes path='/dashboard' component={Dashboard} />
                            <PrivateRoutes path='/produto' component={Products} />

                        </Switch>
                    </div>
                    
                </Router>
            </div>

        </div>
    )
  }
  
  export default Home;