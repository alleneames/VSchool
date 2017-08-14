import React from "react";
import autoBind from "react-autobind";
import UserQue from "../components/user-que.js";

import { connect } from "react-redux";
import * as actionCreators from "../actions";

class UserContainer extends React.Component {
    componentDidUpdate() {
        if(typeof this.props.userQue !== "null" && this.props.priv === "admin") {
            this.props.loadUserQue(this.props.token);
        }
    }
    render() {
        return(
            <UserQue priv={this.props.priv} token={this.props.token}  />
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
}

export default UserContainer;