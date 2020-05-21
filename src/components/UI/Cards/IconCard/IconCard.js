import React from "react";
import classes from "./IconCard.module.css";

const iconCard = props => {
  return (
    <div className={classes.iconCard}>
      <div className={classes.tagIcon}> {props.icon} </div>
      <h2>
        <b>{props.title}</b>
      </h2>
      {props.children}
    </div>
  );
};

export default iconCard;
