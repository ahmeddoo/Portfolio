
import React from "react";
import arrow from "../../../assets/images/arrow.svg";

const bigButton = ( props ) =>  <button className="big-button">
{props.children} <img src={arrow} alt="next page arrow"/>
</button>

export default bigButton;