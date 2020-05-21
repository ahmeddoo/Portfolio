import React from "react";
import classes from "./HiringQuestion.module.css";
import RadioButton from "../../UI/Input/RadioButton";

const hiringQuestion = props => {
  let content;
  switch (props.type) {
    case "radio":
      content = props.list.map(radio => (
        <RadioButton
          key={radio.value}
          value={radio.value}
          name={props.name}
          label={radio.label}
        />
      ));
      break;
    case "textarea":
      content = <textarea className={classes.textArea}></textarea>;
  }
  return (
    <div className={classes.Question}>
      <h4>{props.question}</h4>
      {content}
    </div>
  );
};

export default hiringQuestion;
