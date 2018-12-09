import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar';
import Counters from './components/padre'

class App extends Component {

  state = { 
    counters : [
        {id : 1, value : 0},
        {id : 2, value : 1},
        {id : 3, value : 5},
        {id : 4, value : 100},
    ]
 }

 handleDelete = (counterId) => {
  const counters = this.state.counters.filter(c => c.id !== counterId)
  this.setState({counters})
}

handleIncrement = (counter) => {
  const counters = [...this.state.counters]; //Copia counters
  const index = counters.indexOf(counter); //Busco index de el objeto que recibi
  counter[index] = {...counter}; //Genero un copia de el objetoc en cierto index
  counters[index].value++; //Aumento el valor
  this.setState({counters})   
}

handleReset = () => {
  const counters = this.state.counters.map(c => {
      c.value = 0;
      return c
  })
  this.setState({counters})
}

  render() {
    return (
      <React.Fragment>
        <Navbar
          contadoresExistentes = {this.state.counters.length}
          contadoresMayoresAZero = {this.state.counters.filter( c => c.value > 0).length}
        ></Navbar>
        <Counters
          counters = {this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        >
        </Counters>
      </React.Fragment>
    );
  }
}

export default App;
