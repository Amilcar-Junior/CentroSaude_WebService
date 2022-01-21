import React, { Component }     from "react";
import {Link}                   from "react-router-dom";

//Import Images
import blog1Img                 from "../../../assets/images/blog/b-1.png"
import blog2Img                 from "../../../assets/images/blog/b-2.png"
import blog3Img                 from "../../../assets/images/blog/b-3.png"


class AboutBlog extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
       <>
           {/* ===============  Blog area start =============== */}
           <div className="blog-area pt-120">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="section-head pb-30">
                               <h5>Latest Blog</h5>
                               <h2>Stay Updated And new post our Blog</h2>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                           <div className="blog-card">
                               <div className="blog-img">
                                   <img src={blog1Img} alt="" className="img-fluid" />
                                   <div className="blog-date"><i className="flaticon-calendar" /> 1 April, 2021</div>
                               </div>
                               <div className="blog-details">
                                   <div className="blog-info">
                                       <Link to={`#`} className="blog-writer"><i className="flaticon-user" />Dina Jems</Link>
                                       <Link to={`#`} className="blog-comment"><i className="flaticon-comment" /><span>(3)</span>Comment</Link>
                                   </div>
                                   <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title">Donec egestas orci viverra
                                       fermentum risus.</Link>
                                   <div className="blog-btn">
                                       <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="btn-common-sm">Read More</Link>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-4 col-md-6 col-sm-6  wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="300ms">
                           <div className="blog-card">
                               <div className="blog-img">
                                   <img src={blog2Img} alt="" className="img-fluid" />
                                   <div className="blog-date"><i className="flaticon-calendar" /> 1 April, 2021</div>
                               </div>
                               <div className="blog-details">
                                   <div className="blog-info">
                                       <Link to={`#`} className="blog-writer"><i className="flaticon-user" />Dina Jems</Link>
                                       <Link to={`#`} className="blog-comment"><i className="flaticon-comment" /><span>(3)</span>Comment</Link>
                                   </div>
                                   <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title">Praesent ut mattis ante the Nullam lobortis.</Link>
                                   <div className="blog-btn">
                                       <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="btn-common-sm">Read More</Link>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                           <div className="blog-card">
                               <div className="blog-img">
                                   <img src={blog3Img} alt="" className="img-fluid" />
                                   <div className="blog-date"><i className="flaticon-calendar" /> 1 April, 2021</div>
                               </div>
                               <div className="blog-details">
                                   <div className="blog-info">
                                       <Link to={`#`} className="blog-writer"><i className="flaticon-user" />Dina Jems</Link>
                                       <Link to={`#`} className="blog-comment"><i className="flaticon-comment" /><span>(3)</span>Comment</Link>
                                   </div>
                                   <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title">Maecenas vehicula risus non neque tincidunt.</Link>
                                   <div className="blog-btn">
                                       <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="btn-common-sm">Read More</Link>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           {/* ===============  Blog area end =============== */}
       </>
    );
  }
}

export default AboutBlog;
