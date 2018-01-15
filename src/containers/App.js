import React, {Component} from 'react';
import styled from 'styled-components';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

const Div = styled.div`
  text-align: center;
`;

class App extends Component {
  constructor (props) {
    super (props);
    console.log ('App is inside thr constructor now!', props);
  }

  componentWillMount () {
    console.log ('App is inside the componentWillMount() now!');
  }

  componentDidMount () {
    console.log ('App is inside the componentDidMount() now!');
  }

  state = {
    persons: [
      {id: 0, name: 'Marussya', age: 66, hobbie: 'Skying'},
      {id: 1, name: 'Max', age: 29, hobbie: 'Racing'},
      {id: 2, name: 'Victor', age: 22, hobbie: ''},
      {id: 3, name: 'Bob', age: 19, hobbie: ''},
    ],
    otherState: 'some other state',
    showPersons: false,
  }

  deletePersonHandler = index => {
    //let persons = this.state.persons;
    // массив это ссылочный тип и поэтому работая с массивом persons мы изменяем сразу и this.state.persons
    // let persons = this.state.persons.slice();
    //Безопаснее создавать новый абсолютно массив хэлпером slice() без параметров
    let persons = [...this.state.persons];
    //или используя спред оператор
    persons.splice (index, 1);
    this.setState ({persons: persons});
    //всегда следует менять стэйт не напрямую а создавая копию, изменяя ее и потом this.setState({ someState: copy })
  }

  nameChangeHandler = (event, id) => {
    const personId = this.state.persons.findIndex (p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personId],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personId] = person;

    this.setState ({persons: persons});
  };

  togglePersonsHandler = () => {
    this.setState ({showPersons: !this.state.showPersons});
  };

  persons = () => {
    if (this.state.showPersons) {
      return (
        <Persons
          list={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    } else {
      return null;
    }
  };

  render () {
    console.log ('App is inside the render() now');
    return (
      <Div>
        <Cockpit
          appTitle={this.props.title}
          length={this.state.persons.length}
          showPersons={this.state.showPersons}
          click={this.togglePersonsHandler}
        />

        {this.persons ()}
      </Div>
    );
  }
}

export default App;
