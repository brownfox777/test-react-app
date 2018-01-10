import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm { props.name }! And I'm { props.age } years old!</p>
      <p>{ props.children }</p>
      <input onChange={props.changed} value={props.name}/>
    </div>    
  );
};

// const myAge = () => {
//   return Math.ceil(Math.random() * 66);
// }

export default person;
