import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
  return props.list.map((person, index) => {

    const personHobbie = person.hobbie 
      ? 'My Hobbies:' + person.hobbie 
      : null;

    return (
      <Person 
        key={person.id} 
        name={person.name} 
        age={person.age}
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event, person.id)}>
        {personHobbie}
      </Person>);
  });
};

export default Persons;