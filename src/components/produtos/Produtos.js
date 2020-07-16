import React, { Component } from 'react';
import CardProduto from './CardProduto';
import Api from '../../axios/api';

class Produto extends Component {

    state = {
        products: []
    }

    componentDidMount = async () => {
        await Api.get("/company/15/products")
            .then(response => this.setState({
                products: response.data
            }))
        console.log(this.state);
    }

    render() {

        const renderData = this.state.products.map(products => {
            return (
                <CardProduto products={products} key={products.id} refresh={this.componentDidMount} />
            )
        })

        return (
            <div className="container-fluid">
                    {/* <h1 className="mx-auto">Produtos</h1>
                    <table class="table table-striped m-2 border">
                        <thead>
                            <tr className="text-center">
                                <th scope="col">Nome</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Desconto</th>
                                <th scope="col">Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                        {renderData}
                        </tbody>
                    </table> */}

                    <div className="card">
                        <div className="card-header">
                            <h5>Lista de Produtos</h5>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">Nome</th>
                                    <th scope="col">Marca</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Preço</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderData}
                            </tbody>
                        </table>
                    </div>





            </div>
        )
    }
}

export default Produto;