import React from "react";

class NameOutput extends React.Component {
    render() {
        return(
            <div>
                <input onChange={(event)=> {
                    this.props.handleInput("firstname", event);
                }} value={this.props.input.firstname} placeholder="First name" />
                <input onChange={(event)=> {
                    this.props.handleInput("lastname", event)
                }} value={this.props.input.lastname} placeholder="Last name" />
                <button onClick={()=> {
                    this.props.handleSubmit()
                }} >Submit</button>
                <h1>{this.props.firstname}</h1>
                <h1>{this.props.lastname} </h1>
            </div>
        )
    }
}

export default NameOutput;