import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { retrieveEstoques, deleteEstoque } from "../../../conection/estoques/actions";

import { ExportCSV } from '../../ExportEx/ExportCSV'

import ConfirmationDialog from "../../Modal/ConfirmationDialog";


class ListEstoque extends Component {
  constructor(props) {
    super(props);

    this.handleModalOpen = this.handleModalOpen.bind(this);

    this.state = {

      isOpen: false,
      itemId: null,

    };
  }

  handleModalOpen(id) {
    this.setState({ isOpen: !this.state.isOpen, itemId: id });
  }

  componentDidMount() {
    this.props.retrieveEstoques();
  }

  removeEstoque = (id) => {

    this.props.deleteEstoque(id).then(() => {

      this.props.retrieveEstoques();
      this.handleModalOpen();
    });

  };

  render() {

    const { estoques } = this.props;

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="end" />
            <div className="col-1">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">

                  <Link to={`${process.env.PUBLIC_URL}/`}>
                    <i class="fas fa-arrow-left" /> Voltar
                  </Link>

                </span>

              </div>
            </div>
            <div className="col-lg-12">
              <div className="end" />
              <h3 style={{ color: "#456caf" }}>Lista de Estoques</h3>


              <div className="row mt-4">
                <div className="col-lg-4">
                  <Link to="/add-estoque" className="btn btn-success">
                    <i class="fas fa-plus" /> Adicionar
                  </Link>
                </div>
                <div className="col-lg-4 center">
                  <ExportCSV csvData={this.props.estoques} fileName="Estoques" />
                </div>

              </div>

              <div className="end" />



              <div className="table-responsive">
                <table className="table table-striped">

                  <thead>

                    <tr>
                      <th>ID</th>

                      <th>Produto</th>

                      <th>Quantidade</th>

                      <th>Ação</th>

                    </tr>

                  </thead>

                  <tbody>

                    {estoques &&

                      estoques.map(

                        ({ id, nome_produto, quantidade }, i) => (

                          <tr key={i}>
                            <td>{i + 1}</td>

                            <td>{nome_produto}</td>

                            <td>{quantidade}</td>


                            <td className="table-action-col">
                              <div className="row g-1">
                                <div className="col-xs-12 col-md-6 text-center">
                                  <Link
                                    className="btn btn-danger btn-sm me-2"
                                    onClick={() =>
                                      this.handleModalOpen(id)
                                    }>

                                    <i className="fas fa-trash" /> Eliminar
                                  </Link>
                                </div>

                                <div className="col-xs-6 col-md-6 text-center">
                                  <Link
                                    to={`/edit-estoque/${id}`}
                                    className="btn btn-primary btn-sm"
                                  >
                                    <i className="fas fa-edit" /> Editar
                                  </Link>
                                </div>
                              </div>

                            </td>

                          </tr>

                        )

                      )}

                  </tbody>

                </table>
              </div>
              <div className="end" />
            </div>
          </div>
        </div>
        <ConfirmationDialog
          title="Eliminar Estoque?"
          openModal={this.handleModalOpen}
          modalIsOpen={this.state.isOpen}
          remove={this.removeEstoque}
          id={this.state.itemId}
        />
      </>
    );

  }

}

const mapStateToProps = (state) => {

  return {

    estoques: state.estoques,

  };

};

export default connect(mapStateToProps, { retrieveEstoques, deleteEstoque })(ListEstoque);