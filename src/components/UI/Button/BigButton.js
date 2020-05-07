import React from "react";
import arrow from "../../../assets/images/arrow.svg";
import classes from "./BigButton.module.css";

const bigButton = props => {
  let classList = [classes.bigButton];
  if (props.selected) {
    classList.push(classes.selected);
  }
  return (
    <button className={classList.join(" ")} style={props.style}>
      {props.children}
    </button>
  );
};

export default bigButton;
