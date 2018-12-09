import React, { Component } from 'react';

import Counter from './hijo';

class Counters extends Component {

    render() { 
        return (
            <div>
                {this.props.counters.map(counter => 
                    <Counter
                        key={counter.id}
                        counter = {counter}
                        onIncrement={this.props.onIncrement}
                        onDelete={this.props.onDelete}
                    >
                    <h4> Este es el contador {counter.id} </h4>
                    </Counter>
                )}
                <button
                    onClick={this.props.onReset} 
                    className="btn btn-lg btn-success"
                >
                Reset
                </button>
            </div>
         );
    }
}
 
export default Counters;