import React, { Component } from "react";
class AboutWrapper extends Component {


    render() {

        return (
            <>
                {/* ===============  About wrapper area start =============== */}
                <div className="about-wrapper mt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-wrapper-right section-head head-left">
                                    <h5>Sobre Centros de Saude</h5>
                                    <p>São instituições através da qual se presta uma atenção primária de saúde a indivíduos e famílias,
                                        considerando estas como elementos de uma comunidade com os seus problemas,
                                        necessidades e comportamentos".A atenção primária engloba acções de carácter preventivo,
                                        curativo (diagnóstico, tratamento e referência aos níveis diferenciados) cuidados de reabilitação
                                        (que a este nível não requerem pessoal nem material especializado) e medidas de promoção da saúde.
                                        Os Centros de Saúde possuem uma equipa de saúde chefiada por um médico e dispõem duma rede de extensões,
                                        para aproximar a prestação de cuidados das populações.</p>
                                    <h5>Conteúdo funcional (Prestações)</h5>
                                    <ul className="about-list">
                                        <li><i className="flaticon-double-checking" /> Atendimento à mulher</li>
                                        <li><i className="flaticon-double-checking" /> Saúde escolar</li>
                                        <li><i className="flaticon-double-checking" /> Atendimento à criança</li>
                                        <li><i className="flaticon-double-checking" /> Saúde mental</li>
                                        <li><i className="flaticon-double-checking" /> Saúde ocupacional</li>
                                        <li><i className="flaticon-double-checking" /> Saúde oral</li>
                                        <li><i className="flaticon-double-checking" /> Profilaxia das doenças evitáveis</li>
                                        <li><i className="flaticon-double-checking" /> Oftalmologia</li>
                                        <li><i className="flaticon-double-checking" /> Promoção de hábitos saudáveis</li>
                                        <li><i className="flaticon-double-checking" /> Otorrinolaringologia</li>
                                        <li><i className="flaticon-double-checking" /> Acção medico-social integrada</li>
                                        <li><i className="flaticon-double-checking" /> Reabilitação</li>
                                    </ul>
                                    <div className="about-wrapper-btn">
                                        <a href="https://www.minsaude.gov.cv/index.php/atencao-primaria-secundaria/centros-de-saude" className="btn-common">Consulte mais informações</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-wrapper-right section-head head-left">
                                    <h5>Estrutura física</h5>
                                    <p>As heterogeneidades do país não nos permitem considerar um único tipo de Centros de Saúde (CS),
                                        se tivermos em conta a população atendida, as condições de acesso das populações aos CS e destes aos níveis de referência.
                                        Por isso, os Centros de Saúde devem organizar-se, sobretudo com base no conteúdo funcional,
                                        no número da população a servir e nos cuidados a prestar, de dois tipos: os ambulatórios
                                        e os hospitalares, com internamento. Recomenda-se conceber os CS em módulos funcionais,
                                        para responder de uma forma organizada aos serviços ambulatórios, de internamento e de apoio.
                                        No caso dos centros de localização urbana (CSU), perto de instituições hospitalares, regionais ou centrais, a função de internamento não se justifica, ao menos por enquanto.</p>
                                    <h5>transformação deve ocorrer:</h5>
                                    <ul className="about-list">
                                        <li><i className="flaticon-double-checking" /> nas sedes dos concelhos</li>
                                        <li><i className="flaticon-double-checking" /> em aglomerados populacionais até 30000 habitantes</li>
                                        <li><i className="flaticon-double-checking" /> Nos Centros de Saúde nas cidades (CSU) considerar uma população entre 15000 e 35000</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===============  About wrapper area end =============== */}
            </>
        );
    }
}

export default AboutWrapper;
