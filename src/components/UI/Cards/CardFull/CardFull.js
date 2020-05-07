import React from "react";
import classes from "./CardFull.module.css";

const cardFull = props => {
  return (
    <div className={classes.fullFlex} style={props.style}>
      {props.children}
    </div>
  );
};

export default cardFull;
