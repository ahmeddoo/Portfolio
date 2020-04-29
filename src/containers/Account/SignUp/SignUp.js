import React, { useReducer } from "react";
import SwitchEntry from "../Entry/SwitchEntry/SwitchEntry";
import EntryButton from "../../../components/UI/Button/EntryButton";
import Input from "../../../components/UI/Input/Input";

import * as actionTypes from "../actionTypes";

const controls = {
  fullname: {
    eleType: "input",
    eleConfig: {
      type: "text",
      placeholder: "Full Name",
      required: true
    },
    validation: {
      required: true,
      length: {min: 5},
      match: /(?:^[ a-zA-Z]{5,}$)/
    },
    valid: true,
    value: ""
  },
  email: {
    eleType: "input",
    eleConfig: {
      type: "email",
      placeholder: "email",
      required: true
    },
    validation: {
      required: true,
      match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    },
    valid: true,
    value: ""
  },
  password: {
    eleType: "input",
    eleConfig: {
      type: "password",
      placeholder: "Password",
      required: true
    },
    validation: {
      required: true,
      length: {min: 5}
    },
    valid: true,
    value: ""
  }
}

const signUpFormReducer = (state, action) => {
  switch(action.type) {
    case actionTypes.START_TYPING: return { ...state, [action.field]: {...state[action.field], value: action.value} };
    case actionTypes.CHECK_VALIDITY: return { ...state, [action.field]: {...state[action.field], valid: action.valid} };
    default: throw new Error("No command found");
  }
}

const SignUp = ( props ) => {
  const [signUpFormState, dispatch] = useReducer(signUpFormReducer, controls);

  // check validity
  const chectValidity = ( rules, value ) => {
    let isValid = true;
    if(rules.required) {
      isValid = value !== "" && isValid;
    }

    if(rules.length) {
      if(rules.length.min) {
        isValid = value.length >= rules.length.min && isValid;
      }
    }

    if(rules.match) {
      isValid = rules.match.test(value) && isValid;
    }
    return isValid;
  };

  // signup click handler
  const onSignUpHandler = ( event ) => {
    event.preventDefault();
    const signUpFormData = {
      fullname: signUpFormState.fullname.value,
      email: signUpFormState.email.value,
      password: signUpFormState.password.value
    };

    fetch("http://localhost:2020/auth/local/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signUpFormData)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
    .catch(error => console.log(error));

  }

  // two way binding...
  const onInputChangeHandler = ( event, field ) => {
    dispatch({type: actionTypes.START_TYPING, field, value: event.target.value});
    dispatch({type: actionTypes.CHECK_VALIDITY, field, valid: chectValidity(signUpFormState[field].validation, event.target.value)});
  }
  return (
    <React.Fragment>
      <h1>Sign up</h1>
      <SwitchEntry guest={props.guest} toggleAccount={props.toggleAccount} entry="Sign In"/>
      <form>
        {
          Object.keys(signUpFormState).map(field => {
            return <Input
              change={( event ) => onInputChangeHandler(event, field)}
              value={signUpFormState[field].value} 
              inValid={!signUpFormState[field].valid}
              key={field}
              eleConfig={signUpFormState[field].eleConfig} 
              eleType={signUpFormState[field].eleType}
            />
          })
        }
        <EntryButton sign={( event ) => onSignUpHandler( event )}> Sign Up </EntryButton>
      </form>
    </React.Fragment>
  );
}

export default SignUp;