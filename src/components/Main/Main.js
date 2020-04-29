import React from "react";
import classes from "./Main.module.css";
import Footer from "../Footer/Footer";
import WeDos from "../../components/WeDos/WeDos";
import Welcome from "../Welcome/Welcome";
import NewsLetter from "../NewsLetter/NewsLetter";

const Main = () => {
  return (
    <div className={classes.Main}>
      <Welcome />
      <WeDos />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Main;
