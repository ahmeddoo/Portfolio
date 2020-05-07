import React from "react";
import BigButton from "../UI/Button/BigButton";
import CardFull from "../UI/Cards/CardFull/CardFull";

const welcome = () => {
  return (
    <CardFull>
      <h1>How can we transform your business?</h1>
      <p style={{ lineHeight: "2.5rem" }}>
        We don't just take your order and serve you a web design. dootech
        website designers, website developers, UI UX designers take the time to
        get to know you and your market to create an efficient, beautiful and
        more attractive website for your business.
      </p>
      <BigButton>
        Get Started <span>></span>
      </BigButton>
    </CardFull>
  );
};

export default welcome;
