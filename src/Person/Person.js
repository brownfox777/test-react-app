import React from 'react';
import styled from 'styled-components';
//import './Person.css';

const Div = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 4px 5px #ccc;
  padding: 16px;
  text-align: center;
  background-color: #eee;

  @media (min-width: 500px) {
    background: palevioletred;
    width: 450px;
  }
`;

const Person = (props) => {

  return (
    <Div>
      <p onClick={props.click}>I'm { props.name }! And I'm { props.age } years old!</p>
      <p>{ props.children }</p>
      <input onChange={props.changed} value={props.name}/>
    </Div>    
  );
};

// const myAge = () => {
//   return Math.ceil(Math.random() * 66);
// }

export default Person;
