import React, { useState, useEffect } from "react";

//Custom Components imports
import Logo from "../Logo/Logo";
import Navigations from "../Navigations/Navigations";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={classes.header}>
        <Logo />
        <Navigations />
      </div>
    </header>
  );
};

export default Header;
