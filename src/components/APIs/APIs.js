import React from "react";

import Google from "../../assets/images/google.svg";
import Facebook from "../../assets/images/facebook.svg";
import Apple from "../../assets/images/apple.svg";
import API from "../UI/API/API";

const APIs = () => {
  const APIS = [
    {type: "google", image: Google, className: "GOOGLE"},
    {type: "facebook", image: Facebook, className: "FACEBOOK"},
    {type: "apple", image: Apple, className: "APPLE"},
  ]

  return APIS.map( api => <API key={api.type} image={api.image} className={api.className} type={api.type}/> );
};

export default APIs;
