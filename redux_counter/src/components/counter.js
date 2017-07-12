import React from "react";

class Counter extends React.Component {
    render() {
        return(
            <div className="counter">
                <h1>Redux Counter</h1>
                <h2>{this.props.counter} </h2>
                <button onClick={this.props.handleAdd} className="button">Up</button>
                <button onClick={this.props.handleSub} className="button">Down</button>
            </div>
        )
    }
}

export default Counter;