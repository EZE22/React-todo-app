import React, {Component} from "react"

//Child component
class CounterButton extends Component{
    render() {
        return(
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button> 
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>  
            </div>
        );
    }
}

export default CounterButton