import React, { useState } from "react";
import CardFlexRow from "../UI/Cards/CardFlexRow/CardFlexRow";
import Service from "./Service/Service";
import Seo from "../../assets/images/seo.png";
import Web from "../../assets/images/web.png";
import Webdesign from "../../assets/images/webdesign.png";
import Digitalmarket from "../../assets/images/digitalmarket.png";

const Services = () => {
  const [services, setServices] = useState([
    { name: "Web Developmet", image: Web, selected: true },
    { name: "Web Design", image: Webdesign, selected: false },
    { name: "Digital Marketting", image: Digitalmarket, selected: false },
    { name: "Search Engine Optimization", image: Seo, selected: false },
    { name: "Digital Marketting", image: Digitalmarket, selected: false },
    { name: "Digital Marketting", image: Digitalmarket, selected: false }
  ]);
  return (
    <CardFlexRow>
      {services.map((service, index) => (
        <Service
          key={index}
          name={service.name}
          image={service.image}
          selected={service.selected}
        />
      ))}
    </CardFlexRow>
  );
};

export default Services;
