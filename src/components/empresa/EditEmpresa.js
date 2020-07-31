import React, { Component } from 'react'
import api from '../../services/api'
import InputMask from 'react-input-mask'
import { getCompany, getCompanyId } from '../../services/auth-service';

class EditEmpresa extends Component {

    state = {
        id: '',
        fictitiousName: '',
        companyName: '',
        cnpj: '',
        stateRegistration: '',
        email: '',
        password: '',
        site: '',
        description: ''
    }

    componentDidMount = async () => {
        const res = getCompany()
        this.setState({
            id: res.id,
            fictitiousName: res.fictitiousName,
            companyName: res.companyName,
            cnpj: res.cnpj,
            stateRegistration: res.stateRegistration,
            email: res.email,
            password: res.password,
            site: res.site,
            description: res.description
        })
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (event) => {
        event.preventDefault()
        const dados = this.state
        delete dados.password
        try {
            const res = await api.put(`/companies/${getCompanyId()}`, dados)
            if(res.status === 200){
                this.props.history.push('/user/company')
            }
        } catch (error) {
           console.log(error) 
        }
    }

    render() {

        const { fictitiousName, companyName, cnpj, stateRegistration, email, password, site, description } = this.state

        return (
            <div className="container">
                <h2>Editar Empresa</h2>

                <form onSubmit={this.handlerSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nome Fantasia</label>
                        <input
                            className="form-control"
                            placeholder="nome fantasia"
                            type="text"
                            name="fictitiousName"
                            value={fictitiousName}
                            onChange={this.handlerChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Razão Social</label>
                        <input
                            className="form-control"
                            placeholder="razão social"
                            type="text"
                            name="companyName"
                            value={companyName}
                            onChange={this.handlerChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">CNPJ</label>
                        <InputMask
                            mask="99.999.999/9999-99"
                            className="form-control"
                            placeholder="CNPJ"
                            type="text"
                            name="cnpj"
                            value={cnpj}
                            onChange={this.handlerChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Inscrição Estadual</label>
                        <InputMask
                            mask="999.999.999.999"
                            className="form-control"
                            placeholder="Inscrição Estadual"
                            type="text"
                            name="stateRegistration"
                            value={stateRegistration}
                            onChange={this.handlerChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input
                            className="form-control"
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handlerChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Senha</label>
                        <input
                            className="form-control"
                            placeholder="Senha"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handlerChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Site</label>
                        <input
                            className="form-control"
                            placeholder="Site"
                            type="text"
                            name="site"
                            value={site}
                            onChange={this.handlerChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Descrição</label>
                        <textarea
                            className="form-control textarea-resize"
                            rows="3"
                            placeholder="Descrição"
                            type="text"
                            name="description"
                            value={description}
                            onChange={this.handlerChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-4">Editar</button>
                </form>
            </div>
        )
    }
}

export default EditEmpresa;