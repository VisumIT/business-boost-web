import React, { Component } from 'react'
import Api from '../../axios/api'

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
        const id = this.props.match.params.id
        const res = await Api.get('/companies/' + id)

        this.setState({
            id: res.data.id,
            fictitiousName: res.data.fictitiousName,
            companyName: res.data.companyName,
            cnpj: res.data.cnpj,
            stateRegistration: res.data.stateRegistration,
            email: res.data.email,
            password: res.data.password,
            site: res.data.site,
            description: res.data.description
        })
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (event) => {
        event.preventDefault()
        await Api.put('/companies/' + this.state.id, this.state)
        this.props.history.push('/user/company')
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
                        <input
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
                        <input
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
                            className="form-control"
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