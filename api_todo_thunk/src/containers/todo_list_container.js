import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";


import TodoListComponent from "../components/todo_list_component.js";


class TodoListContainer extends React.Component {
    componentWillMount() {
        this.props.loadData();
    }
    render() {
        return (
        <TodoListComponent handleUpdate={this.props.updateData} handleRemove={this.props.removeData} items={this.props.items} />
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchersToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(TodoListContainer);