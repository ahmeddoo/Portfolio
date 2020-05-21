import React from "react";
import classes from "./Footer.module.css";
import whatsapp from "../../assets/images/whatsapp.svg";
import facebook from "../../assets/images/facebookc.svg";
import linkedin from "../../assets/images/linkedin.svg";
import instagram from "../../assets/images/instagram.svg";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className={classes.FooterWrapper}>
      <div className={classes.Footer}>
        <div>
          <img src={Logo} className={classes.logo} />
        </div>
        <div>
          <h2>In-Demand Talents </h2>
          <ul>
            <li>Frontend developer</li>
            <li>Backend developer</li>
            <li>UI design</li>
            <li>UX design</li>
            <li>Digital marketting</li>
            <li>SEO</li>
          </ul>
        </div>
        <div>
          <h2>Links </h2>
          <ul>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Clients</li>
            <li>Blog</li>
            <li>About us</li>
            <li>Signin</li>
          </ul>
        </div>
        <div>
          <h2>Contact us </h2>
          <ul>
            <li>Contact us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h2>Socials </h2>
          {/* <div className={classes.socials}>
            <img src={linkedin} alt="Linkedin" title="Linkedin" />
            <img src={facebook} alt="Facebook" title="Facebook" />
            <img src={instagram} alt="Instagram" title="Instagram" />
            <img src={whatsapp} alt="Whatsapp" title="Whatsapp" />
          </div> */}

          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
      <div className={classes.footerBase}>
        {" "}
        Copyright &copy; dootech {new Date().getFullYear()} All right reserved
      </div>
    </div>
  );
};

export default Footer;
