import React from "react";


class ColorRender extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="main-output" style={{backgroundColor: `${this.props.color}`}}>
                <h2>{this.props.name}</h2>
                <button onClick={()=> {
                this.props.handleClick()}} 
                >Change Color</button>
                </div>
            </div>
        )
    }
}

export default ColorRender;