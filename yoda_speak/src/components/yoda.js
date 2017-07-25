import React from "react";

class Yoda extends React.Component {
    render() {
        return(
            <div className="yoda-container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="yoda-title" >Yoda Speak</h1>
                        <input className="input-form" value={this.props.input} onChange={(event)=>{
                            this.props.handleChange(event);
                        }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button onClick={()=>{
                            this.props.handleClick(this.props.input);
                        }} >Convert</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="output" >{this.props.text}</div>
                    </div>
                </div> 
            </div>

        )
    }
}

export default Yoda;