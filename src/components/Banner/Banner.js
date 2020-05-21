import React from "react";
import classes from "./Banner.module.css";
import Icon from "../../assets/images/icon2.png";
import Bg from "../../assets/images/pic1.jpg";
import BigButton from "../UI/Button/BigButton";

const Banner = () => {
  return (
    <div className={classes.BannerWrapper}>
      <div className={classes.overlay}>
        <div className={classes.Banner}>
          <div>
            <h1>Hire Us of Freelance Talent</h1>
            <h2>
              <img src={Icon} alt="icon" width="30" /> dootech is a Fullstack
              Web development company, building your website using the trending
              technologies, Reactjs, Nodejs, UX UI Design, Mongodb, GraphQI |
              RESTful APIs, not just that, our team of developers have lot
              experience in previous technologies, PHP, Mysql, Mariadb...,
              incase your website is already build upon that..
            </h2>

            <BigButton selected={true}>Hire dootech</BigButton>
          </div>
          <div className={classes.bannerImage}></div>
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
