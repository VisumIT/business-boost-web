import React, { Component, useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Image, ButtonGroup, Button } from "react-bootstrap";
import "./style.css";
import api from "../../services/api";

/*
Listagem de Pedidos
Victor F. Amaral
*/

const ModalPedidos = (props) => {

  return (
    <div
      className="modal"
      tabindex="9"
      role="dialog"
      style={{ display: "block" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar o pedido</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                props.showModal();
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => {
                props.showModal();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

class Pedidos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      pedidos: [],
    }
  }

  

  componentDidMount() {
    api.get("/orders").then((response) => {
      this.setState({
        pedidos: response.data
      });
    });
  }

  // chamarModal = () => {
  //     this.setState({
  //         isShowing: true
  //     });
  // }

  // fecharModal = () => {
  //     this.setState({
  //         isShowing: false
  //     });
  // }

  showModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    var listaPedidos = this.state.pedidos;
    return (
      <div className="mb-3 card">
        <div className="card-header">
          <div className="alignm-items-center">
            <div className="col">
              <h5>Pedidos</h5>
            </div>
            <div className="text-right col-auto"></div>
          </div>
        </div>
        <div className="p-0 card-body">
          <div className="table-responsive">
            <div className="react-bootstrap-table">
              <Table className="table table-dashboard table-striped table-sm fs--1 border-bottom mb-0 table-dashboard-th-nowrap">
                <thead>
                  <tr className="bg-200 text-900">
                    <th
                      className="selection-cell-header"
                      data-row-selection="true"
                    >
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" />
                        <label class="custom-control-label" />
                      </div>
                    </th>
                    <th
                      tabIndex="0"
                      arial-label="Order sortable"
                      className="sortable"
                    >
                      Pedidos
                      <span className="order-4"></span>
                    </th>
                    <th
                      tabIndex="0"
                      arial-label="Data sortable"
                      className="sortable"
                    >
                      Data
                      <span className="order-4"></span>
                    </th>
                    <th
                      tabIndex="0"
                      arial-label="Data sortable"
                      className="sortable"
                    >
                      Preço
                      <span className="order-4"></span>
                    </th>
                    <th
                      tabIndex="0"
                      arial-label="Data sortable"
                      className="sortable"
                    >
                      Status
                      <span className="order-4"></span>
                    </th>
                    <th
                      tabIndex="0"
                      arial-label="Data sortable"
                      className="sortable"
                    >
                      Editar 
                      <span className="order-4"></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listaPedidos.length === 0 ? (
                    <h1>Teste</h1>
                  ) : (
                    listaPedidos
                      .map((pedido) => (
                        <tr className="btn-reveal-trigger" key={pedido.id}>
                          <td className="selection-cell">
                            <div className="custom-control custom-checkbox">
                              <input className="custom-control-input" />
                              <label className="custom-control-label" />
                            </div>
                          </td>

                          <td className="py-2 align-middle">
                            <a>
                              <strong>{pedido.id}</strong>
                            </a>
                            <br />
                          </td>
                          <td className="py-2 align-middle">
                            <strong>
                              {pedido.createDate.split("T")[0] + " "}
                            </strong>
                            {pedido.createDate.split("T")[1].split(".")[0]}
                          </td>
                          <td className="py-2 align-middle">
                            {/* {(pedido.company.phones.map(phone => (
                                                phone.number + ", "
                                            )))} */}
                            {pedido.priceToPay}{" "}
                          </td>
                          <td className="py-2 align-middle">
                            <span className="d-block p-3  badge badge-soft-success">
                              {pedido.status}
                              <sgv></sgv>
                            </span>
                          </td>
                          <td className="py-2 align-middle">
                            <button
                              className="btn btn-primary"
                              onClick={this.showModal}
                            >
                              Editar Pedido
                            </button>
                          </td>
                        </tr>
                      ))
                      .reverse()
                  )}
                </tbody>
              </Table>
              {this.state.showModal && (
                <ModalPedidos
                  className="modal"
                  showModal={this.showModal}
                  show={this.chamarModal}
                  close={this.fecharModal}
                ></ModalPedidos>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pedidos;
