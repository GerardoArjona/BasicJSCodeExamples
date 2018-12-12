import React, { Component } from 'react';
import axios from 'axios'
import { toASCII } from 'punycode';

class CreatePerson extends Component {
    state = { 
        toSend : {
            name : '',
            last_name : '',
            nacionalidad : 'MX',
            biography : '',
            gender : '',
            age : 0
        },
        rec : {
            id : '',
            name : '',
            last_name : '',
            nacionalidad : 'MX',
            biography : '',
            gender : '',
            age : 0
        }
     }

     handleChange = event => {
         const toSend = this.state.toSend
         toSend[event.target.name] = event.target.value
         this.setState({toSend})
        //  console.log(event.target.value)
        //console.log(this.state)
     }

     handelSubmit = event => {

        console.log(this.state.toSend)

         event.preventDefault()

         const person = {
            name : this.state.toSend.name,
            last_name : this.state.toSend.last_name,
            nacionalidad : this.state.toSend.nacionalidad,
            biography : this.state.toSend.biography,
            gender : this.state.toSend.gender,
            age : this.state.toSend.age
         }

         axios.post(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`, person)
         .then(res => {
             this.setState({rec : res.data})
         }).catch(err => {
             console.log(err)
         })
     }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handelSubmit}>
                    <label htmlFor="">
                        Nombre:
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="">
                        Apellidos:
                        <input type="text" name="last_name" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="">
                        Biografia:
                        <input type="text" name="biography" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="">
                        Genero:
                        <input type="text" name="gender" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="">
                        Edad:
                        <input type="text" name="age" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
                <h2>{this.state.rec.id}</h2>
                <h2>{this.state.rec.name}</h2>
                <h2>{this.state.rec.biography}</h2>
            </div>
        );
    }
}
 
export default CreatePerson;