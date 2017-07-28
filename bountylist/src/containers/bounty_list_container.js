import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";


import BountyList from "../components/bounty_list.js";

class BountyListContainer extends React.Component {
    componentWillMount() {
        this.props.loadData();
    }
    render() {
        return(
            <div>
                <BountyList 
                    hits={this.props.hits}
                    handleRemove={this.props.deleteData}
                   
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

export default connect(mapStateToProps, mapDispatchersToProps)(BountyListContainer);