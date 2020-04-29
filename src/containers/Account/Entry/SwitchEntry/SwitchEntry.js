import React from "react";
import classes from "./SwitchEntry.module.css";

const switchEntry = ( props ) => {
    return (
        <React.Fragment>
            <h4>
                {!props.guest ? "New User":"Already have an account"}?
                <span onClick={props.toggleAccount} className={classes.link}>
                {props.entry}
                </span>
            </h4>
        </React.Fragment>
    )
}

export default switchEntry;