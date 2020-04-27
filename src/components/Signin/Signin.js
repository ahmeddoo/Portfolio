import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Signin.module.css";
import Header from "../Header/Header";
import Logo from "../../assets/images/logob.png";
import Google from "../../assets/images/google.svg";
import Facebook from "../../assets/images/facebook.svg";
import Apple from "../../assets/images/apple.svg";

const Signin = () => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <div className={classes.Main}>
        <div className={classes.pageCaption}>
          <h1>
            <img src={Logo} alt="Logo" className={classes.logo} /> Portfolio{" "}
          </h1>
        </div>
        <div className={classes.Signin}>
          <h1>Sign in</h1>
          <h4>
            New User?{" "}
            <NavLink to="/register" exact>
              {" "}
              Create account{" "}
            </NavLink>
          </h4>

          <form>
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Signin" />
          </form>

          <h3>OR</h3>
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin;
