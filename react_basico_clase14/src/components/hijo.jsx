import React, { Component } from 'react'

class Counter extends Component{

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    }

    getBagdeClass(){
       let badgeClass = "badge badge-";
       badgeClass += (this.props.counter.value === 0) ? "danger" : "warning";
       return badgeClass;

    }

    getFormatCount(){
        const { value } = this.props.counter;
        return this.props.counter.value === 0 ? <h1>Zero</h1> : value
    }

    render(){

        let badgeClass = this.getBagdeClass()

        return(
            <React.Fragment>
                {this.props.children}
                <span style={this.styles} className={badgeClass} > {this.getFormatCount()} </span> 
                <button 
                    onClick = {
                        () => {
                            this.props.onIncrement(this.props.counter)
                        }
                    }
                    style={this.styles} 
                    className="btn btn-primary btn-lg"
                > 
                    Incrementa 
                </button>
                <button
                    onClick = {() => {
                            this.props.onDelete(this.props.counter.id)
                        }
                    }
                >
                Delete
                </button>
            </React.Fragment>
        );
    }

}

export default Counter; //Exportar para usarlo el algun otro lado