import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('Persons is inside thr constructor now!', props);
  }

  componentWillMount() {
    console.log('Persons is inside the componentWillMount() now!');
  }

  componentDidMount() {
    console.log('Persons is inside the componentDidMount() now!');
  }

  render() {
    console.log('Persons is inside the render() now!');
    return this.props.list.map((person, index) => {
      const personHobbie = person.hobbie ? ('My Hobbies:').concat(person.hobbie) : null;

      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
        >
          {personHobbie}
        </Person>
      );
    });
  }
}

export default Persons;
