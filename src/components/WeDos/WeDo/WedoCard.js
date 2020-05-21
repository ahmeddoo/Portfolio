import React from "react";
import classes from "./WedoCard.module.css";

const wedoCard = props => {
  return (
    <div className={classes.wedoCard}>
      <div className={classes.tagIcon}>{props.icon}</div>
      <h2>
        <b>{props.title}</b>
      </h2>
      {props.body}
    </div>
  );
};

export default wedoCard;
