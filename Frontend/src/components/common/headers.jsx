import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

//Import Image
import logoMain from "../../assets/images/logo.png"
import secondLogo from "../../assets/images/logo-2.png"

class Headers extends Component {
    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <>

                {/* ===============  header area start =============== */}
                <header>
                    <div className="header-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                    <div className="navbar-wrap">
                                        <div className="logo d-flex justify-content-between">
                                            <Link to={`${process.env.PUBLIC_URL}/`} className="navbar-brand" onClick={this.scrollTop}><img src={logoMain} alt="" width={60} height={50} /></Link>
                                        </div>
                                        <h3 style={{ color: "#00a599" }}>
                                            <b>CentroSaúde</b>
                                        </h3>
                                        <h3 style={{ color: "rgb(52, 98, 129)" }}>
                                            <b>CV</b>
                                        </h3>
                                        <div className="navbar-icons">
                                            <div className="searchbar-open">
                                                <i className="flaticon-magnifier" />
                                            </div>
                                            <div className="user-dropdown-icon">
                                                <i className="flaticon-user" />
                                                <div className="account-dropdown">
                                                    <ul>
                                                        <li className="account-el">
                                                            <i className="bx bx-user-pin" />
                                                            <Link to={"#"}>Sign in</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bxs-user-account" />
                                                            <Link to={"#"}>My Account</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bx-extension" />
                                                            <Link to={"#"}>Settings</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bx-log-in-circle" />
                                                            <Link to={"#"}>Log out</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mobile-menu d-flex ">
                                                <div className="top-search-bar m-0 d-block d-xl-none">
                                                </div>
                                                <Link to={"#"} className="hamburger d-block d-xl-none">
                                                    <span className="h-top" />
                                                    <span className="h-middle" />
                                                    <span className="h-bottom" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                    <nav className="main-nav">
                                        <div className="navber-logo-sm">
                                            <img src={secondLogo} alt="" width="200" height="200" className="img-fluid" />
                                        </div>
                                        <ul>
                                            {/* <li className="has-child-menu">
                                            <Link to={"#"}>Pragina Inicial</Link>
                                            <i className="fl flaticon-plus">+</i>
                                            <ul className="sub-menu">
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/`} className="sub-item" onClick={this.scrollTop}>Home Page 1</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/home-page-2`} className="sub-item" onClick={this.scrollTop}>Home Page 2</NavLink>
                                                </li>
                                            </ul>
                                        </li> */}
                                            <li>
                                                <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/`} onClick={this.scrollTop} >Home</NavLink >
                                            </li>
                                            {/* <li className="has-child-menu">
                                            <Link to={"#"}>Listas</Link>
                                            <i className="fl flaticon-plus">+</i>
                                            <ul className="sub-menu">
                                                <li>
                                                    <NavLink activeClassName="active" to={'/list-paciente'} className="sub-item" onClick={this.scrollTop}>Paciente</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={'/list-funcionario'} className="sub-item" onClick={this.scrollTop}>Funcionario</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`/list-estoque`} className="sub-item" onClick={this.scrollTop}>Estoque</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`/list-servico`} className="sub-item" onClick={this.scrollTop}>Serviços</NavLink>
                                                </li>
                                            </ul>
                                        </li> */}
                                            {/* <li>
                                                <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/list-teste`} onClick={this.scrollTop} >Lista Teste</NavLink >
                                            </li> */}

                                            <li>
                                                <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/list-paciente`} onClick={this.scrollTop} >Paciente</NavLink >
                                            </li>

                                            <li>
                                                <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/list-funcionario`} onClick={this.scrollTop} >Funcionario</NavLink >
                                            </li>

                                            <li>
                                                <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/list-estoque`} onClick={this.scrollTop} >Estoque</NavLink >
                                            </li>

                                            <li>
                                                <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/list-servico`} onClick={this.scrollTop} >Serviços</NavLink >
                                            </li>

                                            <li>
                                                <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/about-us`} onClick={this.scrollTop} >Sobre Nos</NavLink >
                                            </li>

                                            <li>
                                                <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/contact`} onClick={this.scrollTop} >Contact Us</NavLink>
                                            </li>

                                        </ul>
                                        <div className="navbar-icons-2">
                                            <div className="searchbar-open">
                                                <i className="flaticon-magnifier" />
                                            </div>
                                            <div className="user-dropdown-icon">
                                                <i className="flaticon-user" />
                                                <div className="account-dropdown">
                                                    <ul>
                                                        <li className="account-el">
                                                            <i className="bx bx-user-pin" />
                                                            <Link to={`${process.env.PUBLIC_URL}/login`} >Sign in</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bxs-user-account" />
                                                            <Link to={`#`} >My Account</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bx-extension" />
                                                            <Link to={`#`} >Settings</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bx-log-in-circle" />
                                                            <Link to={`#`} >Log out</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-contact">
                                            <ul>
                                                <li className="sidebar-single-contact"><i className="bx bxs-phone" />
                                                    <Link to={`tel:+17632275032`} >+1 763-227-5032</Link>
                                                </li>
                                                <li className="sidebar-single-contact"><i className="bx bxs-envelope" />
                                                    <Link to={`mailto:info@example.com`} >info@example.com</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <form>
                            <div className="main-searchbar">
                                <div className="searchbar-close">
                                    <i className="bx bx-x" />
                                </div>
                                <input type="text" placeholder="Search Here......" />
                                <div className="searchbar-icon">
                                    <i className="bx bx-search" />
                                </div>
                            </div>
                        </form>

                    </div>
                </header>
                {/* ===============  header area end =============== */}
            </>
        );
    }
}

export default Headers;
