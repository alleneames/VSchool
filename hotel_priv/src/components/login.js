import React from "react";

class Login extends React.Component {
    render() {
        return(
            <form onSubmit={(event)=> {
                event.preventDefault();
                this.props.handleSubmit(this.props.input.username, this.props.input.password);
            }}>
                <input value={this.props.input.username} onChange={(event)=> {
                    this.props.handleChange("username", event);
                }} type="text" placeholder="username" />
                <input value={this.props.input.password} onChange={(event)=> {
                    this.props.handleChange("password", event);
                }} type="password" placeholder="password" /> 
                <button type="submit" >Login</button>
            </form>
        )
    }
}

export default Login;