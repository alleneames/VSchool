import React from "react";
import autoBind from "react-autobind";

import Main from "../components/mighty-clicker.js";

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 0,
            blue: 0
        };
        autoBind(this);
    }
    click(color) {
        if(color == "blue") {
            this.setState({
                ...this.state,
                red: this.state.red - 1,
                blue: this.state.blue + 1
            });
        } else {
            this.setState ({
                ...this.state,
                red: this.state.red + 1,
                blue: this.state.blue - 1
            });
        }
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <Main handleClick={this.click} color="red" counter={this.state.red} />
                    </div>
                    <div className="col-sm-3">
                        <Main handleClick={this.click} color="blue" counter={this.state.blue} />
                    </div>
                </div>
            </div>

        )
    }
}

export default Container;