import React from 'react'
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const TaskInput = (props) => {
    const navigate=useNavigate();
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);
  
    const goalInputChangeHandler = (event) => {
      setEnteredValue(event.target.value);
    };
  
    const formHandler = (event) => {
      
      if (enteredValue.trim().length === 0) {
        setIsValid(false);
        return;
      }
      props.onAddGoal(enteredValue);
      console.log("Adi");
       props.onCancel();
      console.log("Aditya");
    };
  
    return (
      <form >
        <div className="input_element">
          <label style={{ color: isValid ? "black" : "red" }}>Course Goal  :</label>
          <input className='input_containers'
            type="text"
            style=
            {{ borderColor:isValid?'black':'blue',
               background: isValid?'transparent':'red'
            }}
  
            onChange={goalInputChangeHandler}
          />
        </div>
        <button className='input_container' onClick={formHandler} type="submit">Add Goal</button>
      </form>
    );
}

export default TaskInput
