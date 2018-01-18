import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import './Person.css';

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

class Person extends PureComponent {
  constructor(props) {
    super(props);
    console.log('Person is inside thr constructor now!', props);
  }

  componentWillMount() {
    console.log('Person is inside the componentWillMount() now!');
  }

  componentDidMount() {
    console.log('Person is inside the componentDidMount() now!');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Person.js] Inside componentWillReceiveProps!', nextProps);
  }


  render() {
    console.log('Person is inside the render() now!');
    return (
      <Div>
        <p onClick={this.props.click}>
          I'm {this.props.name}! And I'm {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input onChange={this.props.changed} value={this.props.name} />
      </Div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;
