import React from "react";

class BountyItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.hit.name}</p>
        <input 
          value={this.props.input.name}
          onChange={(event)=>{
            this.props.handleChange("name", event);
          }}
          style={{display: this.props.input.edit ? "inherit":"none"}}
        />
        <p>{this.props.hit.location}</p>
        <input 
          value={this.props.input.location}
          onChange={(event)=>{
            this.props.handleChange("location", event);
          }}
          style={{display: this.props.input.edit ? "inherit":"none"}}
         />
        <p>{this.props.hit.price}</p>
        <input 
         value={this.props.input.price}
         onChange={(event)=>{
            this.props.handleChange("price", event);
          }}
          style={{display: this.props.input.edit ? "inherit":"none"}}
         />
        <p>{this.props.hit.wanted}</p>
        <input 
         value={this.props.input.wanted}
         onChange={(event)=>{
            this.props.handleChange("wanted", event);
          }}
          style={{display: this.props.input.edit ? "inherit":"none"}}
        />
        <button onClick={()=>{
          this.props.handleRemove(this.props.hit.id);
        }} >Collect</button>
        <button 
          onClick={()=>{
            this.props.handleUpdate(this.props.hit.id, this.props.input);
          }}
        >Update</button>
        <button onClick={()=>{
          this.props.handleToggle();
        }} >Edit</button>
      </div>
    )
  }
}

export default BountyItem;