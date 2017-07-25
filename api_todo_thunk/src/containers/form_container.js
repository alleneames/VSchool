import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";

import {bindActionCreators } from "redux";

import * as actionCreators from "../actions/";


import FormComponent from "../components/form_component";


class FormContainer extends React.Component {
            constructor() {
            super();
            this.state = {
               title: "",
               description: "",
               price: "" 
            }
            autoBind(this);
        }

        handleChange(key, event){
            this.setState({
                [key] : event.target.value 
            })
        }

    render() {
        return (
        <FormComponent handleAdd={this.props.addData} input={this.state} handleChange={this.handleChange}/>
        )
    }
}


const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchersToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(FormContainer);