import React, { Component } from "react";

import { connect } from "react-redux";

import { updateTeste } from "../../../conection/testes/actions";

import { Redirect, Link } from "react-router-dom";

import TestesService from "../../../conection/testes/testesService";


class EditTeste extends Component {
    constructor(props) {
        super(props);

        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.saveTeste = this.saveTeste.bind(this);

        this.state = {
            id: "",
            currentTeste: {
                
                
                nome: "",
                email: "",
                tel: "",
                date: "",
            
            },
            

            redirect: false,
        };
    }

    componentDidMount() {
        this.getTeste(window.location.pathname.replace("/edit-teste/", ""));
    }

    
    onChangeNome(e) {
        const nome = e.target.value;

        this.setState(function (prevState) {
            return {
                currentTeste: {
                    ...prevState.currentTeste,

                    nome: nome,
                },
            };
        });
    }
    onChangeEmail(e) {
        const email = e.target.value;

        this.setState(function (prevState) {
            return {
                currentTeste: {
                    ...prevState.currentTeste,

                    email: email,
                },
            };
        });
    }
    onChangeTel(e) {
        const tel = e.target.value;

        this.setState(function (prevState) {
            return {
                currentTeste: {
                    ...prevState.currentTeste,

                    tel: tel,
                },
            };
        });
    }
    onChangeDate(e) {
        const date = e.target.value;

        this.setState(function (prevState) {
            return {
                currentTeste: {
                    ...prevState.currentTeste,

                    date: date,
                },
            };
        });
    }

    


    getTeste(id) {
        TestesService.get(id).then((response) => {
            console.log(response.data.data)
            this.setState({
                currentTeste: response.data.data.attributes,
                id: response.data.data.id
            });
        });
    }

    async saveTeste() {
        
        this.props

            .updateTeste(
                this.state.id,
                { ...this.state.currentTeste}
            )

            .then(() => {
                this.setState({
                    redirect: true,
                });
            });
        console.log(this.state.currentTeste)
    }

    render() {
        const { redirect, currentTeste } = this.state;
        
        if (redirect) {
            return <Redirect to="/list-teste" />;
        }

        return (
            <>

                <div className="container">
                    <div className="row">
                        <div className="end"/>
                        <div className="col-1">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">

                                    <Link to={`${process.env.PUBLIC_URL}/list-teste`}>
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
                                            <h5 style={{ color: "#456caf" }}>Editar Dados do Teste</h5>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="nome">Nome</h6>

                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="nome"
                                                        required
                                                        value={currentTeste.nome}
                                                        onChange={this.onChangeNome}
                                                        name="nome"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="nome">Email</h6>

                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="nome"
                                                        required
                                                        value={currentTeste.email}
                                                        onChange={this.onChangeEmail}
                                                        name="nome"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="nome">Tel</h6>

                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="nome"
                                                        required
                                                        value={currentTeste.tel}
                                                        onChange={this.onChangeTel}
                                                        name="nome"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="nome">Data</h6>

                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        id="nome"
                                                        required
                                                        value={currentTeste.date}
                                                        onChange={this.onChangeDate}
                                                        name="nome"
                                                    />
                                                </div>
                                            </div>

                                            

                                            <div className="col-lg-12">
                                                <div className="center">
                                                    <Link
                                                        to={`${process.env.PUBLIC_URL}/list-teste`}
                                                        onClick={this.saveTeste}
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

export default connect(null, { updateTeste })(EditTeste);
