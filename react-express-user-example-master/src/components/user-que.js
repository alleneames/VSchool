import React from "react";

class UserQue extends React.Component {
    render() {
        return(
            <div style={{display: this.props.priv === "admin" ? "inherit": "none"}}>
            <p>user queue will go here</p>
            </div>
        )
    }
}

export default UserQue;