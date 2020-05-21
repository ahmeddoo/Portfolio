import React, { useState } from "react";

//Custom component import
import classes from "./Account.module.css";
import APIs from "../../components/APIs/APIs";
import SignIn from "../Account/SignIn/SignIn";
import SignUp from "../Account/SignUp/SignUp";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Backdrop from "../../components/Backdrop/Backdrop";

const Signin = () => {
  const [statusState, setStatusState] = useState(true);

  const OnToggleAccountHandler = () => {
    setStatusState(!statusState);
  };

  const signin = (
    <SignIn guest={false} toggleAccount={OnToggleAccountHandler} />
  );

  const signup = <SignUp guest={true} toggleAccount={OnToggleAccountHandler} />;

  return (
    <React.Fragment>
      <div className={classes.Main}>
        <div className={classes.Account}>
          <div className={classes.form}>
            {statusState ? signin : signup}

            <h3>Or</h3>
            <APIs />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin;
