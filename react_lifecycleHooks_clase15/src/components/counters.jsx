import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {

    // state = { 
    //     counters : [
    //         {id: 1, value: 5,},
    //         {id: 2, value: 0,},
    //         {id: 3, value: 10,},
    //         {id: 4, value: 7,},

    //     ]
    //  }

    //  handleDelete = (counterId) => {
    //      //console.log('Called Handle delete', counterId)
    //      const counters = this.state.counters.filter(c => c.id !== counterId)
    //      this.setState({counters : counters})

    //  }

    //  handleReset = () => {
    //     //console.log('Called Handle delete', counterId)
    //     const counters = this.state.counters.map(c => {
    //         c.value = 0;
    //         return c;
    //     })
    //     this.setState({counters})

    // }

    // handleIncrement = (counter) => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = {...counter};
    //     counters[index].value++;
    //     this.setState({counters})

    // }

    render() { 

        console.log('Counters Rendered')

        const {onReset, onIncrement, onDelete, counters} = this.props 

        return ( 
            <div>
                <h1 className="text-center">Contadores: </h1>
                <button 
                    //onClick={this.handleReset} 
                    //onClick={this.props.onReset} 
                    onClick={onReset} 
                    style={ { fontSize : 35 } } 
                    className="btn btn-success btn-sm"
                >
                    Reset
                </button> 
                {//this.state.counters.map(counter =>
                //this.props.counters.map(counter => 
                counters.map(counter => 
                    < Counter 
                        key={ counter.id } 
                        /*value={ counter.value }
                        id = {counter.id}*/
                        counter = {counter}
                        //onDelete = {this.handleDelete}
                        //onIncrement = {this.handleIncrement }
                        //onDelete = {this.props.onDelete}
                        //onIncrement = {this.props.onIncrement }
                        onDelete = {onDelete}
                        onIncrement = {this.props.onIncrement }
                        selected
                    >
                    <h4>Counter No: {counter.id }</h4>
                    </Counter>
                )}
            </div> 
        );
    }
}
 
export default Counters;