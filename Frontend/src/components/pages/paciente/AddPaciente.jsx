import React, { Component } from "react";

import { connect } from "react-redux";

import { createPaciente } from "../../../conection/pacientes/actions";

import { Redirect, Link } from "react-router-dom";


class AddPaciente extends Component {
    constructor(props) {
        super(props);

        this.onChangeBi = this.onChangeBi.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeData_nascimento = this.onChangeData_nascimento.bind(this);
        this.onChangeMorada = this.onChangeMorada.bind(this);
        this.onChangeContacto = this.onChangeContacto.bind(this);
        this.savePaciente = this.savePaciente.bind(this);

        this.state = {
            bi: "",
            nome: "",
            data_nascimento: "",
            morada: "",
            contacto: "",

            redirect: false,
        };
    }


    onChangeBi(e) {
        this.setState({
            bi: e.target.value,
        });
    }
    onChangeNome(e) {
        this.setState({
            nome: e.target.value,
        });
    }
    onChangeData_nascimento(e) {
        this.setState({
            data_nascimento: e.target.value,
        });
    }
    onChangeMorada(e) {
        this.setState({
            morada: e.target.value,
        });
    }
    onChangeContacto(e) {
        this.setState({
            contacto: e.target.value,
        });
    }



    async savePaciente() {

        const { bi, nome, data_nascimento, morada, contacto } = this.state;
        console.log(this.state);
        

        this.props
            .createPaciente(bi, nome, data_nascimento, morada, contacto)
            .then(() => {
                this.setState({
                    bi: "",
                    nome: "",
                    data_nascimento: "",
                    morada: "",
                    contacto: "",
                    /* redirect: true, */

                });
            })
            .catch((err) => console.log(err.response));
    }

    render() {
        const { redirect } = this.state;


        if (redirect) {
            return <Redirect to="/list-paciente" />;
        }

        return (
            <>

                <div className="container">
                    <div className="row">
                    <div className="end" />
                        <div className="col-1">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">

                                    <Link to={`${process.env.PUBLIC_URL}/list-paciente`}>
                                        <i class="fas fa-arrow-left" /> Voltar
                                    </Link>

                                </span>

                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="end" />
                            <form>
                                <div className="submit-form">

                                    <div className="ask-inputs">
                                        <div className="row">
                                            <h5 style={{ color: "#456caf" }}>Adicionar Paciente</h5>
                                            <div className="col-lg-3">
                                                <h6 htmlFor="bi">BI <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                    maxlength="13"
                                                    type="text"
                                                    className="form-control"
                                                    id="bi"
                                                    required
                                                    value={this.state.bi}
                                                    onChange={this.onChangeBi}
                                                    name="bi"
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <h6 htmlFor="nome">Nome <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                maxlength="30"
                                                    type="text"
                                                    className="form-control"
                                                    id="nome"
                                                    required
                                                    value={this.state.nome}
                                                    onChange={this.onChangeNome}
                                                    name="nome"
                                                />
                                            </div>
                                            <div className="col-lg-3">
                                                <h6 htmlFor="data_nascimento">Data Nascimento <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="data_nascimento"
                                                    required
                                                    value={this.state.data_nascimento}
                                                    onChange={this.onChangeData_nascimento}
                                                    name="data_nascimento"
                                                />
                                            </div>
                                            <div className="col-lg-8">
                                                <h6 htmlFor="morada">Morada <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                    type="text"
                                                    
                                                    className="form-control"
                                                    id="morada"
                                                    required
                                                    value={this.state.morada}
                                                    onChange={this.onChangeMorada}
                                                    name="morada"
                                                />
                                            </div>
                                            <div className="col-lg-4">
                                                <h6 htmlFor="contacto">Contacto <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="contacto"
                                                    required
                                                    value={this.state.contacto}
                                                    onChange={this.onChangeContacto}
                                                    name="contacto"
                                                />
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="center">
                                                    <Link
                                                        onClick={this.savePaciente}
                                                        className="btn-second"
                                                    >
                                                        Adicionar
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

export default connect(null, { createPaciente })(AddPaciente);
