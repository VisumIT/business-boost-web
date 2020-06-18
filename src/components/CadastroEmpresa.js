import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './CadastroEmpresa.css'

function CadastroEmpresa(){

    return(
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
                                <a className="navbar-brand"></a>
                                <form className="form-inline">
                                    <button className="btn btn-outline-success my-2 mr-2 my-sm-0" type="submit">
                                        <a href="login">Login</a>
                                    </button>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                        <a href="login">Cadastre-se</a>
                                    </button>
                                    
                                </form>
                            </nav>
                        <div className="row row-logo m-1">
                        <h2>Login / Cadastre-se</h2>
                        </div>
                        <div className="row m-5">
                        <h3 className="mx-auto">Olá!<br />Seja bem vindo ao<br />Bussiness Boost</h3>
                        </div>
                        <div className="row w-75 mx-auto pt-2 pb-2">
                        <form className="mx-auto" //onSubmit={this.handlerSubmit}
                        >
                            <div className="form-group">
                                <label className="float-left" htmlFor="exampleInputEmail1">Nome Fantasia</label><br/>
                                <input
                                    className="form-control line-input"
                                    placeholder="nome fantasia"
                                    type="text"
                                    name="nomeFantasia"
                                    //onChange={this.handlerChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="float-left mt-3" htmlFor="exampleInputEmail1">Razão Social</label><br/>
                                <input
                                    className="form-control line-input"
                                    placeholder="razão social"
                                    type="text"
                                    name="razaoSocial"
                                    //onChange={this.handlerChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="float-left mt-3" htmlFor="exampleInputEmail1">CNPJ</label><br/>
                                <input
                                    className="form-control line-input"
                                    placeholder="CNPJ"
                                    type="text"
                                    name="cnpj"
                                    id="cnpj"
                                    //onChange={this.handlerChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="float-left mt-3" htmlFor="exampleInputEmail1">Inscrição Estadual</label><br/>
                                <input
                                    className="form-control line-input"
                                    placeholder="Inscrição Estadual"
                                    type="text"
                                    name="inscricaoEstadual"
                                    id="inscricaoEstadual"
                                    //onChange={this.handlerChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="float-left mt-3" htmlFor="exampleInputEmail1">Email</label><br/>
                                <input
                                    className="form-control line-input"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    //onChange={this.handlerChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="float-left mt-3" htmlFor="exampleInputEmail1">Senha</label><br/>
                                <input
                                    className="form-control line-input"
                                    placeholder="Senha"
                                    type="password" minlength="8"
                                    name="senha"
                                    //onChange={this.handlerChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="float-left mt-3" htmlFor="exampleInputPassword1">Site</label><br/>
                                <input
                                    className="form-control line-input"
                                    placeholder="Site"
                                    type="text"
                                    name="site"
                                    //onChange={this.handlerChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="float-left mt-3" htmlFor="exampleFormControlTextarea1">Descrição</label><br/>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    placeholder="Descrição"
                                    type="text"
                                    name="descricao"
                                    //onChange={this.handlerChange}
                                    ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mb-4">Enviar</button>
                        </form>
                        </div>

                        

                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CadastroEmpresa;