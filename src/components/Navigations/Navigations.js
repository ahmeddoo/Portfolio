import React from "react";
import classes from "./Navigations.module.css";
import Navigation from "./Navigation/Navigation";

const Navigations = props => {
  return (
    <div className={props.navWrapper}>
      <ul className={props.navList}>
        <Navigation to="/">Portfolio</Navigation>
        <Navigation to="/services">Services</Navigation>
        <Navigation to="/clients">Clients</Navigation>
        <Navigation to="/hiringform">Blog</Navigation>
        <Navigation to="/about">About us</Navigation>
        <Navigation to="/account" standout={true}>
          Sign in
        </Navigation>
      </ul>
    </div>
  );
};

export default Navigations;
