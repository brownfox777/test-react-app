import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render() {
    return this.props.list.map((person, index) => {

      const personHobbie = person.hobbie 
        ? 'My Hobbies:' + person.hobbie 
        : null;
  
      return (
        <Person 
          key={person.id} 
          name={person.name} 
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}>
          {personHobbie}
        </Person>);
    });
  }
}

export default Persons;