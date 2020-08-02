import React, { Component } from 'react';
import CardEmpresa from './CardEmpresa';
import api from '../../services/api'
import { getCompanyId } from '../../services/auth-service';

class Empresa extends Component {

    state = {
        companies: []
    }
    componentDidMount = async () => {
        try {
            const res = await api.get(`/companies/${getCompanyId()}`)
            this.setState({ companies: res.data })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { companies } = this.state
        return (
            <div className="container-fluid">
                <CardEmpresa companies={companies} key={companies.id} refresh={this.componentDidMount} />
            </div>
        )
    }
}

export default Empresa;