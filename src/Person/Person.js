import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>I'm { props.name }! And I'm { props.age } years old!</p>
      <p>{ props.children }</p>
    </div>    
  );
};

// const myAge = () => {
//   return Math.ceil(Math.random() * 66);
// }

export default person;
