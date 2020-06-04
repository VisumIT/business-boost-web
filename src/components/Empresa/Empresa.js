import React, { Component } from 'react';
import CardEmpresa from './CardEmpresa';
import Api from '../../axios/api';

class Empresa extends Component {

    state={
        empresa:[]
    }

    componentDidMount = async () => {
        await Api.get("/empresa")
            .then(response=>this.setState({
                empresa:response.data
            }))

            console.log(this.state)
    }
    
    render(){

        const renderData = this.state.empresa.map(empresa=>{
            return(
                <CardEmpresa empresa={empresa} key={empresa.id} refresh={this.componentDidMount}/>
            )
        })

        return(
            <div className="container-fluid">
                <div className="row">
                    {renderData}
                </div>
            </div>
        )
    }
}

export default Empresa;