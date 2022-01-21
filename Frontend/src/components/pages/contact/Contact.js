import React, { Component } from "react";
import { Link } from "react-router-dom";
class AboutUs extends Component {
    componentDidMount() {
        this.scrollTop();
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <>
                {/* ===============  breadcrumb area start =============== */}
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="breadcrumb-wrap">
                                    <h2>Contate-nos</h2>
                                    <ul className="breadcrumb-links">
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                                            <i className="bx bx-chevron-right" />
                                        </li>
                                        <li>Contate-nos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
                <div className="contact-wrapper pt-90">
                    <div className="contact-cards">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="contact-card">
                                        <div className="contact-icon"><i className="flaticon-arrival" />
                                        </div>
                                        <div className="contact-info">
                                            <h5>Endereço</h5>
                                            <p>Praia, Cabo Verde</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="contact-card">
                                        <div className="contact-icon"><i className="flaticon-customer-service" />
                                        </div>
                                        <div className="contact-info">
                                            <h5>Telefone</h5>
                                            <p>(238) 580 30 55</p>
                                            <p>(238) 972 50 79</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="contact-card">
                                        <div className="contact-icon"><i className="flaticon-thumbs-up" />
                                        </div>
                                        <div className="contact-info">
                                            <h5>Redes sociais</h5>
                                            <ul className="contact-icons">
                                                <li>
                                                    <a href={"https://www.instagram.com/mikamikaus/"}> <i className="bx bxl-instagram" /></a>
                                                </li>
                                                <li>
                                                    <a href={"https://www.facebook.com/mika.junior.1"}> <i className="bx bxl-facebook" /></a>
                                                </li>
                                                <li>
                                                    <Link to={"#"}><i className="bx bxl-twitter" /></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="contact-inputs pt-100">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="contact-details">
                                        <h5 className="contact-d-head">Entrar em contato</h5>
                                        <p>Suspendisse dolor risus, congue ac diam id, viverra facilisis dolor. Cras nec purus sagittis, varius tortor at, maximus erat. Sed at tellus id tellus lobortis dictum. Mauris dignissim, turpis vitae ullamcorper fermentum, sapien arcu aliquam arcu, in viverra quam est ac ex. Cras sed lectus eu.
                                        </p>
                                        <ul className="office-clock">
                                            <li>
                                                <div className="clock-icon"><i className="flaticon-clock-1" /></div>
                                                <div className="clock-info">
                                                    <h5>Horário de funcionamento</h5>
                                                    <p><br />Das 8h00 às 22h00</p>
                                                </div>
                                            </li>
                                            {/* <li>
                                            <div className="clock-icon"><i className="flaticon-clock-1" /></div>
                                            <div className="clock-info">
                                                <h5>Close Hour</h5>
                                                <p>Friday Office Close</p>
                                            </div>
                                        </li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact-form">
                                        <form action="#" >
                                            <h5 className="contact-d-head">Contate-nos</h5>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder="Nome Completo" required />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder="Sujeito" required />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="email" placeholder="Seu Email" required />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder="Telefone" required />
                                                </div>
                                                <div className="col-lg-12">
                                                    <textarea cols={30} rows={7} placeholder="Escrever Mensagem" defaultValue={""} />
                                                </div>
                                                <div className="col-lg-12">
                                                    <input type="submit" defaultValue="Enviar" />
                                                </div>
                                            </div>
                                        </form>
                                        <div className="end"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AboutUs;
