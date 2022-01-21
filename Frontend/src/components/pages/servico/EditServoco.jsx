import React, { Component } from "react";

import { connect } from "react-redux";

import { updateServico } from "../../../conection/servicos/actions";

import { Redirect, Link } from "react-router-dom";

import ServicosService from "../../../conection/servicos/servicosService";

import http from "../../../http";

import Select from "react-select";

class EditServico extends Component {
    constructor(props) {
        super(props);

        this.onChangeDescricao = this.onChangeDescricao.bind(this);
        this.onChangeCusto = this.onChangeCusto.bind(this);
        this.onChangeTipo = this.onChangeTipo.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeUrgente = this.onChangeUrgente.bind(this);
        this.onChangePaciente = this.onChangePaciente.bind(this);
        this.onChangeFuncionario = this.onChangeFuncionario.bind(this);
        this.saveServico = this.saveServico.bind(this);

        this.state = {
            id: "",
            currentServico: {

                descricao: "",
                custo: "",
                tipo: "",
                date: "",
                urgente: "",
                paciente: "",
                funcionario: "",

            },

            selectOptionsPaciente: [],
            nome_paciente: "",

            selectOptionsFuncionario: [],
            nome_funcionario: "",

            selectOptionsTipo: [],
            nome_tipo: "",

            selectOptionsUrgente: [],
            nome_urgente: "",


            redirect: false,
        };
    }

    async getOptionsPaciente() {
        const paciente = await http.get("/pacientes");

        const data = paciente.data.data;

        const options = data.map((e) => ({
            value: e.id,
            label: e.attributes.nome,
        }));

        this.setState({ selectOptionsPaciente: options });
    }

    async getOptionsFuncionario() {
        const funcionario = await http.get("/funcionarios");

        const data = funcionario.data.data;

        const options = data.map((e) => ({
            value: e.id,
            label: e.attributes.nome,
        }));

        this.setState({ selectOptionsFuncionario: options });
    }


    async getOptionsTipo() {
        const options = [
            { label: "Consulta", value: "Consulta" },
            { label: "Diagnostico", value: "Diagnostico" },
            { label: "Vacinação", value: "Vacinação" },
            { label: "Interna", value: "Interna" },
            { label: "Geral", value: "Geral" },
        ];

        this.setState({ selectOptionsTipo: options });
    }

    async getOptionsUrgente() {
        const options = [
            { label: "NÃO", value: "NÃO" },
            { label: "SIM", value: "SIM" },
        ];

        this.setState({ selectOptionsUrgente: options });
    }

    componentDidMount() {
        this.getServico(window.location.pathname.replace("/edit-servico/", ""));

        this.getOptionsTipo();
        this.getOptionsUrgente();
        this.getOptionsFuncionario();
        this.getOptionsPaciente();
    }



    onChangeDescricao(e) {
        const descricao = e.target.value;

        this.setState(function (prevState) {
            return {
                currentServico: {
                    ...prevState.currentServico,

                    descricao: descricao,
                },
            };
        });
    }
    onChangeCusto(e) {
        const custo = e.target.value;

        this.setState(function (prevState) {
            return {
                currentServico: {
                    ...prevState.currentServico,

                    custo: custo,
                },
            };
        });
    }
    onChangeTipo(e) {
        const tipo = e.value;

        this.setState(function (prevState) {
            return {
                currentServico: {
                    ...prevState.currentServico,

                    tipo: tipo,
                },
            };
        });
    }
    onChangeUrgente(e) {
        const urgente = e.value;

        this.setState(function (prevState) {
            return {
                currentServico: {
                    ...prevState.currentServico,

                    urgente: urgente,
                },
            };
        });
    }
    onChangePaciente(e) {
        const paciente = e.value;

        this.setState(function (prevState) {
            return {
                currentServico: {
                    ...prevState.currentServico,

                    paciente: paciente,
                },
            };
        });
    }
    onChangeFuncionario(e) {
        const funcionario = e.value;

        this.setState(function (prevState) {
            return {
                currentServico: {
                    ...prevState.currentServico,

                    funcionario: funcionario,
                },
            };
        });
    }
    onChangeDate(e) {
        const date = e.target.value;

        this.setState(function (prevState) {
            return {
                currentServico: {
                    ...prevState.currentServico,

                    date: date,
                },
            };
        });
    }




