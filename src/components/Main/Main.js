import React from "react";
import classes from "./Main.module.css";
import Footer from "../Footer/Footer";
import WeDos from "../../components/WeDos/WeDos";
import Welcome from "../Welcome/Welcome";
import NewsLetter from "../NewsLetter/NewsLetter";
import Services from "../Services/Services";
import Hiringquiz from "../Hiringquiz/Hiringquiz";

const Main = () => {
  return (
    <div className={classes.Main}>
      <Services />
      <Welcome />
      <Hiringquiz />
      <WeDos />
      <NewsLetter style={{ padding: "100px 0px" }} />
      <Footer />
    </div>
  );
};

export default Main;
