import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement, multiplyBy5, sumOfDigits } from '../actions';

class Counter extends Component {
    constructor() { 
        super();
        this.state = {
            inputValue: ""
        }
    }
    
    incrementIfOdd = () => {
        // Extra: Implement an increment function that
        // only increments if the counter value is odd
        if(this.props.count % 2 !== 0) {
            this.props.dispatch(increment(this.getValidInputValue()));
        }
        this.resetInputValue();
    };

    incrementAsync = () => {
        // Extra: Implement an increment function that
        // increments after waiting for one second
        let tempInputValue = this.getValidInputValue();
        setTimeout(() => this.props.dispatch(increment(tempInputValue)), 1000);
        this.resetInputValue();
    };

    currentInputValue = (event) => {
        console.log("inputValue: ", event.target.value);
        this.setState({inputValue: event.target.value});
    }

    getValidInputValue = () => {
        let tempStr = this.state.inputValue;
        if(tempStr === "") {
            tempStr = "1";
        }
        return Number(tempStr);
    }

    onIncrement = () => {
        this.props.dispatch(increment(this.getValidInputValue()));
        this.resetInputValue();
    }

    onDecrement = () => {
        this.props.dispatch(decrement(this.getValidInputValue()));
        this.resetInputValue();
    }

    resetInputValue = () => {
        this.setState({inputValue: ""});
    }

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        return (
            <p>
                <br/>
                Result Value: {this.props.count}
                {" "}

                <button onClick={() => this.onIncrement() }>
                    +
                </button>
                {" "}
                <button onClick={() => this.onDecrement() }>
                    -
                </button>
                {" "}
                <button onClick={() => this.incrementIfOdd()}>
                    Increment if odd
                </button>
                {" "}
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
                <button onClick={() => this.props.dispatch(multiplyBy5())}>
                    MultiplyBy5
                </button>
                <button onClick={() => this.props.dispatch(sumOfDigits())}>
                    Sum of digits
                </button>
                <br/>
                <br/>
                Enter Value:  
                <input type="text" value={this.state.inputValue}
                    onChange={this.currentInputValue}/>
            </p>
        );
    }
}

// The mapStateToProps function specifies which portion of the 
// state tree this component needs to receive. In this case, 
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
    return {
        count: state
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps)(Counter);