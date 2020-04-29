import React from "react";
import classes from "./DrawerToggle.module.css";
const DrawerToggleButton = props => {
  return (
    <button className={classes.toggleButton} onClick={props.drawerClickHandler}>
      <div className={classes.buttonLine}></div>
      <div className={classes.buttonLine}></div>
      <div className={classes.buttonLine}></div>
    </button>
  );
};

export default DrawerToggleButton;
