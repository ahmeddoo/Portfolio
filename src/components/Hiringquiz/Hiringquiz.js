import React from "react";
import CardFlexRow from "../UI/Cards/CardFlexRow/CardFlexRow";
import classes from "./Hiringquiz.module.css";
import BigButton from "../UI/Button/BigButton";
import HiringQuestion from "./HiringQuestion/HiringQuestion";

const Hiringquiz = () => {
  const questions = [
    {
      question: "What type of project are you hiring for?",
      name: "situation",
      type: "radio",
      list: [
        {
          value: "New Project",
          label: "New Project"
        },
        {
          value: "Existing project that needs more resources",
          label: "Existing project that needs more resources"
        },
        {
          value: "Ongoing assistance or consultation",
          label: "Ongoing assistance or consultation"
        },
        {
          value: "None of the above",
          label: "None of the above, i am just looking more about dootech"
        }
      ]
    }
  ];
  return (
    <CardFlexRow>
      <div className={classes.quiz}>
        <p>
          Thanks for your interest in hiring <b>dootech</b>! Before we get
          started, we will like to ask a few questions to better understand your
          business needs.
        </p>
        <form>
          {questions.map((question, index) => (
            <HiringQuestion
              key={index}
              question={question.question}
              name={question.name}
              list={question.list}
              type={question.type}
            />
          ))}

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
