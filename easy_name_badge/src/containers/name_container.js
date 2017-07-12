import React from "react";
import autoBind from "react-autobind";

//import component
import NameOutput from "../components/name_output.js";

class NameContainer extends React.Component {
    constructor() {
        super();

        this.state= {
            firstname: "",
            lastname: "",
            input: {}
        };
    autoBind(this);
    }
    handleInput(key, event) {
        let input = {
            ...this.state.input,
        };
        input[key] = event.target.value
        this.setState({
            ...this.state,
            input: input
        })
    }

    handleSubmit() {
        this.setState({
            ...this.state,
            firstname: this.state.input.firstname,
            lastname: this.state.input.lastname
        });
    }
    render() {
        return (
            <div>
                <NameOutput handleSubmit={this.handleSubmit} handleInput={this.handleInput} input={this.state.input} firstname={this.state.firstname} lastname={this.state.lastname} />
            </div>
        )
    }
}

export default NameContainer;