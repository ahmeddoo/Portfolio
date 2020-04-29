import React from "react";
import classes from "./Input.module.css";

const input = ( props ) => {
    const inputClasses = [ classes.Input ];
    if(props.inValid) {
        inputClasses.push( classes.InValid )
    }

    let inputElement = <div><input className={inputClasses.join(" ")} /> </div>
    switch(props.eleType) {
        case "input": {
            inputElement = <input value={props.value} onChange={props.change} className={inputClasses.join(" ")} {...props.eleConfig} />
            break;
        }

        case "textarea": {
            inputElement = <textarea value={props.value} onChange={props.change} className={inputClasses.join(" ")} {...props.eleConfig} />
            break;
        }

        default: inputElement = <input value={props.value} className={inputClasses.join(" ")} />
    }
    
    return inputElement
}

export default input;