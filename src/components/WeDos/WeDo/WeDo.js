import React from "react";
import BigButton from "../../UI/Button/BigButton";
import classes from "./WeDo.module.css";

const whatWeDo = props => {
  return (
    <div className={classes.WeDo}>
      <img src={props.image} alt="reactb" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <span>View {props.title} &nbsp;&nbsp;&nbsp;&nbsp;--></span>
      {/* <BigButton>
        Learn More <span>></span>
      </BigButton> */}
    </div>
  );
};

export default whatWeDo;
