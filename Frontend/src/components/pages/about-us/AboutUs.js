import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import AboutWrapper from "./AboutWrapper";
import GuideWrapper from "./GuideWrapper";
import Achievement from "./Achievement";


class AboutUs extends Component {
  render() {
    return (
       <>
            <BreadCrumb/>
            <AboutWrapper/>
           <GuideWrapper/>
           <Achievement/>
 
       </>
    );
  }
}

export default AboutUs;
