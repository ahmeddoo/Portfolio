import React from "react";
import classes from "./Navigations.module.css";
import Navigation from "./Navigation/Navigation";

const Navigations = () => {
  return (
    <div className={classes.Navigations}>
      <ul className={classes.nav}>
        <Navigation to="/">Portfolio</Navigation>
        <Navigation to="/services">Services</Navigation>
        <Navigation to="/clients">Clients</Navigation>
        <Navigation to="/blog">Blog</Navigation>
        <Navigation to="/about">About us</Navigation>
        <Navigation to="/signin" standout={true}>
          Sign in
        </Navigation>
      </ul>
    </div>
  );
};

export default Navigations;
