import React from "react";

class Main extends React.Component {
    render() {
        return(
            <div>
                        
                <h1>{this.props.counter}</h1>
                <button onClick={()=> {
                    this.props.handleClick(this.props.color);
                }} className="green btn btn-success">Click Me</button>
             </div>
                
        )
    }
}

export default Main;