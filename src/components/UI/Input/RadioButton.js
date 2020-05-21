import React from "react";
import classes from "./RadioButton.module.css";

const radioButton = props => {
  return (
    <label className={classes.label}>
      <input type="radio" name={props.name} value={props.value} /> {props.label}
    </label>
  );
};

export default radioButton;
