import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { retrieveServicos, deleteServico } from "../../../conection/servicos/actions";

import moment from 'moment';

import { ExportCSV } from '../../ExportEx/ExportCSV'

import ConfirmationDialog from "../../Modal/ConfirmationDialog";

class ListServico extends Component {
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
    this.props.retrieveServicos();
  }

  removeServico = (id) => {

    this.props.deleteServico(id).then(() => {

      this.props.retrieveServicos();
this.handleModalOpen();
    });

  };

  render() {

    const { servicos } = this.props;

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
              <h3 style={{ color: "#456caf" }}>Lista de Serviços</h3>
             

              <div className="row mt-4">
                <div className="col-lg-4">
                  <Link to="/add-servico" className="btn btn-success">
                    <i class="fas fa-plus" /> Adicionar
                  </Link>
                </div>
                <div className="col-lg-4 center">
                  <ExportCSV csvData={this.props.servicos} fileName="Serviços" />
                </div>
                <div className="end" />

              </div>

              <div className="table-responsive">
                <table className="table table-striped">

                  <thead>

                    <tr>
                      <th>#</th>

                      <th>Paciente</th>
                      
                      <th>Medico (a)</th>

                      <th>Tipo</th>

                      <th>Data - Horario</th>

                      <th>Urgente</th>

                      <th>Custo</th>

                      <th>Descrição</th>

                      <th>Actions</th>

                    </tr>

                  </thead>

                  <tbody>

                    {servicos &&

                      servicos.map(

                        ({ id, descricao, custo, date, tipo, urgente, paciente, funcionario }, i) => (

                          <tr key={i}>
                            <td>{i+1}</td>

                            <td>{paciente.nome}</td>

                            <td>{funcionario.nome}</td>

                            <td>{tipo}</td>

                            <td>{moment(date).format('DD/MM/YYYY - h:mm:ss')}</td>

                            <td>{urgente}</td>

                            <td>{custo} Ecv</td>

                            <td>{descricao}</td>


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
                                    to={`/edit-servico/${id}`}
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
          title="Eliminar Serviço?"
          openModal={this.handleModalOpen}
          modalIsOpen={this.state.isOpen}
          remove={this.removeServico}
          id={this.state.itemId}
        />
      </>
    );

  }

}

const mapStateToProps = (state) => {

  return {

    servicos: state.servicos,

  };

};

export default connect(mapStateToProps, { retrieveServicos, deleteServico })(ListServico);