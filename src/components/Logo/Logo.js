import React from "react";
import logo from "../../assets/images/logob.png";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="Logo" width="130" className={classes.Logoimage} />
    </div>
  );
};

export default Logo;
