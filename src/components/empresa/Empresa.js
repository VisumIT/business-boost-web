import React, { Component } from 'react';
import CardEmpresa from './CardEmpresa';
import Api from '../../axios/api';

class Empresa extends Component {

    state={
        companies:[]
    }

    componentDidMount = async () => {
        await Api.get("/companies")
            .then(response=>this.setState({
                companies:response.data
            }))
            console.log(this.state);
    }

    render(){

        const renderData = this.state.companies.map(companies=>{
            return(
                <CardEmpresa companies={companies} key={companies.id} refresh={this.componentDidMount}/>
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