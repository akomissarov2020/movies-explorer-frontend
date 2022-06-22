import React from 'react';
import { Link } from 'react-router-dom';

function Form(props) {
  return (
    <form className="Form" name={props.name} onSubmit={props.onSubmit}>
    <h2 className="Form__title">{props.title}</h2>
    {props.children}
    <button type="submit" className="Form__save-button">
        {props.isLoading ? props.loadingText : props.buttonText}
    </button>
    </form>
  );
}

export default Form;

