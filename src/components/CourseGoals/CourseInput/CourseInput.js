import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isvalid ,setisvalid]=useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.length>0){

      setisvalid(true)
      }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setisvalid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control, ${!isvalid? "invalid":" "}`} >
        <label style={{color:!isvalid?"red":"black"}}>Course Goal</label>
        <input type="text"  style={{borderColor:!isvalid?"red":"black"}} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" isvalid={!isvalid} >Add Goal</Button> */}
      <div className={`form-control ${!isvalid ? "invalid" :" "}`} >
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit"isvalid={isvalid}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
