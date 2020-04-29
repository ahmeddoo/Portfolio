import React from "react";
import reactb from "../../../assets/images/reactb.png";
import BigButton from "../../UI/Button/BigButton";
import classes from './WeDo.module.css';

const whatWeDo = (  ) => {
    return (
        <div>
            <img src={reactb} alt="reactb" />
            <p>
                <span className={classes.outline}>Responsive web design (RWD)</span> is an
                approach to web design that makes web pages render well on a variety
                of devices and window or screen sizes. Recent work also considers
                the viewer proximity as part of the viewing context as an extension
                for RWD. Content, design and performance are necessary across all
                devices to ensure usability and satisfaction.
            </p>
            <BigButton> Learn More </BigButton>
        </div>
    )
}

export default whatWeDo;