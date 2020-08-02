import React, { Component } from 'react'
import api from '../../services/api'

import { getCompanyId } from '../../services/auth-service'

class EditProduto extends Component {

    state = {
        id: '',
        name: '',
        price: '',
        discount: '',
        brand: '',
        category: '',
        reference: '',
        deliveryTime: '',
        status: '',
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const res = await api.get('/company/products/' + id)

        this.setState({
            id: res.data.id,
            name: res.data.name,
            price: res.data.price,
            discount: res.data.discount,
            brand: res.data.brand,
            category: res.data.category,
            reference: res.data.reference,
            deliveryTime: res.data.deliveryTime
        })
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (event) => {
        event.preventDefault()
        await api.put(`/company/${getCompanyId()}/products`, this.state)
        this.props.history.push('/user/products')
    }

    render() {

        const { name, price, discount, brand, category, reference, deliveryTime } = this.state

        return (
            <div className="container">
                <h2>Editar Produto</h2>

                <form onSubmit={this.handlerSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nome</label>
                        <input
                            className="form-control"
                            placeholder="nome"
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handlerChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Preço</label>
                        <input
                            className="form-control"
                            placeholder="price"
                            type="number"
                            name="price"
                            value={price}
                            onChange={this.handlerChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Desconto</label>
                        <input
                            className="form-control"
                            placeholder="discount"
                            type="number"
                            name="discount"
                            value={discount}
                            onChange={this.handlerChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Marca</label>
                        <input
                            className="form-control"
                            placeholder="brand"
                            type="text"
                            name="brand"
                            value={brand}
                            onChange={this.handlerChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Categoria</label>
                        <input
                            className="form-control"
                            placeholder="category"
                            type="text"
                            name="category"
                            value={category}
                            onChange={this.handlerChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Referencia</label>
                        <input
                            className="form-control"
                            placeholder="reference"
                            type="text"
                            name="reference"
                            value={reference}
                            onChange={this.handlerChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">deliveryTime</label>
                        <input
                            className="form-control"
                            placeholder="deliveryTime"
                            type="text"
                            name="deliveryTime"
                            value={deliveryTime}
                            onChange={this.handlerChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mb-4">Editar</button>
                </form>
            </div>
        )
    }
}

export default EditProduto;