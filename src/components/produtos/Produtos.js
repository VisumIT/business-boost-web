import PubSub from 'pubsub-js'
import React, { Component } from 'react';
import CardProduto from './CardProduto';
import Api from '../../axios/api';
import { Link } from 'react-router-dom';
import { getCompanyId } from '../../services/auth-service'

class Produto extends Component {

    state = {
        products: [],
        detalhesProduct: ''
    }

    componentDidMount = async () => {
        await Api.get(`/company/${getCompanyId()}/products`)
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

                <div className="card mt-3">
                    <div className="card-header">
                        <h5>Lista de Produtos</h5>
                        <div class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="" aria-label="Search"></input>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                        </div>

                        <Link to="/user/newProduct"> <h6 className='mt-3'>Cadastrar Produto</h6> </Link>
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
                    <div className="modal-dialog" role="document" style={{ width: 25 + 'rem' }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{this.state.detalhesProduct.name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='card'>
                                    <img src={this.state.detalhesProduct.imagesUrl} className="card-img-top img-tamanho" alt="..."></img>
                                    <div class="card-body">
                                        <p><strong className="h5">Categoria:</strong> {this.state.detalhesProduct.category} </p>
                                        <p><strong className="h5">Tipo de entrega:</strong> {this.state.detalhesProduct.deliveryTime} </p>
                                        <p><strong className="h5">Status:</strong> {this.state.detalhesProduct.status} </p>
                                        <p><strong className="h5">Preço normal:</strong> {this.state.detalhesProduct.price} </p>
                                        <p><strong className="h5">Desconto:</strong> {this.state.detalhesProduct.discount}% </p>
                                        <p><strong className="h5">Preço Total:</strong> {this.state.detalhesProduct.totalPrice} </p>

                                    </div>
                                </div>


                                {/* <div class="card mb-3">
                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src={this.state.detalhesProduct.imagesUrl} class="card-img h-100" alt="..."></img>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Produto;