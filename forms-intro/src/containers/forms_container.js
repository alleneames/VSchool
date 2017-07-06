import React from "react";

import Forms from "../components/forms.js"
import autoBind from "react-autobind";

class FormsContainer extends React.Component {
    constructor() {
        super();
        
        this.state = {
            names: ["Jordan", "Mike", "Mike"],
            nameValue: ""
        }
    autoBind(this);
        
    }
    
    input(event) {
        this.setState({
            ...this.state,
            nameValue: event.target.value
        });
    }
    
    click() {
        this.setState({
            ...this.state,
            names: [...this.state.names, this.state.nameValue],
            nameValue: ""
        });
    }
    remove(index) {
        let oldNames = [...this.state.names];
        oldNames.splice(index, 1);
        this.setState({
            ...this.state,
            names: oldNames
        })
    }
    
    render() {
        return (
        <div className="container-fluid" >
           <div className="row">
                <Forms brand="Greatest People Alive" 
                names={this.state.names}
                handleClick={this.click}
                nameValue={this.state.nameValue}
                handleInput={this.input}
                handleRemove={this.remove}
                />
            </div>
        </div>
        )
    }
}

export default FormsContainer;