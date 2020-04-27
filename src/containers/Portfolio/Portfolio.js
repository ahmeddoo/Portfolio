import React, { useState, useEffect } from "react";

//Custom Components imports
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Main from "../../components/Main/Main";

const Portfolio = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Main />
    </React.Fragment>
  );
};

export default Portfolio;
