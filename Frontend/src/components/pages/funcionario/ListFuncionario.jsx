import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { retrieveFuncionarios, deleteFuncionario } from "../../../conection/funcionarios/actions";



class ListFuncionario extends Component {

  componentDidMount() {
    this.props.retrieveFuncionarios();
  }

  removeFuncionario = (id) => {

    this.props.deleteFuncionario(id).then(() => {

      this.props.retrieveFuncionarios();

    });

  };

  render() {

    const { funcionarios } = this.props;

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
              <h3 style={{ color: "#456caf" }}>Lista de Funcionarios</h3>
              <br />

              <div>
                <div className="col-2">
                  <Link to="/add-funcionario" className="btn btn-success">
                    <i class="fas fa-plus" /> Adicionar
                  </Link>
                </div>
                <br />


              </div>

              <div className="table-responsive">
                <table className="table table-striped">

                  <thead>

                    <tr>
                      <th>#</th>

                      <th>BI</th>

                      <th>Nome</th>

                      <th>Morada</th>

                      <th>Email</th>

                      <th>Contacto</th>

                      <th>Especialidade</th>

                      <th>Cargo</th>

                      <th>Ação</th>

                    </tr>

                  </thead>

                  <tbody>

                    {funcionarios &&

                      funcionarios.map(

                        ({ id, attributes: { bi, nome, morada, email, contacto, especialidade, cargo } }, i) => (

                          <tr key={i}>

                            <td>{i+1}</td>

                            <td>{bi}</td>

                            <td>{nome}</td>

                            <td>{morada}</td>
                            
                            <td>{email}</td>
                            
                            <td>{contacto}</td>

                            <td>{especialidade}</td>

                            <td>{cargo}</td>

                            <td className="table-action-col">
                              <div className="row g-1">
                                <div className="col-xs-12 col-md-6 text-center">
                                  <Link
                                    className="btn btn-danger btn-sm me-2"
                                    onClick={() => this.removeFuncionario(id)}>

                                    <i className="fas fa-trash" /> Eliminar
                                  </Link>
                                </div>

                                <div className="col-xs-6 col-md-6 text-center">
                                  <Link
                                    to={`/edit-funcionario/${id}`}
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

    funcionarios: state.funcionarios,

  };

};

export default connect(mapStateToProps, { retrieveFuncionarios, deleteFuncionario })(ListFuncionario);