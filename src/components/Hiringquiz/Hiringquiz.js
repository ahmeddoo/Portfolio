import React from "react";
import CardFlexRow from "../UI/Cards/CardFlexRow/CardFlexRow";
import classes from "./Hiringquiz.module.css";
import BigButton from "../UI/Button/BigButton";

const Hiringquiz = () => {
  return (
    <CardFlexRow>
      <div className={classes.quiz}>
        <p>
          Thanks for your interest in hiring <b>dootech</b>! Before we get
          started, we will like to ask a few questions to better understand your
          business needs.
        </p>
        <form>
          <h3>What type of project are you hiring for?</h3>
          <div>
            <input type="radio" name="situation" />
            <label>New Project</label>
          </div>
          <div>
            <input type="radio" name="situation" />
            <label>Existing project that needs more resources</label>
          </div>
          <div>
            <input type="radio" name="situation" />
            <label>Ongoing assistance or consultation</label>
          </div>
          <div>
            <input type="radio" name="situation" />
            <label>
              None of the above, i am just looking more about <b>dootech</b>
            </label>
          </div>

          <BigButton style={{ float: "right" }} selected={true}>
            Get started <span className={classes.direction}>></span>
          </BigButton>
        </form>
      </div>
      <div className={classes.photo}></div>
    </CardFlexRow>
  );
};

export default Hiringquiz;
