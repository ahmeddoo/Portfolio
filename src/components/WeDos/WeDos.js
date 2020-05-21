import React, { useState } from "react";
import WhatWeDo from "./WeDo/WeDo";
import classes from "./WeDos.module.css";

import Seo from "../../assets/images/seo.png";
import Web from "../../assets/images/web.png";
import Webdesign from "../../assets/images/webdesign.png";
import Digitalmarket from "../../assets/images/digitalmarket.png";
import reactb from "../../assets/images/reactb.png";
import Restgraph from "../../assets/images/restgraph.png";

const weDos = () => {
  const wedos = [
    {
      title: "React SPA",
      text:
        " Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices.",
      image: reactb
    },
    {
      title: "Web Application ",
      text:
        " Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices.",
      image: Web
    },
    {
      title: "Web Design ",
      text:
        " Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices.",
      image: Webdesign
    },
    {
      title: "GraphQI | RESTful APIs ",
      text:
        " Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices.",
      image: Restgraph
    },
    {
      title: "Digital Marketting ",
      text:
        " Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices.",
      image: Digitalmarket
    },
    {
      title: "SEO ",
      text:
        " Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices.",
      image: Seo
    }
  ];
  return (
    <div className={classes.flexRow}>
      {wedos.map((wedo, index) => (
        <WhatWeDo
          key={index}
          title={wedo.title}
          text={wedo.text}
          image={wedo.image}
        />
      ))}
    </div>
  );
};

export default weDos;
