import React from "react";
import autoBind from "react-autobind";


import Yoda from "../components/yoda.js";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/"

class YodaContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ""
        };
        autoBind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    render() {
        return(
            <div>
                <Yoda input={this.state.input} text={this.props.text} handleChange={this.handleChange} handleClick={this.props.convertText} />

            </div>

        )
    }
}

const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchersToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(YodaContainer);