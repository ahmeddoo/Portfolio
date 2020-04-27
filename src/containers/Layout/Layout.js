import React from "react";
import { Route } from "react-router-dom";

import Portfolio from "../Portfolio/Portfolio";
import Signin from "../../components/Signin/Signin";

const Layout = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Portfolio} />
      <Route path="/signin" exact component={Signin} />
    </React.Fragment>
  );
};

export default Layout;
