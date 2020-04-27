import React from "react";
import classes from "./Main.module.css";
import reactb from "../../assets/images/reactb.png";
import arrow from "../../assets/images/arrow.svg";
import restfulapib from "../../assets/images/restfulapib.png";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className={classes.Main}>
      <div className={classes.fullFlex}>
        <h1>How can we transform your business?</h1>
        <p>
          We don't just take your order and serve you a web design. dootech
          website designers, website developers, UI UX designers take the time
          to get to know you and your market to create an efficient, beautiful
          and more attractive website for your business.
        </p>
        <button className="big-button">
          Get Started <img src={arrow} />
        </button>
      </div>

      <div className={classes.flexRow}>
        <div>
          <img src={reactb} alt="" />
          <p>
            <span className="outline">Responsive web design (RWD)</span> is an
            approach to web design that makes web pages render well on a variety
            of devices and window or screen sizes. Recent work also considers
            the viewer proximity as part of the viewing context as an extension
            for RWD. Content, design and performance are necessary across all
            devices to ensure usability and satisfaction.
          </p>
          <button className="big-button">
            Read more <img src={arrow} />
          </button>
        </div>
        <div>
          <img src={reactb} alt="" />
          <p>
            <span className="outline">Single-page application (SPA)</span> is a
            web application or website that interacts with the web browser by
            dynamically rewriting the current web page with new data from the
            web server, instead of the default method of the browser loading
            entire new pages. The goal is faster transitions that make the
            website feel more like a native app.
          </p>
          <button className="big-button selected">
            Read more <img src={arrow} />
          </button>
        </div>
        <div>
          <img src={restfulapib} alt="" />
          <p>
            <span className="outline">
              Representational state transfer (REST)
            </span>
            is a software architectural style that defines a set of constraints
            to be used for creating Web services. RESTful Web services allow the
            requesting systems to access and manipulate textual representations
            of Web resources by using a uniform and predefined set of stateless
            operations.
          </p>
          <button className="big-button">
            Read more <img src={arrow} />
          </button>
        </div>
      </div>

      <div className={classes.fullFlex}>
        <h2>Don't forget to signup our Newsletter</h2>
        <div className={classes.newsletter}>
          <form action="#">
            <input type="text" placeholder="Your email" />
            <input type="submit" value="Sign Up Now" />
          </form>
        </div>
        <span>
          By sharing your email, you agree to our <a href="#">Privacy Policy</a>{" "}
          and <a href="#">Terms of Service</a>
        </span>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
