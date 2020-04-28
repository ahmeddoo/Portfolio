import React from "react";

import classes from "./APIs.module.css";
import Google from "../../assets/images/google.svg";
import Facebook from "../../assets/images/facebook.svg";
import Apple from "../../assets/images/apple.svg";

const APIs = () => {
  return (
    <React.Fragment>
      <div className={[classes.api, classes.google].join(" ")}>
        <h3>
          <img src={Google} /> Continue with Google
        </h3>
      </div>
      <div className={[classes.api, classes.facebook].join(" ")}>
        <h3>
          <img src={Facebook} /> Continue with Facebook
        </h3>
      </div>
      <div className={[classes.api, classes.apple].join(" ")}>
        <h3>
          <img src={Apple} /> Continue with Apple
        </h3>
      </div>
    </React.Fragment>
  );
};

export default APIs;
