import React from "react";

import autoBind from "react-autobind";
import Dj from "../components/dj.js";

class DjContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            style: {
                backgroundColor: "#D3D3D3"
            }
        };
        
        autoBind(this);
    }
    
    componentDidMount() {
        window.addEventListener("scroll", this.onScroll)
    }
    
    clickMe() {
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: "blue"
            }
        })
    }
    
    hoverMe() {
        this.setState({
            style: {
            ...this.state.style,
            backgroundColor: "#FF9D49"
            }
        })
    }
    
    onScroll() {
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: "#58F579",
                borderRadius: "50%"
            }
        })
    }
    render() {
        return(
        <div>
            <div className="container">
                <div className="row">
                    <Dj 
                    style={this.state.style} 
                    clickMe={this.clickMe} 
                    hoverMe={this.hoverMe}
                    />
                </div>
            </div>
        </div>
        
        )
    }
}

export default DjContainer;