import React, { Component } from 'react'
import Api from '../../axios/api'

class AddEmpresa extends Component {

    state = {
        nomeFantasia: '',
        razaoSocial: '',
        cnpj: '',
        inscricaoEstadual: '',
        email: '',
        senha: '',
        site: '',
        descricao: ''
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (event) => {
        event.preventDefault()
        await Api.post('/empresa', this.state)
        this.props.history.push('/empresa')
    }

    // handlerSubmit = async (e) => {
    //     e.preventDefault()
    //     Api.post('/empresa',this.state)
    //         .then(function(response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //     });
    // }

    render() {
        return (
            <div className="container wrapper bg-success">
                <div className="">

                </div>
                <h2>Add Empresa</h2>

                <form onSubmit={this.handlerSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nome Fantasia</label>
                        <input
                            className="form-control"
                            placeholder="nome fantasia"
                            type="text"
                            name="nomeFantasia"
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
                            onChange={this.handlerChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-4">Enviar</button>
                </form>

            </div>
        )
    }
}

export default AddEmpresa;