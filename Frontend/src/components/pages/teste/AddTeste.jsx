import React, { Component } from "react";

import { connect } from "react-redux";

import { createTeste } from "../../../conection/testes/actions";

import { Redirect, Link } from "react-router-dom";


class AddTeste extends Component {
    constructor(props) {
        super(props);

        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.saveTeste = this.saveTeste.bind(this);

        this.state = {
            nome: "",
            email: "",
            tel: "",
            date: "",
            

            redirect: false,
        };
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
    onChangeTel(e) {
        this.setState({
            tel: e.target.value,
        });
    }
    onChangeDate(e) {
        this.setState({
            date: e.target.value,
        });
    }



    async saveTeste() {

        const { nome, email, tel, date } = this.state;
        console.log(this.state);
        console.log(nome, email, tel, date);

        this.props
            .createTeste(nome, email, tel, date)
            .then(() => {
                this.setState({

                    redirect: true,

                });
            })
            .catch((err) => console.log(err.response));
    }

    render() {
        const { redirect } = this.state;


        if (redirect) {
            return <Redirect to="/list-teste" />;
        }

        return (
            <>

                <div className="container">
                    <div className="row">
                    <div className="end" />
                        <div className="col-1">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">

                                    <Link to={`${process.env.PUBLIC_URL}/list-teste`}>
                                        <i class="fas fa-arrow-left" /> Voltar
                                    </Link>

                                </span>

                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="end" />
                            <form action="#">
                                <div className="submit-form">

                                    <div className="ask-inputs">
                                        <div className="row">
                                            <h5 style={{ color: "#456caf" }}>Adicionar Teste</h5>
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
                                                <h6 htmlFor="nome">Email <strong style={{ color: "red" }}>*</strong></h6>

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
                                                <h6 htmlFor="nome">Telefone <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                    type="number"
                                                    
                                                    className="form-control"
                                                    id="tel"
                                                    required
                                                    value={this.state.tel}
                                                    onChange={this.onChangeTel}
                                                    name="tel"
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <h6 htmlFor="date">Data <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="date"
                                                    required
                                                    value={this.state.date}
                                                    onChange={this.onChangeDate}
                                                    name="date"
                                                />
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="center">
                                                    <Link
                                                        onClick={this.saveTeste}
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

export default connect(null, { createTeste })(AddTeste);
