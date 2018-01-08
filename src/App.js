import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 0, name: 'Max', age: 29, hobbie: 'Racing' },
      { id: 1, name: 'Marussya', age: 66, hobbie: 'Skying' },
      { id: 2, name: 'Victor', age: 22, hobbie: '' }
    ],
    otherState: 'some other state'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { id: 0, name: 'Max', age: 29, hobbie: 'Racing' },
        { id: 1, name: 'Masha', age: 222, hobbie: 'Skying' },
        { id: 2, name: 'Bob', age: 22, hobbie: 'Drinking' }
      ]
    })
  }

  listPersons = () => {
    const persons = this.state.persons || [];
    return persons.map((person) => {
    return (<Person key={person.id} name={person.name} age={person.age}>My Hobbies: {person.hobbie}</Person>)
    })
  }

  render = () => {
    return (
      <div className="App">
        <h1>Hi, it's test-react-app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        { this.listPersons() }
      </div>
      );
  }
}

export default App;
