import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

import BountyForm from "../components/bounty_form.js"

class BountyRequestForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            location: "",
            price: "",
            wanted: ""
        }
        autoBind(this);
    }

    handleChange(key, event){
        this.setState({
            [key]: event.target.value
        })
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <BountyForm 
                    input={this.state}
                    handleChange={this.handleChange}
                    handleClick={this.props.addData}
                     />

            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchersToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(BountyRequestForm);