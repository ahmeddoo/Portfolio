import React from "react";
import classes from "./Banner.module.css";
import Icon from "../../assets/images/icon2.png";
import Bg from "../../assets/images/pic1.jpg";

const Banner = () => {
  return (
    <div className={classes.BannerWrapper}>
      <div className={classes.overlay}>
        <div className={classes.Banner}>
          <h1>
            dootech is a Fullstack Web <img src={Icon} alt="icon" /> development
            company, building your website using the trending technologies
          </h1>
          <h2>Reactjs, Nodejs, UX UI Design, Mongodb, Firebase...</h2>
          {/* <div>
          <button
            className="big-button"
            style={{ backgroundColor: "#0769e0", color: "white" }}
          >
            Get started
          </button>
          <button className="big-button">Read more..</button>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