    getServico(id) {
        ServicosService.get(id).then((response) => {
            console.log(response.data.data)
            this.setState({
                currentServico: response.data.data.attributes,
                id: response.data.data.id
            });
        });
    }

    async saveServico() {

        this.props

            .updateServico(
                this.state.id,
                { ...this.state.currentServico }
            )

            .then(() => {
                this.setState({
                    redirect: true,
                });
            });
        console.log(this.state.currentServico)
    }

    render() {
        const { redirect, currentServico } = this.state;

        if (redirect) {
            return <Redirect to="/list-servico" />;
        }

        return (
            <>

                <div className="container">
                    <div className="row">
                        <div className="end" />
                        <div className="col-1">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">

                                    <Link to={`${process.env.PUBLIC_URL}/list-servico`}>
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
                                            <h5 style={{ color: "#456caf" }}>Editar Dados do Servico</h5>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="paciente">Paciente ( o selecionado é{" "}
                                                        <strong>{currentServico.paciente}</strong> )</h6>

                                                    
                                                    <Select
                                                        options={this.state.selectOptionsPaciente}
                                                        defaultValue={currentServico.paciente}
                                                        onChange={this.onChangePaciente}
                                                        id="paciente"
                                                        name="paciente"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="funcionario">Funcionario ( o selecionado é{" "}
                                                        <strong>{currentServico.funcionario}</strong> )</h6>

                                                    
                                                    <Select
                                                        options={this.state.selectOptionsFuncionario}
                                                        defaultValue={currentServico.funcionario}
                                                        onChange={this.onChangeFuncionario}
                                                        id="funcionario"
                                                        name="funcionario"
                                                    />
                                                </div>
                                            </div>
                                            <div className="end" />
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="tipo">Tipo Serviço ( o selecionado é{" "}
                                                        <strong>{currentServico.tipo}</strong> )</h6>

                                                    
                                                    <Select
                                                        options={this.state.selectOptionsTipo}
                                                        defaultValue={currentServico.tipo}
                                                        onChange={this.onChangeTipo}
                                                        id="tipo"
                                                        name="tipo"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="urgente">Urgente ( o selecionado é{" "}
                                                        <strong>{currentServico.urgente}</strong> )</h6>

                                                    
                                                    <Select
                                                        options={this.state.selectOptionsUrgente}
                                                        defaultValue={currentServico.urgente}
                                                        onChange={this.onChangeUrgente}
                                                        id="urgente"
                                                        name="urgente"
                                                    />
                                                </div>
                                            </div>
                                            <div className="end" />
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="date">Data - Horario</h6>

                                                    <input
                                                        type="datetime-local"
                                                        className="form-control"
                                                        id="date"
                                                        required
                                                        value={currentServico.date}
                                                        onChange={this.onChangeDate}
                                                        name="date"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="custo">Custo</h6>

                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="custo"
                                                        required
                                                        value={currentServico.custo}
                                                        onChange={this.onChangeCusto}
                                                        name="custo"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <h6 htmlFor="descricao">Descrição</h6>

                                                    <textarea cols={30} rows={3}
                                                    placeholder="Descrição..."
                                                    value={currentServico.descricao}
                                                    onChange={this.onChangeDescricao}
                                                    defaultValue={""} />
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-12">
                                                <div className="center">
                                                    <Link
                                                        to={`${process.env.PUBLIC_URL}/list-servico`}
                                                        onClick={this.saveServico}
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

export default connect(null, { updateServico })(EditServico);
