import React from "react";
import classes from "./SideDrawer.module.css";
import Navigations from "../Navigations/Navigations";

const SideDrawer = props => {
  let drawerClasses = [classes.SideDrawer];

  if (props.show) {
    drawerClasses.push(classes.open);
  }
  return (
    <div className={drawerClasses.join(" ")}>
      <Navigations navWrapper={classes.navWrapper} navList={classes.navList} />
    </div>
  );
};

export default SideDrawer;
