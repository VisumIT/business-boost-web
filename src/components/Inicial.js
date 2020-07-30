import React from 'react';

import imagem from '../components/empresa/imagens/Capturar23.png'
import missao from './imagens/missao.png'
import visao from './imagens/visao.png'
import valores from './imagens/valores.png'

import './inicial.css'

function Inicial() {

    return (
        <div>
            <nav class="navbar navbar_inicial navbar-expand-lg navbar-light margin">
                <a class="navbar-brand" href="#">
                    <img src={imagem} width="100" height="80"></img>
                </a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#quemsomos">Quem somos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#mvl">Parceiros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#servicos">Serviços</a>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-light border border-dark mr-2" type="submit">
                    <a href="users/sign_in">Login</a>
                </button>
                <button className="btn btn-light border border-dark" type="submit">
                    <a href="users/sign_up">Cadastre-se</a>
                </button>
            </nav>

            <section id="quemsomos">
                <div class="container-fluid quem-somos text-center margin">
                    <h2>Quem somos</h2>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <img src={imagem} class="rounded-circle" width="350" height="350"></img>
                            </div>
                            <div class="col-lg-6 mt-5">
                                <h3>A VisumIt é uma empresa focada em tecnologia, visando revolucionar o mercado com nossos sistemas. <br /> A VisumIt foi fundada em 2020 com a intenção de fazer da sua visão o nosso negocio</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="mvl">
                <div class="container-fluid text-center margin mvl">
                    <h2 class="margin">MISSÃO, VISÃO E VALORES</h2>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <img src={missao} width="100%" height="250" alt=""></img>
                                <h4>contribuir para o crescimento do mercado em geral, tornando a visão de nossos clientes realidade com a tecnologia.</h4>
                            </div>
                            <div class="col-lg-4">
                                <img src={visao} width="100%" height="250" alt=""></img>
                                <h4>ser referência mundial no setor de tecnologia.</h4>
                            </div>
                            <div class="col-lg-4">
                                <img src={valores} width="100%" height="250" alt=""></img>
                                <h4>eficiência, compromisso, inovação, confiabilidade e flexibilidade.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="servicos">
                <div class="container-fluid text-center margin servicos">
                    <h2 class="margin">SERVICOS</h2>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi magna, aliquet ut viverra eu, suscipit tincidunt nisi. Aliquam sit amet enim</p>
                                <img src={imagem} width="100%" alt=""></img>
                            </div>
                            <div class="col-lg-4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi magna, aliquet ut viverra eu, suscipit tincidunt nisi. Aliquam sit amet enim</p>
                                <img src={imagem} width="100%" alt=""></img>
                            </div>
                            <div class="col-lg-4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi magna, aliquet ut viverra eu, suscipit tincidunt nisi. Aliquam sit amet enim</p>
                                <img src={imagem} width="100%" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="container-fluid text-center bg-footer margin">
                <p>Desenvolvido por Igor Pereira</p>
            </footer>
        </div>
    )
}

export default Inicial;