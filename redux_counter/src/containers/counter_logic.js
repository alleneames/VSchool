import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";

//import components
import Counter from "../components/counter.js";


class CounterLogic extends React.Component {
    render() {
        return (
            <div>
                <Counter handleAdd={this.props.makeAddAction} handleSub={this.props.makeSubAction} counter={this.props.counter}/>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return state;
    }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (CounterLogic);