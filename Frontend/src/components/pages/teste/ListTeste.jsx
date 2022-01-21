import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { retrieveTestes, deleteTeste } from "../../../conection/testes/actions";

class ListTeste extends Component {

  componentDidMount() {
    this.props.retrieveTestes();
  }

  removeTeste = (id) => {

    this.props.deleteTeste(id).then(() => {

      this.props.retrieveTestes();

    });

  };

  render() {

    const { testes } = this.props;

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
              <h3 style={{ color: "#456caf" }}>Lista de Testes</h3>
              <br />

              <div>
                <div className="col-2">
                  <Link to="/add-teste" className="btn btn-success">
                    <i class="fas fa-plus" /> Adicionar
                  </Link>
                </div>
                <br />


              </div>

              <div className="table-responsive">
                <table className="table table-striped">

                  <thead>

                    <tr>
                      <th>ID</th>

                      <th>Name</th>

                      <th>Email</th>

                      <th>Telefone</th>

                      <th>Data</th>

                      <th>Actions</th>

                    </tr>

                  </thead>

                  <tbody>

                    {testes &&

                      testes.map(

                        ({ id, attributes: { nome, email, tel, date } }, i) => (

                          <tr key={i}>
                            <td>{id}</td>

                            <td>{nome}</td>

                            <td>{email}</td>

                            <td>{tel}</td>

                            <td>{date}</td>


                            <td className="table-action-col">
                              <div className="row g-1">
                                <div className="col-xs-12 col-md-6 text-center">
                                  <Link
                                    className="btn btn-danger btn-sm me-2"
                                    onClick={() => this.removeTeste(id)}>

                                    <i className="fas fa-trash" /> Eliminar
                                  </Link>
                                </div>

                                <div className="col-xs-6 col-md-6 text-center">
                                  <Link
                                    to={`/edit-teste/${id}`}
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
      </>
    );

  }

}

const mapStateToProps = (state) => {

  return {

    testes: state.testes,

  };

};

export default connect(mapStateToProps, { retrieveTestes, deleteTeste })(ListTeste);