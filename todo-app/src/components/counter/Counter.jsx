import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Counter.css';
import CounterButton from "./CounterButton"

//Parent component 
class Counter extends Component{
    constructor(){
        super(); 
        this.state= {
            counter : 0 
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(by) {
        //console.log(`increment from parent - ${by}`); 
        this.setState(
            (prevState) => { //idle function 
            return {counter: prevState.counter + by}
            }
        ); 
    }
    decrement(by){
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        )
    }

    reset(){
        this.setState({counter: 0})
    }

    render() {
        return (
          <div className="counter">
           <CounterButton by={100} incrementMethod={this.increment} decrementMethod={this.decrement}/>
           <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
           <CounterButton by={2} incrementMethod={this.increment} decrementMethod={this.decrement}/>
           <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
           <span className="count">{this.state.counter}</span> 
           <div><button className="reset" onClick={this.reset}>Reset</button></div>
          </div>
        );
    }   
}

//setting default props 
CounterButton.defaultProps = {
    by : 1
}

//type check 
CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter; 