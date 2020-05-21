import React from "react";
import classes from "./About.module.css";
import IconCard from "../UI/Cards/IconCard/IconCard";
import WedoCard from "../WeDos/WeDo/WedoCard";

const about = () => {
  const iconCards = [
    {
      icon: 1,
      title: "Who we are?",
      body: (
        <h3>
          Welcome to <b>dootech </b> we deliver a high quality web and mobile
          app development services that will make your business better. Hire us
          for the best programmers at affordable prices. Our design-focused
          approach and project execution processes help you to deliver the right
          solutions.
        </h3>
      )
    },

    {
      icon: 2,
      title: "Our vision",
      body: (
        <h3>
          Our vision at <b>dootech </b> is to become a top IT company in Nigeria
          for delivering various industry-led mobility solutions. The goal is to
          empower clients and businesses by creating new possibilities
          leveraging the technologies of today and tomorrow with the utmost
          quality, satisfaction, and transparency.
        </h3>
      )
    }
  ];

  const wedos = [
    {
      title: "Custom software development",
      body: (
        <h3>
          Whether you are starting a project or want to extend your already
          running solution with new features, our development team can help you
          throughout the whole development cycle, from requirements through
          coding and testing to after-launch support and maintenance.
        </h3>
      )
    },

    {
      title: "Web development",
      body: (
        <h3>
          We specialize in the development of large and medium-sized sites, web
          applications, single page app, and portals with complex and rich
          functionality. We can cope with heavy loads and are happy to undertake
          the solution of complex problems.
        </h3>
      )
    },

    {
      title: "Digital Marketing",
      body: (
        <h3>
          dootech offers full-service digital marketing solutions, including
          search engine optimization (SEO), search engine marketing, social
          media marketing, and email marketing. We are committed to finding
          effective ways to drive meaningful traffic that helps your business
          grow.
        </h3>
      )
    }
  ];
  return (
    <div className={classes.Main}>
      <div className={classes.about}>
        <div className={classes.aboutLeft}>
          <h1 className={classes.pageTitle}>
            <b>About dootech</b>
          </h1>
        </div>
        <div className={classes.aboutRight}>
          <h3 className={classes.topLabel}>
            The best fullstack development company for your business
          </h3>

          {iconCards.map((card, index) => (
            <IconCard key={index} icon={card.icon} title={card.title}>
              {card.body}
            </IconCard>
          ))}
        </div>
      </div>

      <div>
        <h1>
          <b>What we do?</b>
        </h1>
        <div className={classes.wedos}>
          {wedos.map((wedo, index) => (
            <WedoCard key={index} title={wedo.title} body={wedo.body} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default about;
