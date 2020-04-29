import React from "react";
import classes from "./EntryButton.module.css";

const entryButton = ( props ) => <button onClick={props.sign} className={classes.Button}>{props.children}</button>

export default entryButton;