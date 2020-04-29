import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.Footer}>Copyright &copy; dootech {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
