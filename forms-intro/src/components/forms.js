import React from "react";



class Forms extends React.Component {
    genNames() {
        this.nameListItems = this.props.names.map((item, index) => {
            return (
            <li onClick={()=> {
                        this.props.handleRemove(index);
                    }} key={item + index}>
                {item}
            </li>
            );
        });
    }
    

    render () {
        this.genNames();
        return (
        <div className="col-md-12 custom-col">
            <h1 className="title">{this.props.brand}</h1>
            <input className="input" value={this.props.nameValue} onChange={this.props.handleInput} />
            <button className="btn btn-primary" onClick={()=> {
                        this.props.handleClick();
                    }} >Submit</button>
            <ul>
                {this.nameListItems}
            </ul>
        </div>
        
        )
    }
}

export default Forms;