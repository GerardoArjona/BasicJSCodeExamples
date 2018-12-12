import React, { Component } from 'react';

class Counter extends Component {

    //Any data that this component needs
    // state={
    //     //value: this.props.value,
    //     value : this.props.counter.value,
    //     imageUrl: 'https://picsum.photos/200',
    //     tags: ['tga1', 'tag2', 'tag3']
    // }

    componentDidUpdate(oldProps, oldState){ //Updating Phase
        console.log(oldProps);
        console.log(oldState)
        if(oldProps.value !== this.props.counter.value){
            //Puede ir una request a una API
            console.log("El valor anterior es diferente al nuevo")
        }

    }

    componentWillUnmount(){ //Unmounting Phase

        console.log('Counter --->> Unmounted')

    }

    styles={
        fontSize: 10,
        fontWeight: "bold"
    }

    // constructor(){
    //     super();
    //     this.handelIncrement = this.handelIncrement.bind(this);
    // }


    //Method 1 for conditional rendering
    renderTags(){
        if(this.state.tags.length === 0){
            return <p>There are no tags</p>
        }
        return (
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
            </ul>
        );

    }

    // handelIncrement = () => {
    //     this.setState({
    //         value: this.state.value +1
    //     });
    // }

    // handelIncrement (product) {
    //     console.log(product)
    //     this.setState({
    //         count: this.state.count +1
    //     });
    // }

    render() { 

        console.log('Counter: Rendered')

        //console.log('props', this.props)

        let classes = this.getBadgeClasses();

        return (
            //<React.Fragment> 
            <div>
                <div className="row">
                    <div className="col-12 text-center">
                            {/*<img src={this.state.imageUrl} alt=""/>*/}
                            {this.props.children}
                            <span style={this.styles} className={classes} >{this.formatCount()}</span> 
                            <button 
                                //onClick={() => {this.handelIncrement({id : 1})}} 
                                onClick={() => this.props.onIncrement(this.props.counter)}
                                style={ { fontSize : 35 } } 
                                className="btn btn-primary btn-sm"
                            >
                                Increment
                            </button> 
                            <button 
                                //onClick={() => this.props.onDelete(this.props.id)}
                                onClick={() => this.props.onDelete(this.props.counter.id)} 
                                style={ { fontSize : 35 } } 
                                className="btn btn-danger btn-sm"
                            >
                                Delete
                            </button> 
                            {/*
                                {this.state.tags.length === 0 && "There are no tags, create a new tag"}
                                {this.state.tags.length !== 0 && <ul> {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)} </ul> }
                                {this.renderTags()}
                            */}
                    </div>
                </div>
            </div>
            //</React.Fragment>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        // classes += (this.state.value === 0) ? "primary" : "warning"
        classes += (this.props.counter.value === 0) ? "primary" : "warning"
        return classes
    }

    formatCount(){
        // const { value } = this.state;
        const { value } = this.props.counter;
        return value === 0 ? <h1>Zero</h1> : value;
    }
}
 
export default Counter;