import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import offer1Image from "../../../assets/images/package/offer-1.png"
import offer2Image from "../../../assets/images/package/offer-2.png"
import offer3Image from "../../../assets/images/package/offer-3.png"
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
          stagePadding: 1,
          items: 3,
          loop: true,
          margin:25,
          smartSpeed: 1500,
          autoplay: false,
          dots: false,
          nav: true,
          navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right'></i>"],
          responsive:{
              0:{
                  items:1,
                  nav:false,
                  dots : false
              },
              600:{
                  items:2,
                  nav:false,
                  dots : false,
              },
              1000:{
                  items:3,
                  dots: false,
                  nav:false,
                  loop:true
              }
          }
      };


      const startDate =this.state.startDate;

      return (
        <>
            {/* ===============  main banner area 2 start =============== */}
            <div className="main-banner-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="main-banner-content-2">
                                <h2>Amazing Tour In <br />
                                    <span className="element">Hampshire</span> </h2>
                                <h3>7 Days, 8 Night Tour</h3>
                            </div>
                        </div>
                    </div>
                    <div className="find-form-2">
                        <form className="findfrom-wrapper">
                            <div className="row">
                                <div className="col-lg-3">
                                    <input type="text" placeholder="Where To..." />
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
                                        <Link to={"#"} className="btn-second"><i className="bx bx-search-alt" /> Find now</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* ===============  main banner area 2 end =============== */}

            {/* ===============  Offer area start =============== */}
            <div className="offer-area pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="section-head pb-30">
                                <h5>Special offer</h5>
                                <h2>Our Most Popular And Best Adventures</h2>
                            </div>
                        </div>
                    </div>

                    <OwlCarousel className="offer-slider dark-nav owl-carousel"  {...mainBannerOptions}>
                        <div className="offer-card">
                            <div className="offer-thumb">
                                <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                    <img src={offer1Image} alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="offer-details">
                                <div className="offer-info">
                                    <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                                    <ul className="offer-rating">
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                    </ul>
                                </div>
                                <h3>
                                    <i className="flaticon-arrival" />
                                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>Paris Hill Tour</Link>
                                </h3>
                                <strong>$150 <span>$200</span></strong>
                            </div>
                        </div>
                        <div className="offer-card">
                            <div className="offer-thumb">
                                <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                    <img src={offer2Image} alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="offer-details">
                                <div className="offer-info">
                                    <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                                    <ul className="offer-rating">
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                    </ul>
                                </div>
                                <h3><i className="flaticon-arrival" />
                                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>Lake Garda, Spain</Link>
                                </h3>
                                <strong>$170 <span>$200</span></strong>
                            </div>
                        </div>
                        <div className="offer-card">
                            <div className="offer-thumb">
                                <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                    <img src={offer3Image} alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="offer-details">
                                <div className="offer-info">
                                    <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                                    <ul className="offer-rating">
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                    </ul>
                                </div>
                                <h3><i className="flaticon-arrival" />
                                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>French Rivira, France</Link>
                                </h3>
                                <strong>$150 <span>$200</span></strong>
                            </div>
                        </div>
                        <div className="offer-card">
                            <div className="offer-thumb">
                                <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                    <img src={offer1Image} alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="offer-details">
                                <div className="offer-info">
                                    <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                                    <ul className="offer-rating">
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                    </ul>
                                </div>
                                <h3><i className="flaticon-arrival" />
                                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>Paris Hill Tour</Link>
                                </h3>
                                <strong>$150 <span>$200</span></strong>
                            </div>
                        </div>
                        <div className="offer-card">
                            <div className="offer-thumb">
                                <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                    <img src={offer2Image} alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="offer-details">
                                <div className="offer-info">
                                    <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                                    <ul className="offer-rating">
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                    </ul>
                                </div>
                                <h3><i className="flaticon-arrival" />
                                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>Lake Garda, Spain</Link>
                                </h3>
                                <strong>$170 <span>$200</span></strong>
                            </div>
                        </div>
                        <div className="offer-card">
                            <div className="offer-thumb">
                                <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                    <img src={offer3Image} alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="offer-details">
                                <div className="offer-info">
                                    <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                                    <ul className="offer-rating">
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                        <li><i className="bx bxs-star" /></li>
                                    </ul>
                                </div>
                                <h3><i className="flaticon-arrival" />
                                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>French Rivira, France</Link>
                                </h3>
                                <strong>$150 <span>$200</span></strong>
                            </div>
                        </div>
                    </OwlCarousel>

                </div>
            </div>
            {/* ===============  Offer area end =============== */}

        </>
    );
  }
}

export default MainBanner;
