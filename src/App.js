import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Contact from './components/Contact';
import ContactList from './components/ContactList';
import axios from 'axios';



class App extends Component {
  state = {
    contacts: [],
  }

  componentDidMount = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const newContacts = response.data.map(c => {
          return {
            id: c.id,
            name: c.name
          };
        });

        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });

        this.setState(newState);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Your Contacts Manager</h1>
        </header>
        <br />
        <ContactList contacts={this.state.contacts} />

      </div>
    );
  }
}

export default App;
