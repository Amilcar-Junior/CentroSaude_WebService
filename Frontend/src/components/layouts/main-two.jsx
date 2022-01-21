import React, { Component } from "react";
import Footers from "../common/footers";
import HeaderTwo from "../common/headers2";
import HomePageTwo from "../pages/home2/HomePage";

//Second layout
class MainTwoLayout extends Component {

  //Inherited Parent options.
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <>
          <HeaderTwo/>
              <HomePageTwo/>
          <Footers/>
        </>
    );
  }
}

export default MainTwoLayout;
