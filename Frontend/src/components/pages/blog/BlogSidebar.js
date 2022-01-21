import React, { Component } from "react";
import {Link} from "react-router-dom";

import b_1 from "../../../assets/images/blog/b-1.png";
import b_2 from "../../../assets/images/blog/b-2.png";
import b_3 from "../../../assets/images/blog/b-3.png";
import b_4 from "../../../assets/images/blog/b-4.png";
import b_5 from "../../../assets/images/blog/b-5.png";
import b_6 from "../../../assets/images/blog/b-6.png";
import b_7 from "../../../assets/images/blog/b-7.png";
import b_8 from "../../../assets/images/blog/b-8.png";
import b_9 from "../../../assets/images/blog/b-9.png";
import b_10 from "../../../assets/images/blog/b-10.png";
import b_11 from "../../../assets/images/blog/b-11.png";
import b_12 from "../../../assets/images/blog/b-12.png";

import b_sm_1 from "../../../assets/images/blog/b-sm1.png";
import b_sm_2 from "../../../assets/images/blog/b-sm2.png";
import b_sm_3 from "../../../assets/images/blog/b-sm3.png";
import b_sm_4 from "../../../assets/images/blog/b-sm4.png";
import b_sm_5 from "../../../assets/images/blog/b-sm5.png";

import sidebarBanner from "../../../assets/images/sidebar-banner.png"

