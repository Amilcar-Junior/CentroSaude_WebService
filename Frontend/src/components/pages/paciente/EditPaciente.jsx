import React, { Component } from "react";

import { connect } from "react-redux";

import { updatePaciente } from "../../../conection/pacientes/actions";

import { Redirect, Link } from "react-router-dom";

import PacientesService from "../../../conection/pacientes/pacientesService";


class EditPaciente extends Component {
    constructor(props) {
        super(props);

        this.onChangeBi = this.onChangeBi.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeData_nascimento = this.onChangeData_nascimento.bind(this);
        this.onChangeMorada = this.onChangeMorada.bind(this);
        this.onChangeContacto = this.onChangeContacto.bind(this);
        this.savePaciente = this.savePaciente.bind(this);

        this.state = {
            id: "",
            currentPaciente: {
                
                
                bi: "",
            nome: "",
            data_nascimento: "",
            morada: "",
            contacto: "",

            
            },
            

            redirect: false,
        };
    }

    componentDidMount() {
        this.getPaciente(window.location.pathname.replace("/edit-paciente/", ""));
    }

    onChangeBi(e) {
        const bi = e.target.value;

        this.setState(function (prevState) {
            return {
                currentPaciente: {
                    ...prevState.currentPaciente,

                    bi: bi,
                },
            };
        });
    }
    onChangeNome(e) {
        const nome = e.target.value;

        this.setState(function (prevState) {
            return {
                currentPaciente: {
                    ...prevState.currentPaciente,

                    nome: nome,
                },
            };
        });
    }
    onChangeData_nascimento(e) {
        const data_nascimento = e.target.value;

        this.setState(function (prevState) {
            return {
                currentPaciente: {
                    ...prevState.currentPaciente,

                    data_nascimento: data_nascimento,
                },
            };
        });
    }
    onChangeMorada(e) {
        const morada = e.target.value;

        this.setState(function (prevState) {
            return {
                currentPaciente: {
                    ...prevState.currentPaciente,

                    morada: morada,
                },
            };
        });
    }
    onChangeContacto(e) {
        const contacto = e.target.value;

        this.setState(function (prevState) {
            return {
                currentPaciente: {
                    ...prevState.currentPaciente,

                    contacto: contacto,
                },
            };
        });
    }

    


    getPaciente(id) {
        PacientesService.get(id).then((response) => {
            console.log(response.data.data)
            this.setState({
                currentPaciente: response.data.data.attributes,
                id: response.data.data.id
            });
        });
    }

    async savePaciente() {
        
        this.props

            .updatePaciente(
                this.state.id,
                { ...this.state.currentPaciente}
            )

            .then(() => {
                this.setState({
                    redirect: true,
                });
            });
        console.log(this.state.currentPaciente)
    }

    render() {
        const { redirect, currentPaciente } = this.state;
        
        if (redirect) {
            return <Redirect to="/list-paciente" />;
        }

        return (
            <>

                <div className="container">
                    <div className="row">
                        <div className="end"/>
                        <div className="col-1">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">

                                    <Link to={`${process.env.PUBLIC_URL}/list-paciente`}>
                                        <i class="fas fa-arrow-left" /> Voltar
                                    </Link>

                                </span>

                            </div>
                        </div>
                        <div className="end" />
                        <div className="col-lg-12">
                            <form>
                                <div className="submit-form">
                                    <div className="ask-inputs">
                                        <div className="row">
                                            <h5 style={{ color: "#456caf" }}>Editar Dados do Paciente</h5>

                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <h6 htmlFor="bi">BI</h6>

                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="bi"
                                                        required
                                                        value={currentPaciente.bi}
                                                        onChange={this.onChangeBi}
                                                        name="bi"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="nome">Nome</h6>

                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="nome"
                                                        required
                                                        value={currentPaciente.nome}
                                                        onChange={this.onChangeNome}
                                                        name="nome"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <h6 htmlFor="data_nascimento">Data Nascimento</h6>

                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        id="data_nascimento"
                                                        required
                                                        value={currentPaciente.data_nascimento}
                                                        onChange={this.onChangeData_nascimento}
                                                        name="data_nascimento"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="form-group">
                                                    <h6 htmlFor="morada">Morada</h6>

                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="morada"
                                                        required
                                                        value={currentPaciente.morada}
                                                        onChange={this.onChangeMorada}
                                                        name="morada"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <h6 htmlFor="contacto">Contacto</h6>

                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="contacto"
                                                        required
                                                        value={currentPaciente.contacto}
                                                        onChange={this.onChangeContacto}
                                                        name="contacto"
                                                    />
                                                </div>
                                            </div>

                                            

                                            <div className="col-lg-12">
                                                <div className="center">
                                                    <Link
                                                        to={`${process.env.PUBLIC_URL}/list-paciente`}
                                                        onClick={this.savePaciente}
                                                        className="btn-second"
                                                    >
                                                        Editar
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="end" />
            </>
        );
    }
}

export default connect(null, { updatePaciente })(EditPaciente);
