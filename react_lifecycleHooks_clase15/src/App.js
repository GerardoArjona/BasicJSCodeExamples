import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar'
import Counters from './components/counters'

class App extends Component {

  state = { 
    counters : [
        {id: 1, value: 5,},
        {id: 2, value: 0,},
        {id: 3, value: 10,},
        {id: 4, value: 7,},

    ]
 }

 constructor(props){ //Mounting Phase
   super(props);
   console.log("App -> Constructor")
 }

 componentDidMount(){ //Mounting Phase
  console.log("App -> Component did mount") //Used for AJAX call (Request a API)
 }

 handleDelete = (counterId) => {
     //console.log('Called Handle delete', counterId)
     const counters = this.state.counters.filter(c => c.id !== counterId)
     this.setState({counters : counters})

 }

 handleReset = () => {
    //console.log('Called Handle delete', counterId)
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    })
    this.setState({counters})

}

handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters})

}

  render() { //Mouting Phase
    console.log("App -> Render")
    return (
      <React.Fragment>
        <Navbar 
          totalCounters = {this.state.counters.length}
          greaterZeroCounters = {this.state.counters.filter(c => c.value > 0 ).length}
        />
        <main className="container">
          <Counters
            counters = {this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
