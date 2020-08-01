import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import { confirmAlert } from 'react-confirm-alert';
import { signIn } from '../../services/auth-service';

import './CadastroEmpresa.css'
import api from '../../services/api';

class CadastroEmpresa extends Component {

    state = {
        fictitiousName: '',
        companyName: '',
        cnpj: '',
        stateRegistration: '',
        email: '',
        password: '',
        site: '',
        description: '',
        logo: 'https://storage.googleapis.com/teste-ds3-5ded5.appspot.com/company_avatar.png-1835752190'
    }

    async CadastroSucesso() {
        confirmAlert({
            title: 'Bussiness Boost',
            message: 'Registration success',
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        })
    }

    async ErroCadastro(erro) {

        var inputCnpj = document.getElementById('cnpj')
        var inputEmail = document.getElementById('email')

        if (erro.Errors) {
            var mensagem = erro.Errors[0].Message
            if (erro.Errors[0].Field === 'cnpj') {
                inputEmail.style.borderColor = "80bdff"
                inputCnpj.style.borderColor = "red";
            }
        } else {
            mensagem = erro.message
            inputCnpj.style.borderColor = "#80bdff"
            inputEmail.style.borderColor = "red"
        }

        confirmAlert({
            title: 'Bussiness Boost',
            message: "Registration error: " + mensagem,
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        })
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (event) => {
        event.preventDefault();

        var dados = JSON.stringify({
            "fictitiousName": this.state.fictitiousName,
            "companyName": this.state.companyName,
            "cnpj": this.state.cnpj,
            "stateRegistration": this.state.stateRegistration,
            "email": this.state.email,
            "password": this.state.password,
            "site": this.state.site,
            "description": this.state.description
        });

        const verificaErro = async (result) => {

            if (result.id != null) {

                try {
                    const { email } = result
                    const password = this.state.password
                    const res = await signIn({ email, password })
                    if (res.status === 403 || res.status === 400) {
                        this.ErroCadastro(result)
                    } else {
                        this.props.history.push('/user/dashboard')
                        this.CadastroSucesso()
                    }

                } catch (error) {
                    console.log(error)
                }

            } else {
                this.ErroCadastro(result)
            }
        }
        
        try {
            const res = await api.post('/companies', dados)
            if(res.status === 201){
                verificaErro(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div id="inicial">
                <div className="container-fluid h-100">
                    <div className="row h-100 text-center">
                        <div className="col-5 bg-primary img-representante center-row">
                            <div className="col-7  mx-auto h-50 w-50">
                                <div className="row row-logo-empresa">

                                </div>
                                <div className="row">
                                    <p className="h3 mx-auto">Fazendo da sua visão<br />o nosso negócio</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-7 ">

                            <nav className="navbar navbar-light ">
                                <a className="navbar-brand" href="#****"><div></div></a>
                                <form className="form-inline">
                                    <button className="btn btn-light border border-dark mr-2" type="submit">
                                        <a href="sign_in">Login</a>
                                    </button>
                                    <button className="btn btn-light border border-dark" type="submit">
                                        <a href="sign_up">Cadastre-se</a>
                                    </button>

                                </form>
                            </nav>
                            <div className="form-row m-1">
                                <h2 className="mx-auto col-md-10">Seja bem vindo ao Bussiness Boost!</h2>
                                <div className="row-logo col-md-2"></div>
                            </div>
                            <div className="row m-5">
                                <h3 className="mx-auto text-primary font-weight-bold">Junte-se a nós e de um boost no seu negócio</h3>
                            </div>
                            <div className="row w-75 mx-auto pt-2 pb-2 ">
                                <form className="mx-auto w-100" onSubmit={this.handlerSubmit}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="float-left" htmlFor="exampleInputEmail1">Nome Fantasia</label><br />
                                            <input
                                                className="line-input"
                                                placeholder="nome fantasia"
                                                type="text"
                                                name="fictitiousName"
                                                onChange={this.handlerChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="float-left" htmlFor="exampleInputEmail1">Razão Social</label><br />
                                            <input
                                                className="line-input"
                                                placeholder="razão social"
                                                type="text"
                                                name="companyName"
                                                onChange={this.handlerChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="float-left mt-3" htmlFor="exampleInputEmail1">CNPJ</label><br />
                                            <InputMask
                                                mask="99.999.999/9999-99"
                                                className="line-input"
                                                placeholder="CNPJ"
                                                type="text"
                                                name="cnpj"
                                                id="cnpj"
                                                onChange={this.handlerChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label className="float-left mt-3" htmlFor="exampleInputEmail1">Inscrição Estadual</label><br />
                                            <InputMask
                                                mask="999.999.999.999"
                                                className="line-input"
                                                placeholder="Inscrição Estadual"
                                                type="text"
                                                name="stateRegistration"
                                                onChange={this.handlerChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="float-left mt-3" htmlFor="exampleInputEmail1">Email</label><br />
                                            <input
                                                className="line-input"
                                                placeholder="Email"
                                                type="email"
                                                name="email"
                                                id="email"
                                                onChange={this.handlerChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="float-left mt-3" htmlFor="exampleInputEmail1">Senha</label><br />
                                            <input
                                                className="line-input"
                                                placeholder="Senha"
                                                type="password"
                                                minLength="8"
                                                name="password"
                                                onChange={this.handlerChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-4">Cadastre</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CadastroEmpresa;