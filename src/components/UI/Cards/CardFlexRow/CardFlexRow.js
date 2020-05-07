import React from "react";
import classes from "./CardFlexRow.module.css";

const cardFlexRow = props => (
  <div className={classes.fullFlex} style={props.style}>
    {props.children}
  </div>
);

export default cardFlexRow;
