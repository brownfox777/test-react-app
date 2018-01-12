import React, { Component } from 'react';
import styled from 'styled-components';
import Person from './Person/Person';

const Div = styled.div`
  text-align: center;
`;

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

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Marussya', age: 66, hobbie: 'Skying' },
      { id: 0, name: 'Max', age: 29, hobbie: 'Racing' },
      { id: 2, name: 'Victor', age: 22, hobbie: '' }
    ],
    otherState: 'some other state',
    showPersons: false,
  };

  deletePersonHandler = (index) => {
    //let persons = this.state.persons; 
    // массив это ссылочный тип и поэтому работая с массивом persons мы изменяем сразу и this.state.persons
    // let persons = this.state.persons.slice(); 
    //Безопаснее создавать новый абсолютно массив хэлпером slice() без параметров
    let persons = [...this.state.persons];
    //или используя спред оператор
    persons.splice(index, 1);
    this.setState({ persons: persons });
    //всегда следует менять стэйт не напрямую а создавая копию, изменяя ее и потом this.setState({ someState: copy })
  };

  nameChangeHandler = (event, id) => {

    const personId = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personId]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personId] = person;

    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  listPersons = () => {
    const persons = this.state.persons || [];
    return persons.map((person, index) => {
    return (
      <Person 
        key={person.id} 
        name={person.name} 
        age={person.age}
        click={() => this.deletePersonHandler(index)}
        changed={(event) => this.nameChangeHandler(event, person.id)}>
        My Hobbies: {person.hobbie}
      </Person>)
    });
  };

  render() {

    let persons = this.state.showPersons 
      ? this.listPersons() 
      : null;
    
    return (
      <Div>
        
        <h1>Hi, it's test-react-app</h1>
        <P listSize={this.state.persons.length}>This is really working!</P>
        
        <Button primary={this.state.showPersons}
          key='1'
          //style={this.state.style}
          onClick={this.togglePersonsHandler}
          >Toggle Persons
        </Button>
        
        {persons}
      </Div>
      );
  }
}

export default App;
