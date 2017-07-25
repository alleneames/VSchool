import React from "react";
import autoBind from "react-autobind";



import TodoItemComponent from "../components/todo_item_component.js";


class TodoItemContainer extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            ...this.props.item,
            edit: false
        }

    }

    handleUpdateInput(key, event) {
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
        <TodoItemComponent  toggleEdit={this.toggleEdit} handleUpdateInput={this.handleUpdateInput} handleUpdate={this.props.handleUpdate} updateInput={this.state} handleRemove={this.props.handleRemove} item={this.props.item} />
        )
    }
}

export default TodoItemContainer;