class BlogSidebar extends Component {
  render() {
    return (
        <>
            {/* ===============  breadcrumb area start =============== */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>Blog Sidebar</h2>
                                <ul className="breadcrumb-links">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                                        <i className="bx bx-chevron-right" />
                                    </li>
                                    <li>Blog Sidebar</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            {/* ===============  Blog wrapper area start =============== */}
            <div className="blog-sidebar-wrapper pt-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <img src={b_1} alt="" className="img-fluid" />
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
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <img src={b_2} alt="" className="img-fluid" />
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
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <img src={b_3} alt="" className="img-fluid" />
                                            <div className="blog-date"><i className="flaticon-calendar" /> 1 April, 2021</div>
                                        </div>
                                        <div className="blog-details">
                                            <div className="blog-info">
                                                <Link to={`#`} className="blog-writer"><i className="flaticon-user" />Dina Jems</Link>
                                                <Link to={`#`} className="blog-comment"><i className="flaticon-comment" /><span>(3)</span>Comment</Link>
                                            </div>
                                            <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title">Maecenas vehicula risus non neque
                                                tincidunt.</Link>
                                            <div className="blog-btn">
                                                      <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="btn-common-sm">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <img src={b_4} alt="" className="img-fluid" />
                                            <div className="blog-date"><i className="flaticon-calendar" /> 1 April, 2021</div>
                                        </div>
                                        <div className="blog-details">
                                            <div className="blog-info">
                                                <Link to={`#`} className="blog-writer"><i className="flaticon-user" />Albert Anbi</Link>
                                                <Link to={`#`} className="blog-comment"><i className="flaticon-comment" /><span>(11)</span>Comment</Link>
                                            </div>

                                            <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title">Vivamus volutpat at sem for
                                                non euismod.</Link>
                                            <div className="blog-btn">
                                                      <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="btn-common-sm">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <img src={b_5} alt="" className="img-fluid" />
                                            <div className="blog-date"><i className="flaticon-calendar" /> 1 April, 2021</div>
                                        </div>
                                        <div className="blog-details">
                                            <div className="blog-info">
                                                <Link to={`#`} className="blog-writer"><i className="flaticon-user" />Albert Anbi</Link>
                                                <Link to={`#`} className="blog-comment"><i className="flaticon-comment" /><span>(9)</span>Comment</Link>
                                            </div>
                                            <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title">Donec suscipit consectetur et rutrum nunc.</Link>
                                            <div className="blog-btn">
                                                      <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="btn-common-sm">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <img src={b_6} alt="" className="img-fluid" />
                                            <div className="blog-date"><i className="flaticon-calendar" /> 1 April, 2021</div>
                                        </div>
                                        <div className="blog-details">
                                            <div className="blog-info">
                                                <Link to={`#`} className="blog-writer"><i className="flaticon-user" />Dina Jems</Link>
                                                <Link to={`#`} className="blog-comment"><i className="flaticon-comment" /><span>(3)</span>Comment</Link>
                                            </div>
                                            <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title">Kilen ultricies neque non toe
                                                dignissim porta.</Link>
                                            <div className="blog-btn">
                                                      <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="btn-common-sm">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <img src={b_7} alt="" className="img-fluid" />
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
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <img src={b_8} alt="" className="img-fluid" />
                                            <div className="blog-date"><i className="flaticon-calendar" /> 1 April, 2021</div>
                                        </div>
                                        <div className="blog-details">
                                            <div className="blog-info">
                                                <Link to={`#`} className="blog-writer"><i className="flaticon-user" />Cameron Ca</Link>
                                                <Link to={`#`} className="blog-comment"><i className="flaticon-comment" /><span>(7)</span>Comment</Link>
                                            </div>
                                            <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title">Class aptent taciti sociosqu litora torquent
                                                per.</Link>
                                            <div className="blog-btn">
                                                      <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="btn-common-sm">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <img src={b_9} alt="" className="img-fluid" />
                                            <div className="blog-date"><i className="flaticon-calendar" /> 1 April, 2021</div>
                                        </div>
                                        <div className="blog-details">
                                            <div className="blog-info">
                                                <Link to={`#`} className="blog-writer"><i className="flaticon-user" />Watnil Cook</Link>
                                                <Link to={`#`} className="blog-comment"><i className="flaticon-comment" /><span>(9)</span>Comment</Link>
                                            </div>
                                            <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title">Pellentesque pellentesque err
                                                metus nisi ac viv.</Link>
                                            <div className="blog-btn">
                                                      <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="btn-common-sm">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <img src={b_10} alt="" className="img-fluid" />
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
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <img src={b_11} alt="" className="img-fluid" />
                                            <div className="blog-date"><i className="flaticon-calendar" /> 1 April, 2021</div>
                                        </div>
                                        <div className="blog-details">
                                            <div className="blog-info">
                                                <Link to={`#`} className="blog-writer"><i className="flaticon-user" />Lomin Vume</Link>
                                                <Link to={`#`} className="blog-comment"><i className="flaticon-comment" /><span>(3)</span>Comment</Link>
                                            </div>
                                            <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title">vitae euismod nulla Vivamus consequat
                                                posuere.</Link>
                                            <div className="blog-btn">
                                                      <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="btn-common-sm">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <img src={b_12} alt="" className="img-fluid" />
                                            <div className="blog-date"><i className="flaticon-calendar" /> 1 April, 2021</div>
                                        </div>
                                        <div className="blog-details">
                                            <div className="blog-info">
                                                <Link to={`#`} className="blog-writer"><i className="flaticon-user" />Dina Jems</Link>
                                                <Link to={`#`} className="blog-comment"><i className="flaticon-comment" /><span>(3)</span>Comment</Link>
                                            </div>
                                            <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title">Maecenas vehicula risus non neque
                                                tincidunt.</Link>
                                            <div className="blog-btn">
                                                      <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="btn-common-sm">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="pagination mt-40">
                                        <Link to={"#"}><i className="bx bx-chevron-left" /></Link>
                                        <Link to={"#"} className="active">1</Link>
                                        <Link to={"#"} >2</Link>
                                        <Link to={"#"} >3</Link>
                                        <Link to={"#"} >4</Link>
                                        <Link to={"#"}><i className="bx bx-chevron-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-sidebar mt-30">
                                <div className="sidebar-searchbox">
                                    <div className="input-group search-box">
                                        <input type="text" className="form-control" placeholder="Search Tour..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bx bx-paper-plane" /></button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="blog-categorie mt-40">
                                            <h5 className="categorie-head">Categories</h5>
                                            <ul>
                                                <li>
                                                    <Link to={`#`}><i className="bx bxs-chevrons-right" /> Adventure Tour</Link>
                                                    </li>
                                                <li>
                                                    <Link to={`#`}><i className="bx bxs-chevrons-right" /> City Tour</Link>
                                                    </li>
                                                <li>
                                                    <Link to={`#`}><i className="bx bxs-chevrons-right" /> Group Tour</Link>
                                                    </li>
                                                <li>
                                                    <Link to={`#`}><i className="bx bxs-chevrons-right" /> Couple Tour</Link>
                                                    </li>
                                                <li>
                                                    <Link to={`#`}><i className="bx bxs-chevrons-right" /> Village Tour</Link>
                                                    </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="blog-popular mt-40">
                                            <h5 className="categorie-head">Popular Post</h5>
                                            <ul>
                                                <li className="blog-card-sm">
                                                    <div className="blog-img-sm">
                                                        <img src={b_sm_1} alt="" />
                                                    </div>
                                                    <div className="blog-details-sm">
                                                        <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title-sm">Lake Garda</Link>
                                                        <div className="blog-info">
                                                            <Link to={`#`} className="blog-writer"><i className="flaticon-user" /> Dina Jems</Link>
                                                            <Link to={`#`} className="blog-date"> <i className="flaticon-calendar" />  10 April, 2021</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="blog-card-sm">
                                                    <div className="blog-img-sm">
                                                        <img src={b_sm_2} alt="" />
                                                    </div>
                                                    <div className="blog-details-sm">
                                                        <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title-sm">Parish Hill.</Link>
                                                        <div className="blog-info">
                                                            <Link to={`#`} className="blog-writer"><i className="flaticon-user" /> Dina Jems</Link>
                                                            <Link to={`#`} className="blog-date"> <i className="flaticon-calendar" />  10 April, 2021</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="blog-card-sm">
                                                    <div className="blog-img-sm">
                                                        <img src={b_sm_3} alt="" />
                                                    </div>
                                                    <div className="blog-details-sm">
                                                        <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title-sm">Mount Dtna.</Link>
                                                        <div className="blog-info">
                                                            <Link to={`#`} className="blog-writer"><i className="flaticon-user" /> Dina Jems</Link>
                                                            <Link to={`#`} className="blog-date"> <i className="flaticon-calendar" />  10 April, 2021</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="blog-card-sm">
                                                    <div className="blog-img-sm">
                                                        <img src={b_sm_4} alt="" />
                                                    </div>
                                                    <div className="blog-details-sm">
                                                        <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title-sm">Lake Garda</Link>
                                                        <div className="blog-info">
                                                            <Link to={`#`} className="blog-writer"><i className="flaticon-user" /> Dina Jems</Link>
                                                            <Link to={`#`} className="blog-date"> <i className="flaticon-calendar" />  10 April, 2021</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="blog-card-sm">
                                                    <div className="blog-img-sm">
                                                        <img src={b_sm_5} alt="" />
                                                    </div>
                                                    <div className="blog-details-sm">
                                                        <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title-sm">Franch Rivira</Link>
                                                        <div className="blog-info">
                                                            <Link to={`#`} className="blog-writer"><i className="flaticon-user" /> Dina Jems</Link>
                                                            <Link to={`#`} className="blog-date"> <i className="flaticon-calendar" />  10 April, 2021</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="blog-tag mt-40">
                                            <h5 className="categorie-head">Tag Tour</h5>
                                            <ul>
                                                <li>
                                                    <Link to={`#`}>Adventure</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`}>Trip</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`}>Guided</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`}>Historical</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`}>Road Trips</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`}>Tourist</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`}>Tourist</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`}>Selivia</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`}>Tour Guide</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`}>Cultural</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`}>Natural</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`}>Journey</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="sidebar-banner mt-40">
                                            <img src={sidebarBanner} alt="" className="img-fluid" />
                                            <div className="sidebar-banner-overlay">
                                                <div className="sidebar-content">
                                                    <h3>Get 50% Off
                                                        In Dubai Tour</h3>
                                                    <div className="sidebar-banner-btn">
                                                        <Link to={"#"} >Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  Blog wrapper area end =============== */}
        </>
    );
  }
}

export default BlogSidebar;
