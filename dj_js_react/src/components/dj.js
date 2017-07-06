import React from "react";

class Dj extends React.Component {
    render() {
        return(
            <div>
                <div className="col-md-12">
                    <div id="shape" 
                    style={this.props.style} 
                    onClick={()=>{this.props.clickMe()}}
                    onMouseOver={()=>{this.props.hoverMe()}}
                    ></div>
                </div>
            </div>
        )
    }
}

export default Dj;