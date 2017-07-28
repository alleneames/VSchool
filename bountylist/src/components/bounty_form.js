import React from "react";



class BountyForm extends React.Component {
    render() {
        return(
            <div>
                <input 
                    placeholder="Name" 
                    value={this.props.input.name} 
                    onChange={(event)=>{
                        this.props.handleChange("name", event);
                    }}
                    />
                <input 
                    placeholder="Location" 
                    value={this.props.input.location} 
                    onChange={(event)=>{
                        this.props.handleChange("location", event);
                    }}
                    />
                <input 
                    placeholder="Price" 
                    value={this.props.input.price} 
                    onChange={(event)=>{
                        this.props.handleChange("price", event);
                }}
                />
                <input 
                    placeholder="Wanted" 
                    value={this.props.input.wanted}
                    onChange={(event)=>{
                        this.props.handleChange("wanted", event);
                    }}
                     />
                <button 
                    onClick={()=>{
                        this.props.handleClick(this.props.input);
                    }}    
                >Add Bounty</button>

            </div>
        )
    }
}

export default BountyForm;