import React from "react";

import classes from "./API.module.css";

const api = ( props ) => {
    let ApiClasses = [classes.API, classes[props.className] ];

    return (
        <div className={ ApiClasses.join(' ') }>
            <h3>
                <img src={props.image} alt={props.type}/> Continue with {props.type}
            </h3>
        </div>
    );
}

export default api;