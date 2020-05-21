import React from "react";
import classes from "./HiringForm.module.css";
import Header from "../../Header/Header";
import HiringQuestion from "../HiringQuestion/HiringQuestion";
import BigButton from "../../UI/Button/BigButton";

const hiringFrom = () => {
  const questions = [
    {
      question: "Do you have product specifications ready?",
      name: "specification",
      type: "radio",
      list: [
        {
          value: "rough idea",
          label: "I have a rough idea of what i want to build"
        },
        {
          value: "clear idea not specification",
          label:
            "I have a clear idea of what i want to build but no written specification and | or wireframes"
        },
        {
          value: "clear idea with specification",
          label: "I have a clear written specification and | or wireframes"
        }
      ]
    },

    {
      question: "How long do you need the design?",
      name: "desgignPeriod",
      type: "radio",
      list: [
        {
          value: "less than a week",
          label: "Less than 1 week"
        },
        {
          value: "1 - 4 week",
          label: "1 to 4 weeks"
        },
        {
          value: "1 - 3 months",
          label: "1 to 3 months"
        },
        {
          value: "3 - 6 month",
          label: "3 to 6 months"
        },
        {
          value: "i will decide",
          label: "I will decide"
        }
      ]
    },

    {
      question:
        "What level of time commitment will you like you require from the designers?",
      name: "commitment",
      type: "radio",
      list: [
        {
          value: "full time",
          label: "Full time"
        },
        {
          value: "part time",
          label: "Part time"
        },
        {
          value: "hourly",
          label: "Hourly"
        },
        {
          value: "i will decide",
          label: "I will decide"
        }
      ]
    },

    {
      question: "When do you need the design to start?",
      name: "startingTime",
      type: "radio",
      list: [
        {
          value: "immediately",
          label: "Immediately"
        },
        {
          value: "in 1 - 2 weeks",
          label: "In 1 to 2 weeks"
        },
        {
          value: "2 weeks plus",
          label: "More than 2 weeks from now"
        },
        {
          value: "i will decide later",
          label: "I will decide later"
        }
      ]
    },

    {
      question: "Are you open to working remote designer?",
      name: "remoteWork",
      type: "radio",
      list: [
        {
          value: "yes",
          label: "Yes"
        },
        {
          value: "no",
          label: "No"
        },
        {
          value: "i am not sure",
          label: "I am not sure"
        }
      ]
    },

    {
      question: "Tell us more about your project",
      name: "more",
      type: "textarea",
      list: [
        {
          value: "yes",
          label: "Yes"
        }
      ]
    }
  ];
  return (
    <div className={classes.Main}>
      <div className={classes.formWrapper}>
        <h1>Hiring form</h1>
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
          <BigButton selected={true}>Submit</BigButton>
        </form>
      </div>
    </div>
  );
};

export default hiringFrom;
