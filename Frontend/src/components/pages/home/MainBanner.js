import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MainBanner extends Component {

  constructor(props) {
    super(props);
    this.state = {
        startDate:new Date(),
    };
  }

  changeDatepickerHandeller=(date)=>{
        this.setState({ startDate: date });
  }

  render() {

      const mainBannerOptions = {
          items: 1,
          loop: true,
          margin:0,
          smartSpeed: 700,
          dots: false,
          nav: true,
          autoplay: 4000,
          autoplayTimeout:4000,
          autoplayHoverPause:true,
          animateIn: 'fadeIn',
          animateOut: 'fadeOut',
          navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right'></i>"],
          responsive:{
              0:{
                  items:1,
                  nav:false,
                  dots : false
              },
              600:{
                  items:1,
                  nav:false,
                  dost : false,
              },
              1000:{
                  items:1,
                  nav:true,
                  loop:true
              },
          }
      };

      const startDate =this.state.startDate;
    return (
        <>
            {/* ===============  Main banner area start =============== */}
            <div className="main-banner">
                <OwlCarousel className="banner-slider owl-carousel"  {...mainBannerOptions}>
                    <div className="slider-item slider-item-1">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>Praias de Cabo Verde</h2>
                                <h5>Santiago</h5>
                                <div className="banner-btn">
                                    <Link to={`${process.env.PUBLIC_URL}/package`} className="btn-common">Ver Mas</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item slider-item-2">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>Praias de Cabo Verde</h2>
                                <h5>Boa Vista</h5>
                                <div className="banner-btn">
                                    <Link to={`${process.env.PUBLIC_URL}/package`} className="btn-common">Ver Mas</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item slider-item-3">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>Praias de Cabo Verde</h2>
                                <h5>Sal</h5>
                                <div className="banner-btn">
                                    <Link to={`${process.env.PUBLIC_URL}/package`} className="btn-common">Ver Mas</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                 </OwlCarousel>
            </div>
            {/* ===============  Main banner area end =============== */}

            {/* ===============  findfrom area start ============= */}
            <div className="find-form">
                <div className="container">
                    <form className="findfrom-wrapper">
                        <div className="row">
                            <div className="col-lg-3">
                                <input type="text" name="whereto" placeholder="Where To..." />
                            </div>
                            <div className="col-lg-3">
                                <div className="calendar-input">
                                    <DatePicker selected={startDate} onChange={(date) => this.changeDatepickerHandeller(date)}  className="input-field check-in" placeholder="dd-mm-yy"/>
                                    <i className="flaticon-calendar" />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="custom-select">
                                    <select>
                                        <option value={0}>Travel Type</option>
                                        <option value={1}>City Tours</option>
                                        <option value={2}>Vacation Tours</option>
                                        <option value={3}>Couple Tours </option>
                                        <option value={4}>Adventure Tours</option>
                                        <option value={5}>Group Tours</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="find-btn">
                                    <Link to={`#`} className="btn-second"><i className="bx bx-search-alt" />Procurar</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* ===============  findfrom area end =============== */}
        </>
    );
  }
}

export default MainBanner;
