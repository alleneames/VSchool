import React from "react";


import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import * as actionCreators from "../actions/";

import Output from "../components/output.js";

class OutputContainer extends React.Component {
    render() {
        return (
            <div>
                <Output name1={this.props.name1} name2={this.props.name2} name3={this.props.name3} />
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

export default connect(mapStateToProps, mapDispatchToProps)(OutputContainer);