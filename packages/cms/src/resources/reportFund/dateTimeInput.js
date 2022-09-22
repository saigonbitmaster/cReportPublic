// in LatLongInput.js
import { Field } from 'redux-form';
import React, { Component } from 'react';

const DateTimeInput = (props) =>(
    <div >  
        <label>{props.label} </label>
        <Field  name={props.source}  component="input" type="datetime-local" placeholder={props.label}/>
      
    </div>
);
export default DateTimeInput;