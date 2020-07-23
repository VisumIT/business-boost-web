import React from 'react';

function Inicial() {

    return(
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Tela primaria do site!!</h4>
            <p>Criar a pagina de apresentação do produto Business-Boost</p>
            <hr />
            <p className="mb-0"> Criar uma landpage com apresentação do produto. Incluir uma navbar para a tela de cadastro e login, tanto da empresa como representante</p>
            <hr />
            <h3> Fique atento as rotas</h3>

            <p>
                '/users/sign_up' component="CadastroEmpresa" -> cadastrar a empresa <br />
                '/users/sign_in' component="Login"  <br />
                '/user/dashboard' component="Home" -> esse componente é chado assim que faz o login no sistema <br />
                '/' component="Inicial" -> apresentar o produto <br />
            </p>
        </div>
    )
}

export default Inicial;