import React, { Component } from 'react';

//Stateless Functional Component


//const Navbar = (props) => {
const Navbar = ({totalCounters, greaterZeroCounters}) => {

    console.log('Navbar: Rendered')

    return ( 
        <nav className="navbar navbar-light bg-light">
            <h1 className="navbar-brand mb-0 h1">Total Existing Counters:</h1>
            <span className="badge  badge-pill badge-success">
                {/*props.totalCounters*/}
                {totalCounters}
            </span>
            <h1 className="navbar-brand mb-0 h1">Counters greater than Zero:</h1>
            <span className="badge  badge-pill badge-primary">
                {/*props.greaterZeroCounters*/}
                {greaterZeroCounters}
            </span>
        </nav>
     );
}

// class Navbar extends Component {
//     render() { 
//         return ( 
//             <nav className="navbar navbar-light bg-light">
//                 <h1 className="navbar-brand mb-0 h1">Total Existing Counters:</h1>
//                 <span className="badge  badge-pill badge-success">
//                     {this.props.totalCounters}
//                 </span>
//                 <h1 className="navbar-brand mb-0 h1">Counters greater than Zero:</h1>
//                 <span className="badge  badge-pill badge-primary">
//                     {this.props.greaterZeroCounters}
//                 </span>
//             </nav>
//          );
//     }
// }
 
export default Navbar;