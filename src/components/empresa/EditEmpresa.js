import React, { Component } from 'react'
import Api from '../../axios/api'
import InputMask from 'react-input-mask'
import { getCompany, getCompanyId, getToken} from '../../services/auth-service';

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
        
        // const res = await Api.get('/companies/' + id)
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
        // const req = this.state
        // delete req.password
        // console.log(req)
        // console.log(getCompanyId())
        // await Api.put(`/companies/${getCompanyId()}`, { 
        //     headers: {
        //         Authorization: getToken()
        //     },
        //     data: req

        // })
        // this.props.history.push('/user/company')



        var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwNkAwNi5jb20iLCJleHAiOjE1OTU2MjA0ODl9.YvU6uMtdbonWz3ysfpYScpGkUK64M3LW4U-b-9q6eks7-lq2mrjQLAbi3xAghTg04Hxw6tEno3U5YnuGQMP3SQ");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"phones":[{"number":"1141419967"},{"number":"1141419967"}],"address":"Sol","publicPlace":"Rua","site":"mc.com","number":"1002","uf":"SP","neighborhood":"Jardim Tupanci","city":"Barueri","cep":"06414-070","stateRegistration":"121.375.209.410","companyName":"Benedita e Marcelo Restaurante ME","cnpj":"23.407.610/0001-00","fictitiousName":"Mc Donalds","email":"06@06.com","password":"123456789","description":"comercio de alimentos"});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/companies/8", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
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