import React, {Component} from "react";
import Button from "./Button";
import CounterDisplay from "./CounterDisplay";
import Step from "./Step";

class Counter extends Component {


    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            counterStep: 5,
        }

        this.addStep = this.addStep.bind(this)
    }

    addCounter = () => {
        this.setState(prevState=>{
            return ({counterValue: prevState.counterValue + 1})
        })
    }

    setZeroOrReset = (reset) => {

        if (reset) {
            this.setState({counterValue: this.props.initValue});
        } else {
            this.setState({counterValue: 0})
        }
    }

    addStep = () => {
        this.setState(prevStep=> {
            return ({counterStep: prevStep.counterStep + 5})
        })
        }
    

    render() {
        
        return (
            <div className="counter">
                <CounterDisplay counterState={this.state.counterValue} />
                <Button addCounterMethod= {this.addCounter} zeroOrReset={this.setZeroOrReset} />
                <Step addStepMethod = {this.addStep} stepValue = {this.state.counterStep} />
                
            </div>
        )
    }
}

export default Counter