import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PersonList from './components/PersonList'
import CreatePerson from './components/CreatePerson'

class App extends Component {
  render() {
    return (
      <div>
        <CreatePerson />
        <PersonList />
      </div>
    );
  }
}

export default App;
