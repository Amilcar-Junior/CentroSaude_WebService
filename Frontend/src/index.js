import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import store from "./store";

//Image LightBox
import SimpleReactLightbox from 'simple-react-lightbox'

//Layout default import from components.
import defaultLayout from "./components/layouts/main";


//Import wrapping layout
import Layout from "./components/app";

//Import all page from components
import aboutUs from "./components/pages/about-us/AboutUs";
import contact from "./components/pages/contact/Contact";

import error from "./components/pages/404/404";


import 'react-toastify/dist/ReactToastify.css';

//Initializations All Css
import './index.css';
import './index.scss';

import ListPaciente from "./components/pages/paciente/ListPaciente";
import AddPaciente from "./components/pages/paciente/AddPaciente";
import EditPaciente from "./components/pages/paciente/EditPaciente";

import ListEstoque from "./components/pages/estoque/ListEstoque";
import AddEstoque from "./components/pages/estoque/AddEstoque";
import EditEstoque from "./components/pages/estoque/EditEstoque";

import ListFuncionario from "./components/pages/funcionario/ListFuncionario";
import AddFuncionario from "./components/pages/funcionario/AddFuncionario";
import EditFuncionario from "./components/pages/funcionario/EditFuncionario";
import ListServico from "./components/pages/servico/ListServico";
import AddServico from "./components/pages/servico/AddServico";
import EditServoco from "./components/pages/servico/EditServoco";




/*
* Version : 0.1
* Event : Rendering all content to web.
* Actions: Define all routes and page.
* @return html
* */

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter basename={"/"}>
                <Switch>
                    <Route exact path='/' component={defaultLayout} />
                    
                    <Layout>
                        <Route path={`${process.env.PUBLIC_URL}/about-us`} component={aboutUs} />
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error} />
                        <Route path={`${process.env.PUBLIC_URL}/contact`} component={contact} />

                        <Route path={`${process.env.PUBLIC_URL}/list-paciente`} component={ListPaciente} />
                        <Route path={`${process.env.PUBLIC_URL}/add-paciente`} component={AddPaciente} />
                        <Route path={`${process.env.PUBLIC_URL}/edit-paciente`} component={EditPaciente} />


                        <Route path={`${process.env.PUBLIC_URL}/list-Estoque`} component={ListEstoque} />
                        <Route path={`${process.env.PUBLIC_URL}/add-Estoque`} component={AddEstoque} />
                        <Route path={`${process.env.PUBLIC_URL}/edit-Estoque`} component={EditEstoque} />
                        
                        <Route path={`${process.env.PUBLIC_URL}/list-funcionario`} component={ListFuncionario} />
                        <Route path={`${process.env.PUBLIC_URL}/add-funcionario`} component={AddFuncionario} />
                        <Route path={`${process.env.PUBLIC_URL}/edit-funcionario`} component={EditFuncionario} />

                        <Route path={`${process.env.PUBLIC_URL}/list-servico`} component={ListServico} />
                        <Route path={`${process.env.PUBLIC_URL}/add-servico`} component={AddServico} />
                        <Route path={`${process.env.PUBLIC_URL}/edit-servico`} component={EditServoco} />
                        
                    </Layout>
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <Provider store={store}>
                <Root />
                <ToastContainer />
            </Provider>
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById("root")
);

