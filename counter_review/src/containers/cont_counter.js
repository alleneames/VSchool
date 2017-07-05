import React from "react";
import autoBind from "react-autobind";


import Counter from "../components/counter.js";

class ContCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 10,
            style: {
                color: "red",
                textAlign: "center"
            }
        };  
        
        autoBind(this)
    }
    
    up() {
        this.setState({
            counter: this.state.counter + 1,
            style: {
                ...this.state.style,
                backgroundColor: "blue"
                
            }
        });
    }
    
    down() {
        this.setState({
            counter: this.state.counter - 1,
            style: {
                ...this.state.style,
                backgroundColor: "yellow"
                
            }
        });
    }
    render() {
        return(
            <Counter style= {this.state.style} counter={this.state.counter} handleUp={this.up} handleDown={this.down} />
        )
        
            
    }
}

export default ContCounter;