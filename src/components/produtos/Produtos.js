import PubSub from 'pubsub-js'
import React, { Component } from 'react';
import CardProduto from './CardProduto';
import Api from '../../axios/api';

class Produto extends Component {

    state = {
        products: [],
        detalhesProduct: ''
    }

    componentDidMount = async () => {
        await Api.get("/company/15/products")
            .then(response => this.setState({
                products: response.data
            }))
        console.log(this.state);
    }

    componentWillMount = () => {
        PubSub.subscribe('produtoDetalhe', (msg, products) => {
            this.setState({
                detalhesProduct: products
            })
        })
    }

    render() {

        const renderData = this.state.products.map(products => {
            return (
                <CardProduto products={products} key={products.id} refresh={this.componentDidMount} />
            )
        })

        return (
            <div className="container-fluid">

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

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    {console.log(this.state.detalhesProduct)}
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Produto;