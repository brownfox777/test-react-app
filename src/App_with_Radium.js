import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Marussya', age: 66, hobbie: 'Skying' },
      { id: 0, name: 'Max', age: 29, hobbie: 'Racing' },
      { id: 2, name: 'Victor', age: 22, hobbie: '' }
    ],
    otherState: 'some other state',
    showPersons: false,

    style: {
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      display: 'block',
      margin: '16px auto',
      backgroundColor: 'green',
      color: 'white',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
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
    const style = {...this.state.style};
    
    if (!this.state.showPersons) {
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      } 
    } else {
      style.backgroundColor = 'green';
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    this.setState({ style: style });
  };

  listPersons = () => {
    const persons = this.state.persons || [];
    return persons.map((person, index) => {
    return (
      <Person 
      key={person.id} 
      name={person.name} 
      age={person.age}
      // click={this.switchNameHandler.bind(this, 'MaxMax')}
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

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    };
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    };
    
    return (
      <StyleRoot>
        <div className="App">
        
        <h1>Hi, it's test-react-app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        
        <button
        key='1'
        style={this.state.style}
        onClick={this.togglePersonsHandler}
        >Toggle Persons
        </button>
        
        {persons}
        
        </div>
      </StyleRoot>
      );
  }
}

export default Radium(App);
