import React, { Component } from 'react';

import { confirmAlert } from 'react-confirm-alert'

import { getCompanyId } from '../../services/auth-service'

class CadastroProduto extends Component {

    state = {
        name: '',
        price: '',
        discount: '',
        brand: '',
        category: '',
        reference: '',
        deliveryTime: '',
        status: 'active',
        imagesUrl: "https://storage.googleapis.com/teste-ds3-77189.appspot.com/Teste.png"
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

    // async ErroCadastro(erro) {

    //     if (erro.Errors) {
    //         var mensagem = erro.Errors[0].Message
    //         if (erro.Errors[0].Field === 'cnpj') {
    //             inputEmail.style.borderColor = "80bdff"
    //             inputCnpj.style.borderColor = "red";
    //         }
    //     } else {
    //         var mensagem = erro.message
    //         inputCnpj.style.borderColor = "#80bdff"
    //         inputEmail.style.borderColor = "red"
    //     }

    //     confirmAlert({
    //         title: 'Bussiness Boost',
    //         message: "Registration error: " + mensagem,
    //         buttons: [
    //             {
    //                 label: 'Ok'
    //             }
    //         ]
    //     })
    // }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (event) => {

        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": this.state.name,
            "price": this.state.price,
            "discount": this.state.discount,
            "brand": this.state.brand,
            "category": this.state.category,
            "reference": this.state.reference,
            "deliveryTime": this.state.deliveryTime,
            "status": this.state.status,
            "imagesUrl": this.state.imagesUrl
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const verificaErro = (result) => {
            console.log(result)
            if (result.id != null) {
                this.props.history.push('/user/products')
                this.CadastroSucesso()
            } else {
                this.ErroCadastro(result)
            }
        }


        fetch(`http://52.3.253.2:8080/company/${getCompanyId()}/products`, requestOptions)
            .then(response => response.json())
            .then(result => verificaErro(result))
            .catch(error => console.log(error));

    }

    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row h-100 text-center">
                    <h1 className="mx-auto">Cadastro de Produto</h1>
                    <form className="w-100 mt-3" onSubmit={this.handlerSubmit}>
                            <div className="form-group ml-4 mr-4">
                                <label className="float-left" htmlFor="exampleInputEmail1">Nome do produto</label>
                                <input
                                    className="form-control"
                                    placeholder="Nome do produto"
                                    type="text"
                                    name="name"
                                    onChange={this.handlerChange}
                                />
                            </div>
                            <div className="form-group ml-4 mr-4">
                                <label className="float-left" htmlFor="exampleInputEmail1">Preço</label>
                                <input
                                    className="form-control"
                                    placeholder="Preço"
                                    type="number"
                                    name="price"
                                    onChange={this.handlerChange}
                                />
                            </div>
                            <div className="form-group ml-4 mr-4">
                                <label className="float-left" htmlFor="exampleInputEmail1">Desconto</label>
                                <input
                                    className="form-control"
                                    placeholder="discount"
                                    type="number"
                                    name="discount"
                                    onChange={this.handlerChange}
                                />
                            </div>
                            <div className="form-group ml-4 mr-4">
                                <label className="float-left" htmlFor="exampleInputEmail1">Marca</label>
                                <input
                                    className="form-control"
                                    placeholder="Marca"
                                    type="text"
                                    name="brand"
                                    onChange={this.handlerChange}
                                />
                            </div>

                            <div className="form-group ml-4 mr-4">
                                <label className="float-left" htmlFor="exampleInputEmail1">Categoria</label>
                                <input
                                    className="form-control"
                                    placeholder="category"
                                    type="text"
                                    name="category"
                                    onChange={this.handlerChange}
                                />
                            </div>
                            <div className="form-group ml-4 mr-4">
                                <label className="float-left" htmlFor="exampleInputEmail1">referencia</label>
                                <input
                                    className="form-control"
                                    placeholder="reference"
                                    type="text"
                                    name="reference"
                                    onChange={this.handlerChange}
                                />
                            </div>
                            <div className="form-group ml-4 mr-4">
                                <label className="float-left" htmlFor="exampleInputEmail1">deliveryTime</label>
                                <input
                                    className="form-control"
                                    placeholder="deliveryTime"
                                    type="text"
                                    name="deliveryTime"
                                    onChange={this.handlerChange}
                                />
                            </div>
                        <button type="submit" className="btn btn-primary mb-4">Cadastre</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CadastroProduto;