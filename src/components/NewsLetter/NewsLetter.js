import React from "react";
import classes from "./NewsLetter.module.css";
import CardFull from "../UI/Cards/CardFull/CardFull";

const newsLetter = () => {
  return (
    <CardFull
      style={{
        padding: "50px 10%",
        backgroundColor: "#E7E7E7",
        margin: "50px auto"
      }}
    >
      <h2>Don't forget to signup our Newsletter</h2>
      <div className={classes.newsletter}>
        <form action="#">
          <input type="text" placeholder="Your email" />
          <input type="submit" value="Sign Up Now" />
        </form>
      </div>
      <span>
        By sharing your email, you agree to our <a href="#">Privacy Policy</a>{" "}
        and <a href="#">Terms of Service</a>
      </span>
    </CardFull>
  );
};

export default newsLetter;
