
import React from "react";
import WhatWeDo from "./WeDo/WeDo";
import classes from "./WeDos.module.css";


const weDos = () => {
    return (
        <div className={classes.flexRow}>
            <WhatWeDo />
            <WhatWeDo />
            <WhatWeDo />
        </div>
    );
}

export default weDos;