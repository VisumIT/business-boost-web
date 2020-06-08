import React, { Component } from 'react'
import Api from '../../axios/api'

class EditEmpresa extends Component {

    state = {
        id: '',
        nomeFantasia: '',
        razaoSocial: '',
        cnpj: '',
        inscricaoEstadual: '',
        email: '',
        senha: '',
        site: '',
        descricao: ''
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const res = await Api.get('/empresa/' + id)

        this.setState({
            id: res.data.id,
            nomeFantasia: res.data.nomeFantasia,
            razaoSocial: res.data.razaoSocial,
            cnpj: res.data.cnpj,
            inscricaoEstadual: res.data.inscricaoEstadual,
            email: res.data.email,
            senha: res.data.senha,
            site: res.data.site,
            descricao: res.data.descricao
        })
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (event) => {
        event.preventDefault()
        await Api.put('/empresa/' + this.state.id, this.state)
        this.props.history.push('/empresa')
    }

    render() {

        const { nomeFantasia, razaoSocial, cnpj, inscricaoEstadual, email, senha, site, descricao } = this.state

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
                            name="nomeFantasia"
                            value={nomeFantasia}
                            onChange={this.handlerChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Razão Social</label>
                        <input
                            className="form-control"
                            placeholder="razão social"
                            type="text"
                            name="razaoSocial"
                            value={razaoSocial}
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
                            name="inscricaoEstadual"
                            value={inscricaoEstadual}
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
                            type="text"
                            name="senha"
                            value={senha}
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
                            name="descricao"
                            value={descricao}
                            onChange={this.handlerChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-4">Editar</button>
                </form>
            </div>
        )
    }
}

export default EditEmpresa;