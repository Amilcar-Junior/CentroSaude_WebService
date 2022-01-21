import React, { Component } from "react";

import { connect } from "react-redux";

import { createFuncionario } from "../../../conection/funcionarios/actions";

import { Redirect, Link } from "react-router-dom";

import Select from "react-select";

class AddFuncionario extends Component {
    constructor(props) {
        super(props);

        this.onChangeBi = this.onChangeBi.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeMorada = this.onChangeMorada.bind(this);
        this.onChangeContacto = this.onChangeContacto.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeEspecialidade = this.onChangeEspecialidade.bind(this);
        this.onChangeCargo = this.onChangeCargo.bind(this);

        this.saveFuncionario = this.saveFuncionario.bind(this);

        this.state = {
            bi: "",
            nome: "",
            morada: "",
            email: "",
            contacto: "",
            especialidade: "",
            cargo: "",

            selectOptionsEspecialidade: [],
            nome_especialidade: "",

            selectOptionsCargo: [],
            nome_cargo: "",

            redirect: false,
        };
    }


    async getOptionsEspecialidade() {
        const options = [
            { label: "Nenhum", value: "Nenhum" },
            { label: "Cardiologia", value: "Cardiologia" },
            { label: "Clínica Geral", value: "Clínica Geral" },
            { label: "Dermatologia", value: "Dermatologia" },
            { label: "Estomatologia", value: "Estomatologia" },
            { label: "Ginecologia", value: "Ginecologia" },
            { label: "Imunoalergologia", value: "Imunoalergologia" },
            { label: "Oftalmologia", value: "Oftalmologia" },
            { label: "Ortopedia", value: "Ortopedia" },
            { label: "Nutrição", value: "Nutrição" },
            { label: "Otorrinolaringologia", value: "Otorrinolaringologia" },
            { label: "Pediatria", value: "Pediatria" },
            { label: "Urologia", value: "Urologia" },
            
        ];

        this.setState({ selectOptionsEspecialidade: options });
    }
    async getOptionsCargo() {
        const options = [
            { label: "Recepcionista", value: "Recepcionista" },
            { label: "Enfermeiro (a)", value: "Enfermeiro (a)" },
            { label: "Medico (a)", value: "Medico (a)" },
            { label: "Guarda", value: "Guarda" },
            { label: "Empregada Limpeza", value: "Empregada Limpeza" },
        ];

        this.setState({ selectOptionsCargo: options });
    }

    componentDidMount() {
        this.getOptionsCargo();
        this.getOptionsEspecialidade()
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
    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
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
    onChangeEspecialidade(e) {
        this.setState({
            especialidade: e.label, nome_especialidade: e.value
        });
    }
    onChangeCargo(e) {
        this.setState({
            cargo: e.label, nome_cargo: e.value
        });
    }



    async saveFuncionario() {

        const { bi, nome, morada, email, contacto, especialidade, cargo } = this.state;
        console.log(this.state);


        this.props
            .createFuncionario(bi, nome, morada, email, contacto, especialidade, cargo)
            .then(() => {
                this.setState({
                    bi: "",
                    nome: "",
                    morada: "",
                    email: "",
                    contacto: "",
                    especialidade: "",
                    cargo: "",
        
                    
                    nome_especialidade: "",
        
                    
                    nome_cargo: "",

                    /* redirect: true, */

                });
            })
            .catch((err) => console.log(err.response));
    }

    render() {
        const { redirect } = this.state;


        if (redirect) {
            return <Redirect to="/list-funcionario" />;
        }

        return (
            <>

                <div className="container">
                    <div className="row">
                        <div className="end" />
                        <div className="col-1">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">

                                    <Link to={`${process.env.PUBLIC_URL}/list-funcionario`}>
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
                                            <h5 style={{ color: "#456caf" }}>Adicionar Funcionario</h5>
                                            <div className="col-lg-2">
                                                <h6 htmlFor="bi">BI <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="bi"
                                                    required
                                                    value={this.state.bi}
                                                    onChange={this.onChangeBi}
                                                    name="bi"
                                                />
                                            </div>
                                            <div className="col'lg'10" />
                                            <div className="col-lg-6">
                                                <h6 htmlFor="nome">Nome <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nome"
                                                    required
                                                    value={this.state.nome}
                                                    onChange={this.onChangeNome}
                                                    name="nome"
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <h6 htmlFor="email">Email <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    required
                                                    value={this.state.email}
                                                    onChange={this.onChangeEmail}
                                                    name="email"
                                                />
                                            </div>
                                            <div className="col-lg-6">
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
                                            <div className="col-lg-6">
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

                                            <div className="col-lg-6">
                                                <h6 htmlFor="especialidade">Especialidade <strong style={{ color: "red" }}></strong></h6>

                                                
                                                <Select
                                                    options={this.state.selectOptionsEspecialidade}
                                                    onChange={this.onChangeEspecialidade}
                                                    id="especialidade"
                                                    name="especialidade"
                                                    required
                                                    /* isMulti */
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <h6 htmlFor="cargo">Cargo <strong style={{ color: "red" }}>*</strong></h6>

                                                
                                                <Select
                                                    options={this.state.selectOptionsCargo}
                                                    onChange={this.onChangeCargo}
                                                    id="cargo"
                                                    name="cargo"
                                                    required
                                                />
                                            </div>

                                            <div className="end"/>

                                            <div className="col-lg-12">
                                                <div className="center">
                                                    <Link
                                                        onClick={this.saveFuncionario}
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

export default connect(null, { createFuncionario })(AddFuncionario);
