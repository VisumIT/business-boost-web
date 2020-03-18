import React, { useEffect, useState } from 'react';

function Empresa() {

    const [ razaoSocial, setRazaoSocial] = useState('Coca Cola');
    const [ nomeFantasia, setNomeFantasia] = useState('Fanta');
    const [ cnpj, setCnpj] = useState('4545454545454');
    const [ inscricaoEstadual, setInscricaoEstadual] = useState('');
    const [ email, setEmail] = useState('');
    const [ senha, setSenha] = useState('');
    const [ site, setSite] = useState('');
    const [ descricao, setDescricao] = useState('');

    useEffect( () => {console.log(cnpj)}, [razaoSocial]);


    return(
        <div>
            <input placeholder="razão social" type="text" name="razao_social" onChange={e => setRazaoSocial(e.target.value)} value={razaoSocial} ></input>
            <input placeholder="nome fantasia" type="text" name="nome_fantasia" onChange={e => setNomeFantasia(e.target.value)} value={nomeFantasia} ></input>
            <input placeholder="CNPJ" type="text" name="nome_fantasia" onChange={e => setCnpj(e.target.value)} ></input>
            <input placeholder="Inscrição Estadual" type="text" name="inscricao_estadual" onChange={e => setInscricaoEstadual(e.target.value)} ></input>
            <input placeholder="Email" type="text" name="email" onChange={e => setEmail(e.target.value)} ></input>
            <input placeholder="Senha" type="text" name="senha" onChange={e => setSenha(e.target.value)} ></input>
            <input placeholder="Site" type="text" name="site" onChange={e => setSite(e.target.value)} ></input>
            <input placeholder="Descrição" type="text" name="descricao" onChange={e => setDescricao(e.target.value)} ></input>
        </div>
    )
}

export default Empresa;