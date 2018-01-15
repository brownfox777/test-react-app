import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  color: ${props => props.listSize <= 2 ? '#9966ff' : 'black'};
  font-weight: ${props => props.listSize <= 1 ? 'bold' : 'normal'};
`;

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  border: ${props => props.primary ? '#9966ff' : 'palevioletred'};
  border: 1px solid;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: ${props => props.primary ? '#9966ff' : 'white'};
    color: ${props => props.primary ? 'white' : '#9966ff'};
    border: ${props => props.primary ? 'white' : '#9966ff'};  
    border: 1px solid;
    }
`;

const Cockpit = (props) => {
  return (
    <div>
      <h1>Hi, it's test-react-app</h1>
      <P listSize={props.length}>This is really working!</P>        
      <Button primary={props.showPersons}
        onClick={props.click}>
        Toggle Persons
      </Button>
    </div>        
  );
};

export default Cockpit;