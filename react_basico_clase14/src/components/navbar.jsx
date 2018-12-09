import React, { Component } from 'react';

//Stateless Functional Components
const Navbar = (props) => {
    return ( 
        <div>
            <nav className="navbar navbar-light bg-light">
                <h1 className="navbar-brand mb-0 h1">Contadores existentes: </h1>
                {props.contadoresExistentes}
            </nav>
            <br/>
            <nav className="navbar navbar-light bg-light">
            <h1 className="navbar-brand mb-0 h1">Contadores mayores a 0: </h1>
                {props.contadoresMayoresAZero}
            </nav>
        </div>
    );
}

// class Navbar extends Component {

//     render() { 
//         return ( 
//             <div>
//                 <nav className="navbar navbar-light bg-light">
//                     <h1 className="navbar-brand mb-0 h1">Contadores existentes: </h1>
//                     {this.props.contadoresExistentes}
//                 </nav>
//                 <br/>
//                 <nav className="navbar navbar-light bg-light">
//                 <h1 className="navbar-brand mb-0 h1">Contadores mayores a 0: </h1>
//                     {this.props.contadoresMayoresAZero}
//                 </nav>
//             </div>
//        );
//     }
// }
 
export default Navbar;