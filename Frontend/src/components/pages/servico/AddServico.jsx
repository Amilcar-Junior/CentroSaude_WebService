import React, { Component } from "react";

import { connect } from "react-redux";

import { createServico } from "../../../conection/servicos/actions";

import { Redirect, Link } from "react-router-dom";

import Select from "react-select";

import http from "../../../http";

/* import axios from "axios"; */

class AddServico extends Component {
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
            descricao: "",
            custo: "",
            tipo: "",
            date: "",
            urgente: "NÃO",

            paciente: "",
            funcionario: "",

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
        const medico = "Medico (a)";
        const options = data.filter(c => c.attributes.cargo === medico).map((e) => ({
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
        this.getOptionsTipo();
        this.getOptionsUrgente();
        this.getOptionsFuncionario();
        this.getOptionsPaciente();
    }



    onChangeDescricao(e) {
        this.setState({
            descricao: e.target.value,
        });
    }
    onChangeUrgente(e) {
        this.setState({
            urgente: e.label, nome_urgente: e.value
        });
    }

    onChangePaciente(e) {
        this.setState({
            paciente: e.value, nome_paciente: e.label
        });
    }

    onChangeFuncionario(e) {
        this.setState({
            funcionario: e.value, nome_fucionario: e.label
        });
    }

    onChangeCusto(e) {
        this.setState({
            custo: e.target.value,
        });
    }
    onChangeTipo(e) {
        this.setState({
            tipo: e.label, nome_tipo: e.value
        });
    }
    onChangeDate(e) {
        this.setState({
            date: e.target.value,
        });
    }



    async saveServico() {

        const { descricao, custo, date, tipo, urgente, } = this.state;
        console.log(this.state);

        this.props
            .createServico(descricao, custo, date, tipo, urgente,)
            .then(() => {
                this.setState({

                    descricao: "",
                    custo: "",
                    tipo: "",
                    date: "",
                    urgente: "NÃO",

                    paciente: "",
                    funcionario: "",


                    nome_paciente: "",


                    nome_funcionario: "",


                    nome_tipo: "",


                    nome_urgente: "",

                    /* redirect: true,
 */
                });
            })
            .catch((err) => console.log(err.response));
    }

    render() {
        const { redirect } = this.state;


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
                        <div className="col-lg-12">
                            <div className="end" />
                            <form>
                                <div className="submit-form">

                                    <div className="ask-inputs">
                                        <div className="row">
                                            <h5 style={{ color: "#456caf" }}>Adicionar Serviço</h5>
                                            <div className="col-lg-6">
                                                <h6 htmlFor="paciente">Paciente <strong style={{ color: "red" }}>*</strong></h6>
                                                <Select
                                                    options={this.state.selectOptionsPaciente}
                                                    onChange={this.onChangePaciente}
                                                    id="paciente"
                                                    name="paciente"
                                                    required
                                                />
                                            </div>

                                            <div className="col-lg-6">
                                                <h6 htmlFor="funcionario">Funcionario ( Medico (a) ) <strong style={{ color: "red" }}>*</strong></h6>
                                                <Select
                                                    options={this.state.selectOptionsFuncionario}
                                                    onChange={this.onChangeFuncionario}
                                                    id="funcionario"
                                                    name="funcionario"
                                                    required
                                                />
                                            </div>
                                            <div className="end" />
                                            <div className="col-lg-6">
                                                <h6 htmlFor="tipo">Tipo Serviço <strong style={{ color: "red" }}>*</strong></h6>


                                                <Select
                                                    options={this.state.selectOptionsTipo}
                                                    onChange={this.onChangeTipo}
                                                    id="tipo"
                                                    name="tipo"
                                                    required
                                                />
                                            </div>

                                            <div className="col-lg-6">
                                                <h6 htmlFor="urgente">Urgente <strong style={{ color: "red" }}>*</strong></h6>


                                                <Select
                                                    options={this.state.selectOptionsUrgente}
                                                    onChange={this.onChangeUrgente}
                                                    id="urgente"
                                                    name="urgente"
                                                    required

                                                />
                                            </div>
                                            <div className="end" />
                                            <div className="col-lg-6">
                                                <h6 htmlFor="date">Data - Horario <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                    type="datetime-local"
                                                    className="form-control"
                                                    id="date"
                                                    required
                                                    value={this.state.date}
                                                    onChange={this.onChangeDate}
                                                    name="date"
                                                />
                                            </div>


                                            <div className="col-lg-6">
                                                <h6 htmlFor="custo">Custo <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                    type="number"

                                                    className="form-control"
                                                    id="custo"
                                                    required

                                                    value={this.state.custo}
                                                    onChange={this.onChangeCusto}
                                                    name="custo"
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <h6 htmlFor="descricao">Descrição <strong style={{ color: "red" }}>*</strong></h6>
                                                <textarea cols={30} rows={3}
                                                    placeholder="Descrição..."
                                                    value={this.state.descricao}
                                                    onChange={this.onChangeDescricao}
                                                    defaultValue={""} />

                                            </div>

                                            <div className="col-lg-12">
                                                <div className="center">
                                                    <Link
                                                        onClick={this.saveServico}
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

export default connect(null, { createServico })(AddServico);
