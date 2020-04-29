import React from "react";
import classes from "./CardFull.module.css";

const cardFull = ( props ) => <div className={classes.fullFlex}>{props.children}</div>

export default cardFull;