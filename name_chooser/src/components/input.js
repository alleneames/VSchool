import React from "react";

class Input extends React.Component {
    render() {
        return(
            <div>
                <input onChange={(event)=>{
                    this.props.handleChange("name1", event);
                }} value={this.props.info.name1} className="input" placeholder="give a name"/>
                <input onChange={(event)=>{
                    this.props.handleChange("name2", event);
                }} value={this.props.info.name2} className="input" placeholder="give a name" />
                <input onChange={(event)=>{
                    this.props.handleChange("name3", event);
                }} value={this.props.info.name3} className="input" placeholder="give a name"/>
                <button onClick={()=>{
                    this.props.handleClick(this.props.info);
                    this.props.clearInputs();
                }} className="input" >Submit</button>
            </div>

        )
    }
}

export default Input;