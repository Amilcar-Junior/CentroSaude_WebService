import React, { Component } from "react";

import achievement1Image from "../../../assets/images/achievement/e-1.png";
import achievement2Image from "../../../assets/images/achievement/e-2.png";
import achievement3Image from "../../../assets/images/achievement/e-3.png";
import achievement4Image from "../../../assets/images/achievement/e-4.png";

class Achievement extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
       <>
           {/* ===============  Achievement area 2 start =============== */}
           <div className="achievement-area-2 mt-105 p-80">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="section-head pb-40">
                               <h5>Why Tourx?</h5>
                               <h2>Why you are travel with tourx</h2>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement1Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>500+ Our worldwide
                                       guide</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-guide" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement2Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>100% trusted travel agency</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-trust" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="400ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement3Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>5+ year of travel experience</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-experience" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement4Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>85% of our traveller happy</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-traveller" />
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           {/* ===============  Achievement area 2 end =============== */}
       </>
    );
  }
}

export default Achievement;
