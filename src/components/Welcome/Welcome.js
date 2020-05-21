import React from "react";
import BigButton from "../UI/Button/BigButton";
import classes from "./Welcome.module.css";

const welcome = () => {
  return (
    <div className={classes.fullFlex}>
      <h1>How can we transform your business?</h1>
      <p style={{ lineHeight: "2.5rem" }}>
        We don't just take your order and serve you a web design. dootech
        website designers, website developers, UI UX designers take the time to
        get to know you and your market to create an efficient, beautiful and
        more attractive website for your business.
      </p>
      <BigButton>
        Learn more <span>></span>
      </BigButton>
    </div>
  );
};

export default welcome;
