import React from "react";
import TodoItemContainer from "../containers/todo_item_container.js"


class TodoListComponent extends React.Component {
    genItems() {
        return this.props.items.map((item, index)=> {
            return <TodoItemContainer handleUpdate={this.props.handleUpdate} handleUpdateInput={this.props.handleUpdateInput} handleRemove={this.props.handleRemove} key={item.title + index} item={item} />
        })
    }
    render() {
        return (
            <div>
                {this.genItems()}
            </div>
        )
    }
}

export default TodoListComponent;