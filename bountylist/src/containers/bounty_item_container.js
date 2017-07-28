import React from "react";
import BountyItem from "../components/bounty_item.js";
import autoBind from "react-autobind"

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

class BountyItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.hit,
      edit: false
    };
    autoBind(this);
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    })
  }

  toggleEdit() {
        this.setState({
            edit: !this.state.edit
        })
    }

  render() {
    return (
      <BountyItem 
        hit={this.props.hit}
        handleRemove={this.props.handleRemove}
        handleChange={this.handleChange}
        handleUpdate={this.props.changeData}
        handleToggle={this.toggleEdit}
        input={this.state}
        hit={this.props.hit}
         />
    )
  }
}

const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchersToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(BountyItemContainer); 