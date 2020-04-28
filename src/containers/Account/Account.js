import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//Custom component import
import classes from "./Account.module.css";
import APIs from "../../components/APIs/APIs";
import Logo from "../../assets/images/logob.png";

const Signin = () => {
  const [statusState, setStatusState] = useState(true);

  const toggleAccount = () => {
    setStatusState(!statusState);
  };

  const signin = (
    <React.Fragment>
      <h1>Sign in</h1>
      <h4>
        New User?{" "}
        <span onClick={toggleAccount} className={classes.link}>
          {" "}
          Create account{" "}
        </span>
      </h4>

      <form>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Signin" />
      </form>
    </React.Fragment>
  );

  const signup = (
    <React.Fragment>
      <h1>Sign up</h1>
      <h4>
        Already have account?{" "}
        <span onClick={toggleAccount} className={classes.link}>
          {" "}
          Sign in{" "}
        </span>
      </h4>

      <form>
        <input type="fullName" placeholder="Full name" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Signup" />
      </form>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className={classes.Main}>
        <div className={classes.pageCaption}>
          <h1>
            <img src={Logo} alt="Logo" className={classes.logo} /> Portfolio{" "}
          </h1>
        </div>
        <div className={classes.Account}>
          <div className={classes.form}>
            {statusState ? signin : signup}

            <h3>Or</h3>
            <APIs />
          </div>
          <div className={classes.copy}>
            <span>Copyright &copy; dootech 2020, Alright reserved</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin;
