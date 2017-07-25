import React from "react";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import * as actionCreators from "../actions/";


import ColorRender from "../components/color_render";

class ColorContainer extends React.Component {
    render() {
        return (
            <div>
                <ColorRender name={this.props.name} color={this.props.color} handleClick={this.props.loadColor}/>

            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps) (ColorContainer);