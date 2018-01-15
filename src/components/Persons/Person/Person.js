import React, { Component } from 'react';
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

class Person extends Component {
  render() {
    return (
      <Div>
        <p onClick={this.props.click}>I'm { this.props.name }! And I'm { this.props.age } years old!</p>
        <p>{ this.props.children }</p>
        <input onChange={this.props.changed} value={this.props.name}/>
      </Div>    
    );
  }
} 


export default Person;
