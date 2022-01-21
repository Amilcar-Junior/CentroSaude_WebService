import React, { Component } from "react";

import { connect } from "react-redux";

import { createEstoque } from "../../../conection/estoques/actions";

import { Redirect, Link } from "react-router-dom";


class AddEstoque extends Component {
    constructor(props) {
        super(props);

        this.onChangeProduto = this.onChangeProduto.bind(this);
        this.onChangeQuantidade = this.onChangeQuantidade.bind(this);
        this.saveEstoque = this.saveEstoque.bind(this);

        this.state = {
            nome_produto: "",
            quantidade: "",
            
            redirect: false,
        };
    }


    onChangeProduto(e) {
        this.setState({
            nome_produto: e.target.value,
        });
    }
    onChangeQuantidade(e) {
        this.setState({
            quantidade: e.target.value,
        });
    }



    async saveEstoque() {

        const { nome_produto, quantidade} = this.state;
        console.log(this.state);
        console.log(nome_produto, quantidade);

        this.props
            .createEstoque(nome_produto, quantidade)
            .then(() => {
                this.setState({
                    nome_produto: "",
                    quantidade: "",
                    /* redirect: true, */

                });
            })
            .catch((err) => console.log(err.response));
    }

    render() {
        const { redirect } = this.state;


        if (redirect) {
            return <Redirect to="/list-estoque" />;
        }

        return (
            <>

                <div className="container">
                    <div className="row">
                    <div className="end" />
                        <div className="col-1">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">

                                    <Link to={`${process.env.PUBLIC_URL}/list-estoque`}>
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
                                            <h5 style={{ color: "#456caf" }}>Adicionar Estoque</h5>
                                            <div className="col-lg-6">
                                                <h6 htmlFor="nome">Produto <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nome_produto"
                                                    required
                                                    value={this.state.nome_produto}
                                                    onChange={this.onChangeProduto}
                                                    name="nome_produto"
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <h6 htmlFor="nome">Quantidade <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="quantidade"
                                                    required
                                                    value={this.state.quantidade}
                                                    onChange={this.onChangeQuantidade}
                                                    name="quantidade"
                                                />
                                            </div>
                                            

                                            <div className="col-lg-12">
                                                <div className="center">
                                                    <Link
                                                        onClick={this.saveEstoque}
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

export default connect(null, { createEstoque })(AddEstoque);
