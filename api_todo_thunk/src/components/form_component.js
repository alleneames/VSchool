import React from "react";

class FormComponent extends React.Component {
    render() {
        return (
          
                <div className="container">
                    <div className="row custom-row">
                        <div className="col-md-4">
                            <input value={this.props.input.title} onChange={(event)=>{
                                this.props.handleChange("title", event);
                            }} placeholder="What ya gotta do?"/>
                        </div>
                        <div className="col-md-4">
                            <input value={this.props.input.description} onChange={(event)=>{
                                this.props.handleChange("description", event);
                            }} className="description" placeholder="Description?" />
                        </div>
                        <div className="col-md-4">
                            <input type="number" value={this.props.input.price} onChange={(event)=>{
                                this.props.handleChange("price", event);
                            }} placeholder="What does it cost? " />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="button">
                                <button 
                                    onClick={()=>{
                                        this.props.handleAdd(this.props.input);
                                    

                                }} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>  
            
        )
    }
}

export default FormComponent;