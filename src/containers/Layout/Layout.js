import React, { useState } from "react";
import { Route } from "react-router-dom";

import Portfolio from "../Portfolio/Portfolio";
import Account from "../Account/Account";
import HiringFrom from "../../components/Hiringquiz/HiringForm/HiringForm";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Backdrop from "../../components/Backdrop/Backdrop";
import About from "../../components/About/About";

const Layout = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backDropHandler = () => {
    setSideDrawerOpen(false);
  };

  let backDrop;

  if (sideDrawerOpen) {
    backDrop = <Backdrop clicked={backDropHandler} />;
  }
  return (
    <React.Fragment>
      <Header drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backDrop}

      <Route path="/" exact component={Portfolio} />
      <Route path="/account" exact>
        <Account />
      </Route>
      <Route path="/hiringform" exact>
        <HiringFrom />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
