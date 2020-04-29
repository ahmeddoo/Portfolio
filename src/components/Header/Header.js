import React, { useState, useEffect } from "react";

//Custom Components imports
import Logo from "../Logo/Logo";
import Navigations from "../Navigations/Navigations";
import classes from "./Header.module.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const Header = props => {
  return (
    <header>
      <div className={classes.header}>
        <Logo />
        <div className={classes.spacer} />
        <Navigations
          navWrapper={classes.navWrapper}
          navList={classes.navList}
        />
        <div className={classes.toggleButton}>
          <DrawerToggleButton drawerClickHandler={props.drawerClickHandler} />
        </div>
      </div>
    </header>
  );
};

export default Header;
