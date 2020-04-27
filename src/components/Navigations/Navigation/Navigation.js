import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = props => {
  const stand = [];
  if (props.standout) {
    stand.push(classes.standout);
  }
  return (
    <li>
      <NavLink
        to={props.to}
        activeClassName={classes.active}
        exact
        className={stand.join(" ")}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default Navigation;
