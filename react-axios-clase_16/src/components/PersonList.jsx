import React, { Component } from 'react';
import axios from 'axios'

class PersonList extends Component {
    state = { 
        persons : []
     }

    componentDidMount(){
        axios.get(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`)
            .then(res => {
                console.log(res.data)
                this.setState({persons : res.data})
            })
    }

    handleDelete(id){
        axios.delete(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}`)
            .then(res => {
                axios.get(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`)
                .then(res => {
                    console.log(res.data)
                    this.setState({persons : res.data})
                })
            })
    }



    render() { 
        return ( 
            <React.Fragment>
            <ul>
                {this.state.persons.map(person => 
                    <li key={person.id}>
                        {person.name} 
                        <button
                        onClick={()=>this.handleDelete(person.id)}
                        >   
                            Borrar
                        </button>
                    </li>)}
            </ul>
            </React.Fragment>
        );
    }
}
 
export default PersonList;