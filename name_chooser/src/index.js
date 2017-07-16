import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//component import
import InputContainer from "./containers/input_container";
import OutputContainer from "./containers/output_container";

class App extends React.Component {
    render() {
        return (
            <view>
                <div className="container">
                    <div className="row custom-row">
                        <div className="col-md-12">
                            <InputContainer />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <OutputContainer />
                        </div>
                    </div>
                </div>
                
            </view>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));