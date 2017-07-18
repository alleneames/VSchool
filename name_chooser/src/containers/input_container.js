import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

import Input from "../components/input.js";

class InputContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            name1: "",
            name2: "",
            name3: ""
        };
        autoBind(this);
    }

    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    clearInputs() {
        for(key in this.state) {
            this.setState({
                [key]: ""
            })
        }
    }
    render() {
        return (
            <div>
                <Input clearInputs={this.clearInputs} handleClick={this.props.makeName} handleChange={this.handleChange} info={this.state} />
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);