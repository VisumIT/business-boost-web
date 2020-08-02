import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert'
import { getCompanyId } from '../../services/auth-service'
import api from '../../services/api';

class CadastroProduto extends Component {

    state = {
        name: '',
        price: '',
        discount: '',
        brand: '',
        category: '',
        reference: '',
        deliveryTime: '',
        status: '',
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

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (event) => {
        event.preventDefault();

        const verificaErro = (result) => {
            console.log(result)
            if (result.id != null) {
                this.props.history.push('/user/products')
                this.CadastroSucesso()
            } else {
                this.ErroCadastro(result)
            }
        }

        try {
            const res = await api.post(`/company/${getCompanyId()}/products`, this.state)
            if(res.status === 201){
                verificaErro(res.data)
            }else{
                console.log(res)
            }
        } catch (error) {
            console.log(error)
        }
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
                                step="0.01" 
                                min="0" 
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
                            <select class="custom-select" name="deliveryTime" onChange={this.handlerChange}>
                                <option value="mensal">mensal</option>
                                <option value="diaria">diaria</option>
                            </select>
                        </div>
                        <div className="form-group ml-4 mr-4">
                            <label className="float-left" htmlFor="exampleInputEmail1">Status</label>
                            <select class="custom-select" name="status" onChange={this.handlerChange}>
                                <option value="active">ativo</option>
                                <option value="disable">desativo</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary mb-4">Cadastre</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CadastroProduto;