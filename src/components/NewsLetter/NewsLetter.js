import React from "react";
import classes from "./NewsLetter.module.css";
import CardFull from "../UI/Cards/CardFull/CardFull";

const newsLetter = () => {
  return (
    <div className={classes.fullFlex}>
      <h2>Don't forget to signup our Newsletter</h2>
      <div className={classes.newsletter}>
        <form action="#">
          <input type="email" placeholder="Your email" />
          <input type="submit" value="Sign Up Now" />
        </form>
      </div>
      <span>
        by sharing your email, you agree to our <a href="#">privacy policy</a>{" "}
        and <a href="#">terms of service</a>
      </span>
    </div>
  );
};

export default newsLetter;
