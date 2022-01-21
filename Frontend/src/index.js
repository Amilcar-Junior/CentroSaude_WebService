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
import secondLayout from "./components/layouts/main-two";

//Import wrapping layout
import Layout from "./components/app";

//Import all page from components
import aboutUs from "./components/pages/about-us/AboutUs";
import destinations from "./components/pages/destinations/Destinations";
import packages from "./components/pages/package/Packages";
import contact from "./components/pages/contact/Contact";
import faq from "./components/pages/faq/Faq";
import error from "./components/pages/404/404";
import guide from "./components/pages/guide/GuideComponent";
import gallary from "./components/pages/gallary/GalleryComponent";
import packageSidebar from "./components/pages/package/PackageSidebar";
import packageStandard from "./components/pages/package/PackageStanderd";
import packageDetails from "./components/pages/package/PackageDetails";
import blog from "./components/pages/blog/BlogComponent";
import blogSidebar from "./components/pages/blog/BlogSidebar";
import blogStandard from "./components/pages/blog/BlogStandard";
import blogDetails from "./components/pages/blog/BlogDetails";


import 'react-toastify/dist/ReactToastify.css';

//Initializations All Css
import './index.css';
import './index.scss';

import ListTeste from "./components/pages/teste/ListTeste";
import AddTeste from "./components/pages/teste/AddTeste";
import EditTeste from "./components/pages/teste/EditTeste";
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
                    <Route path={`${process.env.PUBLIC_URL}/home-page-2`} component={secondLayout} />
                    <Layout>
                        <Route path={`${process.env.PUBLIC_URL}/about-us`} component={aboutUs} />
                        <Route path={`${process.env.PUBLIC_URL}/destination`} component={destinations} />
                        <Route path={`${process.env.PUBLIC_URL}/package`} component={packages} />
                        <Route path={`${process.env.PUBLIC_URL}/package-sidebar`} component={packageSidebar} />
                        <Route path={`${process.env.PUBLIC_URL}/package-standard`} component={packageStandard} />
                        <Route path={`${process.env.PUBLIC_URL}/package-details`} component={packageDetails} />
                        <Route path={`${process.env.PUBLIC_URL}/faq`} component={faq} />
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error} />
                        <Route path={`${process.env.PUBLIC_URL}/guide`} component={guide} />
                        <Route path={`${process.env.PUBLIC_URL}/gallary`} component={gallary} />
                        <Route path={`${process.env.PUBLIC_URL}/blog`} component={blog} />
                        <Route path={`${process.env.PUBLIC_URL}/blog-sidebar`} component={blogSidebar} />
                        <Route path={`${process.env.PUBLIC_URL}/blog-standard`} component={blogStandard} />
                        <Route path={`${process.env.PUBLIC_URL}/blog-details`} component={blogDetails} />
                        <Route path={`${process.env.PUBLIC_URL}/contact`} component={contact} />



                        


                        <Route path={`${process.env.PUBLIC_URL}/list-teste`} component={ListTeste} />
                        <Route path={`${process.env.PUBLIC_URL}/add-teste`} component={AddTeste} />
                        <Route path={`${process.env.PUBLIC_URL}/edit-teste`} component={EditTeste} />


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

