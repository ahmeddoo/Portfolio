import React from "react";
import classes from "./Main.module.css";
import WeDos from "../../components/WeDos/WeDos";
import Welcome from "../Welcome/Welcome";
import NewsLetter from "../NewsLetter/NewsLetter";
import Hiringquiz from "../Hiringquiz/Hiringquiz";

const Main = () => {
  return (
    <div className={classes.Main}>
      <Welcome />
      <Hiringquiz />
      <WeDos />
      {/* <NewsLetter /> */}
    </div>
  );
};

export default Main;
