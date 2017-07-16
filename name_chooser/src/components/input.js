import React from "react";

class Input extends React.Component {
    render() {
        return(
            <div>
                <input className="input" placeholder="give a name"/>
                <input className="input" placeholder="give a name" />
                <input className="input" placeholder="give a name"/>
                <button className="input" >Submit</button>
            </div>

        )
    }
}

export default Input;