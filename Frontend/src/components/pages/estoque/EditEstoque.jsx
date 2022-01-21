import React, { Component } from "react";

import { connect } from "react-redux";

import { updateEstoque } from "../../../conection/estoques/actions";

import { Redirect, Link } from "react-router-dom";

import EstoquesService from "../../../conection/estoques/estoquesService";


class EditEstoque extends Component {
    constructor(props) {
        super(props);

        this.onChangeProduto = this.onChangeProduto.bind(this);
        this.onChangeQuantidade = this.onChangeQuantidade.bind(this);
        this.saveEstoque = this.saveEstoque.bind(this);

        this.state = {
            id: "",
            currentEstoque: {
                
                
                nome_produto: "",
                quantidade: "",
            },
            

            redirect: false,
        };
    }

    componentDidMount() {
        this.getEstoque(window.location.pathname.replace("/edit-estoque/", ""));
    }

    
    onChangeProduto(e) {
        const nome_produto = e.target.value;

        this.setState(function (prevState) {
            return {
                currentEstoque: {
                    ...prevState.currentEstoque,

                    nome_produto: nome_produto,
                },
            };
        });
    }
    onChangeQuantidade(e) {
        const quantidade = e.target.value;

        this.setState(function (prevState) {
            return {
                currentEstoque: {
                    ...prevState.currentEstoque,

                    quantidade: quantidade,
                },
            };
        });
    }
   

    


    getEstoque(id) {
        EstoquesService.get(id).then((response) => {
            console.log(response.data.data)
            this.setState({
                currentEstoque: response.data.data.attributes,
                id: response.data.data.id
            });
        });
    }

    async saveEstoque() {
        
        this.props

            .updateEstoque(
                this.state.id,
                { ...this.state.currentEstoque}
            )

            .then(() => {
                this.setState({
                    redirect: true,
                });
            });
        console.log(this.state.currentEstoque)
    }

    render() {
        const { redirect, currentEstoque } = this.state;
        console.log(currentEstoque);
        if (redirect) {
            return <Redirect to="/list-estoque" />;
        }

        return (
            <>

                <div className="container">
                    <div className="row">
                        <div className="end"/>
                        <div className="col-1">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">

                                    <Link to={`${process.env.PUBLIC_URL}/list-estoque`}>
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
                                            <h5 style={{ color: "#456caf" }}>Editar Dados do Estoque</h5>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="nome">Produto</h6>

                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="nome"
                                                        required
                                                        value={currentEstoque.nome_produto}
                                                        onChange={this.onChangeProduto}
                                                        name="nome"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <h6 htmlFor="nome">Quantidade</h6>

                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="nome"
                                                        required
                                                        value={currentEstoque.quantidade}
                                                        onChange={this.onChangeQuantidade}
                                                        name="nome"
                                                    />
                                                </div>
                                            </div>
                                            

                                            

                                            <div className="col-lg-12">
                                                <div className="center">
                                                    <Link
                                                        to={`${process.env.PUBLIC_URL}/list-estoque`}
                                                        onClick={this.saveEstoque}
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

export default connect(null, { updateEstoque })(EditEstoque);
