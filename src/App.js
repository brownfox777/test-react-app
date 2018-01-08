import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 29, hobbie: 'Racing' },
      { name: 'Marussya', age: 66, hobbie: 'Skying' },
      { name: 'Victor', age: 22, hobbie: '' }
    ],
    otherState: 'some other state'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Max', age: 29, hobbie: 'Racing' },
        { name: 'Masha', age: 222, hobbie: 'Skying' },
        { name: 'Bob', age: 22, hobbie: 'Drinking' }
      ]
    })
  }

  render = () => {
    return (
      <div className="App">
        <h1>Hi, it's test-react-app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobbie is: {this.state.persons[0].hobbie}</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbie is: {this.state.persons[1].hobbie}</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbie is: {this.state.persons[2].hobbie}</Person>
      </div>
      );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, it\'s test-react-app'))
  }
}

export default App;
