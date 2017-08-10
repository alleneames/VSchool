import React from "react";

class Form extends React.Component {
    render() {
        return(
            <div>
            <input value={this.props.input.username} onChange={(event)=> {
                this.props.handleChange("username", event);
            }} placeholder="username" />
            <textarea value={this.props.input.message} onChange={(event)=> {
                this.props.handleChange("message", event);
            }}  placeholder="message"></textarea>
            <button>Send</button>
            </div>


        )
    }
}

export default Form;