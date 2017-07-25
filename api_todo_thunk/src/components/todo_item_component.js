import React from "react";


class TodoItemComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <h3 style={{display: this.props.updateInput.edit ? "none":"inherit"}} className="result" >{this.props.item.title}</h3>
                    </div>
                    <div className="col-md-3">
                        <h3 style={{display: this.props.updateInput.edit ? "none":"inherit"}} className="result" >{this.props.item.description}</h3>
                    </div>
                    <div className="col-md-3">
                        <h3 style={{display: this.props.updateInput.edit ? "none":"inherit"}} className="result" >${this.props.item.price}</h3>
                    </div>
                    <div className="col-md-3">
                         <button onClick={()=> {
                             this.props.handleRemove(this.props.item._id);
                         }} className="remove">Remove</button>
                    </div>
                </div>
                <div className="row">
                         <div className="col-md-3">
                            <input style={{display: this.props.updateInput.edit ? "inherit":"none"}}
                             onChange={(event)=>{
                                this.props.handleUpdateInput("title", event);
                            }} value={this.props.updateInput.title} />
                         </div>
                         <div className="col-md-3">
                            <input style={{display: this.props.updateInput.edit ? "inherit":"none"}}
                             onChange={(event)=>{
                                this.props.handleUpdateInput("description", event);
                            }} value={this.props.updateInput.description} />
                         </div>
                         <div className='col-md-3'>
                            <input style={{display: this.props.updateInput.edit ? "inherit":"none"}}
                             onChange={(event)=>{
                                this.props.handleUpdateInput("price", event);
                            }} value={this.props.updateInput.price} />
                         </div>
                         <div className="col-md-3">
                            <button onClick={()=> {
                             this.props.handleUpdate(this.props.item._id, this.props.updateInput);
                         this.props.toggleEdit()}} >Update</button>
                         </div>
                         <button style={{display: this.props.updateInput.edit ? "none":"inherit"}}
                          onClick={()=>{
                             this.props.toggleEdit();
                         }}>Edit</button>
                </div>
               

            </div>
        )
    }
}

export default TodoItemComponent;