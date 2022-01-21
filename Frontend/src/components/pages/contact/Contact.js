import React, { Component } from "react";
import {Link} from "react-router-dom";
class AboutUs extends Component {
    componentDidMount(){
        this.scrollTop();
    }

    scrollTop()
    {
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
                                <h2>Contact US</h2>
                                <ul className="breadcrumb-links">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                                        <i className="bx bx-chevron-right" />
                                    </li>
                                    <li>Contact Us</li>
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
                                        <h5>Address</h5>
                                        <p>971-949 8th Ave 949 New York, NY</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-card">
                                    <div className="contact-icon"><i className="flaticon-customer-service" />
                                    </div>
                                    <div className="contact-info">
                                        <h5>Email &amp; Phone</h5>
                                        <p>(123) 456 7890
                                            hello@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-card">
                                    <div className="contact-icon"><i className="flaticon-thumbs-up" />
                                    </div>
                                    <div className="contact-info">
                                        <h5>Social Media</h5>
                                        <ul className="contact-icons">
                                            <li>
                                                <Link to={"#"}><i className="bx bxl-instagram" /></Link>
                                                </li>
                                            <li>
                                                <Link to={"#"}><i className="bx bxl-facebook" /></Link>
                                                </li>
                                            <li>
                                                <Link to={"#"}><i className="bx bxl-twitter" /></Link>
                                                </li>
                                            <li>
                                                <Link to={"#"}><i className="bx bxl-whatsapp" /></Link>
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
                                    <h5 className="contact-d-head">Get In Touch</h5>
                                    <p>Suspendisse dolor risus, congue ac diam id, viverra facilisis dolor. Cras nec purus sagittis, varius tortor at, maximus erat. Sed at tellus id tellus lobortis dictum. Mauris dignissim, turpis vitae ullamcorper fermentum, sapien arcu aliquam arcu, in viverra quam est ac ex. Cras sed lectus eu.
                                    </p>
                                    <ul className="office-clock">
                                        <li>
                                            <div className="clock-icon"><i className="flaticon-clock-1" /></div>
                                            <div className="clock-info">
                                                <h5>Open Hour</h5>
                                                <p>Sat - Thu At <br /> 10.00Am to 10.00PM</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="clock-icon"><i className="flaticon-clock-1" /></div>
                                            <div className="clock-info">
                                                <h5>Close Hour</h5>
                                                <p>Friday Office Close</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-form">
                                    <form action="#" >
                                        <h5 className="contact-d-head">Contact Us</h5>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Full Name" required />
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Subject" required/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="email" placeholder="Your Email" required/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Phone" required/>
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea cols={30} rows={7} placeholder="Write Message" defaultValue={""} />
                                            </div>
                                            <div className="col-lg-12">
                                                <input type="submit" defaultValue="Submit Now" />
                                            </div>
                                        </div>
                                    </form>
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
