import React, { Component } from "react";
import { SRLWrapper } from "simple-react-lightbox";

import gallery1Img from "../../../assets/images/gallary/gl-1.png"
import gallery2Img from "../../../assets/images/gallary/gl-2.png"
import gallery3Img from "../../../assets/images/gallary/gl-3.png"
import gallery4Img from "../../../assets/images/gallary/gl-4.png"
import gallery5Img from "../../../assets/images/gallary/gl-5.png"
import gallery6Img from "../../../assets/images/gallary/gl-6.png"
import gallery8Img from "../../../assets/images/gallary/gl-8.png"
import gallery9Img from "../../../assets/images/gallary/gl-9.png"
import gallery10Img from "../../../assets/images/gallary/gl-10.png"
import gallery12Img from "../../../assets/images/gallary/gl-12.png"
import gallery13Img from "../../../assets/images/gallary/gl-13.png"
import gallery17Img from "../../../assets/images/gallary/gl-17.png"
import gallery16Img from "../../../assets/images/gallary/gl-16.png"
import gallery15Img from "../../../assets/images/gallary/gl-15.png"
import gallery14Img from "../../../assets/images/gallary/gl-14.png"

import galleryGxx1Img from "../../../assets/images/gallary/g-xxl-1.png"
import galleryGxx2Img from "../../../assets/images/gallary/g-xxl-2.png"
import galleryGxx3Img from "../../../assets/images/gallary/g-xxl-3.png"
import galleryGxx4Img from "../../../assets/images/gallary/g-xxl-4.png"

import galleryGxl1Img from "../../../assets/images/gallary/g-xl-1.png"
import galleryGxl2Img from "../../../assets/images/gallary/g-xl-2.png"
import galleryGxl3Img from "../../../assets/images/gallary/g-xl-3.png"
import galleryGxl4Img from "../../../assets/images/gallary/g-xl-4.png"

import {Link} from "react-router-dom";

class GalleryComponent extends Component {
  render() {
    return (
        <>
            {/* ===============  breadcrumb area start =============== */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>Gallary</h2>
                                <ul className="breadcrumb-links">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                                        <i className="bx bx-chevron-right" />
                                    </li>
                                    <li>Gallary</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            {/* ===============  gallary wrapper start =============== */}
            <div className="gallary-wrapper pt-120">
                <div className="container">
                    <SRLWrapper>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="gallary-colom-one">
                                <div className="gallary-grid">
                                    <Link to={gallery1Img} className="img-sm-1 main-gallary">
                                        <img src={gallery1Img} alt="gallary-img" />
                                    </Link>
                                    <Link to={gallery2Img} className="img-sm-2 main-gallary">
                                        <img src={gallery2Img} alt="gallary-img" />
                                    </Link>
                                    <Link to={galleryGxx1Img} className="img-xxl main-gallary">
                                        <img src={galleryGxx1Img} alt="gallary-img" />
                                    </Link>
                                </div>
                                <div className="gallary-grid mt-24">
                                    <Link to={gallery3Img} className="img-sm-1 main-gallary">
                                        <img src={gallery3Img} alt="gallary-img" />
                                    </Link>
                                    <Link to={gallery4Img} className="img-sm-2 main-gallary">
                                        <img src={gallery4Img} alt="gallary-img" />
                                    </Link>

                                    <Link to={galleryGxx2Img} className="img-xxl main-gallary">
                                        <img src={galleryGxx2Img} alt="gallary-img" />
                                    </Link>
                                </div>
                                <div className="gallary-grid mt-24">
                                    <Link to={gallery5Img} className="img-sm-1 main-gallary">
                                        <img src={gallery5Img} alt="gallary-img" />
                                    </Link>
                                    <Link to={gallery6Img} className="img-sm-2 main-gallary">
                                        <img src={gallery6Img} alt="gallary-img" />
                                    </Link>

                                    <Link to={galleryGxx3Img} className="img-xxl main-gallary">
                                        <img src={galleryGxx3Img} alt="gallary-img" />
                                    </Link>
                                </div>
                                <div className="gallary-grid mt-24">
                                    <Link to={gallery10Img} className="img-sm-1 main-gallary">
                                        <img src={gallery10Img} alt="gallary-img" />
                                    </Link>
                                    <Link to={gallery8Img} className="img-sm-2 main-gallary">
                                        <img src={gallery8Img} alt="gallary-img" />
                                    </Link>

                                    <Link to={galleryGxx4Img} className="img-xxl main-gallary">
                                        <img src={galleryGxx4Img} alt="gallary-img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="grllary-colom-two">
                                <div className="gallary-grid-2">

                                    <Link to={galleryGxl1Img}  className="img-xl main-gallary">
                                        <img src={galleryGxl1Img} alt="gallary-img" />
                                    </Link>

                                    <Link to={gallery9Img}  className="img-sm-3 main-gallary">
                                        <img src={gallery9Img} alt="gallary-img" />
                                    </Link>

                                    <Link to={gallery10Img}  className="img-sm-4 main-gallary">
                                        <img src={gallery10Img} alt="gallary-img" />
                                    </Link>
                                </div>

                                <div className="gallary-grid-2 mt-24">
                                    <Link to={galleryGxl2Img}  className="img-xl main-gallary">
                                        <img src={galleryGxl2Img} alt="gallary-img" />
                                    </Link>

                                    <Link to={gallery17Img}  className="img-sm-3 main-gallary">
                                        <img src={gallery17Img} alt="gallary-img" />
                                    </Link>

                                    <Link to={gallery16Img}  className="img-sm-4 main-gallary">
                                        <img src={gallery16Img} alt="gallary-img" />
                                    </Link>
                                </div>

                                <div className="gallary-grid-2 mt-24">
                                    <Link to={galleryGxl3Img}  className="img-xl main-gallary">
                                        <img src={galleryGxl3Img} alt="gallary-img" />
                                    </Link>
                                    <Link to={gallery15Img}  className="img-sm-3 main-gallary">
                                        <img src={gallery15Img} alt="gallary-img" />
                                    </Link>
                                    <Link to={gallery14Img}  className="img-sm-4 main-gallary">
                                        <img src={gallery14Img} alt="gallary-img" />
                                    </Link>
                                </div>
                                <div className="gallary-grid-2 mt-24">
                                    <Link to={galleryGxl4Img}  className="img-xl main-gallary">
                                        <img src={galleryGxl4Img} alt="gallary-img" />
                                    </Link>
                                    <Link to={gallery13Img}  className="img-sm-3 main-gallary">
                                        <img src={gallery13Img} alt="gallary-img" />
                                    </Link>
                                    <Link to={gallery12Img}  className="img-sm-4 main-gallary">
                                        <img src={gallery12Img} alt="gallary-img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SRLWrapper>
                </div>
            </div>
            {/* ===============  gallary wrapper end =============== */}
        </>
    );
  }
}

export default GalleryComponent;
