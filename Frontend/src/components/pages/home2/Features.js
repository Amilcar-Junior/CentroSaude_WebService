import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Link} from "react-router-dom";

//Import Images
import features1Img from "../../../assets/images/feature/ff-3.png"
import features2Img from "../../../assets/images/feature/ff-1.png"

class Features extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {

      const featuresOptions = {
          items: 3,
          loop: true,
          margin:25,
          smartSpeed: 1500,
          autoplay: false,
          dots: false,
          nav: true,
          animateOut: 'slideOutUp',
          animateIn: 'slideInUp',
          navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right'></i>"],
          responsive:{
              0:{
                  items:1,
                  nav:false,
                  dots : false
              },
              800:{
                  items:2,
                  nav:false,
                  dots : false,
              },
              1000:{
                  items:3,
                  dots: false,
                  nav: true,
                  loop:true
              }
          }
      };

    return (
       <>
           {/* =============== feature area 2 start =============== */}
           <div className="feature-area-2 p-80 mt-120">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="section-head feature-head-2 pb-40">
                               <h5>Feature Tours</h5>
                               <h2>See Our Best Popular Destinations</h2>
                           </div>
                       </div>
                   </div>
                   <OwlCarousel className="feature-slider-2 owl-carousel"  {...featuresOptions}>
                       <div className="feature-card-2">
                           <div className="feature-thumb">
                               <img src={features1Img} alt="" className="img-fluid" />
                               <div className="feature-price">
                                   <h5>$110 <span>/ Couple</span></h5>
                               </div>
                           </div>
                           <div className="feature-details">
                               <h5 className="tour-duration"><i className="flaticon-calendar" />5 Days/6 night</h5>
                               <h3><i className="flaticon-arrival" />
                                   <Link to={"#"}>Paris Hill Tour</Link>
                               </h3>
                           </div>
                           <div className="feature-card-review">
                               <p>(<span>20</span> Review )</p>
                               <ul className="feature-rating">
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                               </ul>
                               <Link to={`${process.env.PUBLIC_URL}/package-details`} className="feature-btn">Book Now</Link>
                           </div>
                       </div>
                       <div className="feature-card-2">
                           <div className="feature-thumb">
                               <img src={features2Img} alt="" className="img-fluid" />
                               <div className="feature-price">
                                   <h5>$110 <span>/ Couple</span></h5>
                               </div>
                           </div>
                           <div className="feature-details">
                               <h5 className="tour-duration"><i className="flaticon-calendar" />5 Days/6 night</h5>
                               <h3><i className="flaticon-arrival" />
                                   <Link to={"#"}>Jumeirah Mosque</Link>
                               </h3>
                           </div>
                           <div className="feature-card-review">
                               <p>(<span>20</span> Review )</p>
                               <ul className="feature-rating">
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                               </ul>
                               <Link to={`${process.env.PUBLIC_URL}/package-details`} className="feature-btn">Book Now</Link>
                           </div>
                       </div>
                       <div className="feature-card-2">
                           <div className="feature-thumb">
                               <img src={features2Img} alt="" className="img-fluid" />
                               <div className="feature-price">
                                   <h5>$110 <span>/ Couple</span></h5>
                               </div>
                           </div>
                           <div className="feature-details">
                               <h5 className="tour-duration"><i className="flaticon-calendar" />5 Days/6 night</h5>
                               <h3><i className="flaticon-arrival" />
                                   <Link to={"#"}>Souks of Deira</Link>
                               </h3>
                           </div>
                           <div className="feature-card-review">
                               <p>(<span>20</span> Review )</p>
                               <ul className="feature-rating">
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                               </ul>
                               <Link to={`${process.env.PUBLIC_URL}/package-details`} className="feature-btn">Book Now</Link>
                           </div>
                       </div>
                       <div className="feature-card-2">
                           <div className="feature-thumb">
                               <img src={features1Img} alt="" className="img-fluid" />
                               <div className="feature-price">
                                   <h5>$110 <span>/ Couple</span></h5>
                               </div>
                           </div>
                           <div className="feature-details">
                               <h5 className="tour-duration"><i className="flaticon-calendar" />5 Days/6 night</h5>
                               <h3><i className="flaticon-arrival" />
                                   <Link to={"#"}>Paris Hill Tour</Link>
                               </h3>
                           </div>
                           <div className="feature-card-review">
                               <p>(<span>20</span> Review )</p>
                               <ul className="feature-rating">
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                               </ul>
                               <Link to={`${process.env.PUBLIC_URL}/package-details`} className="feature-btn">Book Now</Link>
                           </div>
                       </div>
                       <div className="feature-card-2">
                           <div className="feature-thumb">
                               <img src={features2Img} alt="" className="img-fluid" />
                               <div className="feature-price">
                                   <h5>$110 <span>/ Couple</span></h5>
                               </div>
                           </div>
                           <div className="feature-details">
                               <h5 className="tour-duration"><i className="flaticon-calendar" />5 Days/6 night</h5>
                               <h3><i className="flaticon-arrival" />
                                   <Link to={"#"}>Jumeirah Mosque</Link>
                               </h3>
                           </div>
                           <div className="feature-card-review">
                               <p>(<span>20</span> Review )</p>
                               <ul className="feature-rating">
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                               </ul>
                               <Link to={`${process.env.PUBLIC_URL}/package-details`} className="feature-btn">Book Now</Link>
                           </div>
                       </div>
                       <div className="feature-card-2">
                           <div className="feature-thumb">
                               <img src={features2Img} alt="" className="img-fluid" />
                               <div className="feature-price">
                                   <h5>$110 <span>/ Couple</span></h5>
                               </div>
                           </div>
                           <div className="feature-details">
                               <h5 className="tour-duration"><i className="flaticon-calendar" />5 Days/6 night</h5>
                               <h3><i className="flaticon-arrival" />
                                   <Link to={"#"}>Souks of Deira</Link>
                               </h3>
                           </div>
                           <div className="feature-card-review">
                               <p>(<span>20</span> Review )</p>
                               <ul className="feature-rating">
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                                   <li><i className="bx bxs-star" /></li>
                               </ul>
                               <Link to={`${process.env.PUBLIC_URL}/package-details`} className="feature-btn">Book Now</Link>
                           </div>
                       </div>
                   </OwlCarousel>
               </div>
           </div>
           {/* =============== feature area 2 end =============== */}
       </>
    );
  }
}

export default Features;
