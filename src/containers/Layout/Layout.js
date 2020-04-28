import React from "react";
import { Route } from "react-router-dom";

import Portfolio from "../Portfolio/Portfolio";
import Account from "../Account/Account";

const Layout = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Portfolio} />
      <Route path="/account" exact component={Account} />
    </React.Fragment>
  );
};

export default Layout;
