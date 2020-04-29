import React, { useState } from "react";

//Custom component import
import classes from "./Account.module.css";
import APIs from "../../components/APIs/APIs";
import Logo from "../../assets/images/logob.png";
import SignIn from "../Account/SignIn/SignIn";
import SignUp from "../Account/SignUp/SignUp";

const Signin = () => {
  const [statusState, setStatusState] = useState(true);

  const OnToggleAccountHandler = () => {
    setStatusState(!statusState);
  };

  const signin = <SignIn guest={false} toggleAccount={OnToggleAccountHandler}/>

  const signup = <SignUp guest={true} toggleAccount={OnToggleAccountHandler}/> 

  return (
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
          <span>Copyright &copy; dootech {new Date().getFullYear()}, Alright reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
