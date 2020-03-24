import React, { useReducer } from 'react';
const axios = require('axios');

function Empresa() {

    const [ empresaInput, setEmpresaInput ] = useReducer(   
        ( state, newState ) => ( { ... state, ... newState } ) ,   
        {
            nome_fantasia : 'Ester e Thales Vidros ME', 
            razao_social : '49.135.462/0001-05', 
            cnpj : '00.156.027/0001-78', 
            inscricao_estadual : '308.151.126.745', 
            email : 'suporte@esterethalesvidrosme.com.br', 
            senha : '123', 
            site : 'www.esterethalesvidrosme.com.br', 
            descricao : 'Desde 2002 no mercado, a Vidraçaria Jardim Ester realiza seus projetos conquistando, através da excelência, os mais diversos clientes, desde empresas à residências.', 
        },
    );

    const handleChange = e => {
        const { name, value } = e.target;
        setEmpresaInput({[name]: value});
    }

    const enviaDados = async (e) => {
        e.preventDefault()
        console.log(empresaInput)
        return
        axios.post('http://localhost:8080/empresa', {
                empresaInput
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
        });
    }

    return(
        <div className="container">
            {console.log(empresaInput)}
            <form method="post" onSubmit={enviaDados}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nome Fantasia</label>
                    <input 
                        className="form-control"
                        placeholder="nome fantasia" 
                        type="text" 
                        name="nome_fantasia" 
                        value={empresaInput.nome_fantasia}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Razão Social</label>
                    <input 
                        className="form-control"
                        placeholder="razão social" 
                        type="text" 
                        name="razao_social" 
                        value={empresaInput.razao_social}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">CNPJ</label>
                    <input 
                        className="form-control"
                        placeholder="CNPJ" 
                        type="text" 
                        name="cnpj" 
                        value={empresaInput.cnpj}
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Inscrição Estadual</label>
                    <input 
                        className="form-control"
                        placeholder="Inscrição Estadual" 
                        type="text" 
                        name="inscricao_estadual" 
                        value={empresaInput.inscricao_estadual}
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input 
                        className="form-control"
                        placeholder="Email" 
                        type="email" 
                        name="email" 
                        value={empresaInput.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Senha</label>
                    <input 
                        className="form-control"
                        placeholder="Senha" 
                        type="text" 
                        name="senha" 
                        value={empresaInput.senha}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Site</label>
                    <input 
                        className="form-control"
                        placeholder="Site" 
                        type="text" 
                        name="site" 
                        value={empresaInput.site}
                        onChange={handleChange} 
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
                        value={empresaInput.descricao}
                        onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-4">Enviar</button>
            </form>
        </div>
    )
}

export default Empresa;