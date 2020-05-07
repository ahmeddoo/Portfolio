import React from "react";
import classes from "./Service.module.css";

const service = props => {
  let classList = [classes.service];
  if (props.selected) {
    classList.push(classes.selected);
  }
  return (
    <div className={classList.join(" ")}>
      <img src={props.image} alt="" />
      <span>{props.name}</span>
    </div>
  );
};

export default service;
