import React, { Component } from "react";

import { connect } from "react-redux";

import { updateFuncionario } from "../../../conection/funcionarios/actions";

import { Redirect, Link } from "react-router-dom";

import FuncionariosService from "../../../conection/funcionarios/funcionariosService";

import Select from "react-select";

class EditFuncionario extends Component {
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
            id: "",
            currentFuncionario: {

                bi: "",
                nome: "",
                morada: "",
                email: "",
                contacto: "",
                especialidade: "",
                cargo: "",

            },

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
        this.getFuncionario(window.location.pathname.replace("/edit-funcionario/", ""));
        this.getOptionsCargo();
        this.getOptionsEspecialidade()
    }

    onChangeBi(e) {
        const bi = e.target.value;

        this.setState(function (prevState) {
            return {
                currentFuncionario: {
                    ...prevState.currentFuncionario,

                    bi: bi,
                },
            };
        });
    }
    onChangeNome(e) {
        const nome = e.target.value;

        this.setState(function (prevState) {
            return {
                currentFuncionario: {
                    ...prevState.currentFuncionario,

                    nome: nome,
                },
            };
        });
    }
    onChangeEmail(e) {
        const email = e.target.value;

        this.setState(function (prevState) {
            return {
                currentFuncionario: {
                    ...prevState.currentFuncionario,

                    email: email,
                },
            };
        });
    }
    onChangeMorada(e) {
        const morada = e.target.value;

        this.setState(function (prevState) {
            return {
                currentFuncionario: {
                    ...prevState.currentFuncionario,

                    morada: morada,
                },
            };
        });
    }
    onChangeEspecialidade(e) {
        const especialidade = e.value;

        this.setState(function (prevState) {
            return {
                currentFuncionario: {
                    ...prevState.currentFuncionario,

                    especialidade: especialidade,
                },
            };
        });
    }
    onChangeCargo(e) {
        const cargo = e.value;

        this.setState(function (prevState) {
            return {
                currentFuncionario: {
                    ...prevState.currentFuncionario,

                    cargo: cargo,
                },
            };
        });
    }
    onChangeContacto(e) {
        const contacto = e.target.value;

        this.setState(function (prevState) {
            return {
                currentFuncionario: {
                    ...prevState.currentFuncionario,

                    contacto: contacto,
                },
            };
        });
    }




    getFuncionario(id) {
        FuncionariosService.get(id).then((response) => {
            console.log(response.data.data)
            this.setState({
                currentFuncionario: response.data.data.attributes,
                id: response.data.data.id
            });
        });
    }

    async saveFuncionario() {

        this.props

            .updateFuncionario(
                this.state.id,
                { ...this.state.currentFuncionario }
            )

            .then(() => {
                this.setState({
                    redirect: true,
                });
            });
        console.log(this.state.currentFuncionario)
    }

    render() {
        const { redirect, currentFuncionario } = this.state;

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
                        <div className="end" />
                        <div className="col-lg-12">
                            <form>
                                <div className="submit-form">
                                    <div className="ask-inputs">
                                        <div className="row">
                                            <h5 style={{ color: "#456caf" }}>Editar Dados do Funcionario</h5>

                                            <div className="col-lg-2">
                                                <div className="form-group">
                                                    <h6 htmlFor="bi">BI</h6>

                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="bi"
                                                        required
                                                        value={currentFuncionario.bi}
                                                        onChange={this.onChangeBi}
                                                        name="bi"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-10" />
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="nome">Nome</h6>

                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="nome"
                                                        required
                                                        value={currentFuncionario.nome}
                                                        onChange={this.onChangeNome}
                                                        name="nome"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="email">Email</h6>

                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        required
                                                        value={currentFuncionario.email}
                                                        onChange={this.onChangeEmail}
                                                        name="email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="morada">Morada</h6>

                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="morada"
                                                        required
                                                        value={currentFuncionario.morada}
                                                        onChange={this.onChangeMorada}
                                                        name="morada"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="contacto">Contacto</h6>

                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="contacto"
                                                        required
                                                        value={currentFuncionario.contacto}
                                                        onChange={this.onChangeContacto}
                                                        name="contacto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="especialidade">Especialidade ( o selecionado é{" "}
                                                        <strong>{currentFuncionario.especialidade}</strong> )</h6>

                                                    
                                                    <Select
                                                        options={this.state.selectOptionsEspecialidade}
                                                        defaultValue={currentFuncionario.especialidade}
                                                        onChange={this.onChangeEspecialidade}
                                                        id="especialidade"
                                                        name="especialidade"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="cargo">Cargo ( o selecionado é{" "}
                                                        <strong>{currentFuncionario.cargo}</strong> )</h6>


                                                    <Select
                                                        options={this.state.selectOptionsCargo}
                                                        defaultValue={currentFuncionario.cargo}
                                                        onChange={this.onChangeCargo}
                                                        id="cargo"
                                                        name="cargo"
                                                    />
                                                </div>
                                            </div>



                                            <div className="col-lg-12">
                                                <div className="center">
                                                    <Link
                                                        to={`${process.env.PUBLIC_URL}/list-funcionario`}
                                                        onClick={this.saveFuncionario}
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

export default connect(null, { updateFuncionario })(EditFuncionario);
