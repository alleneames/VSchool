import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/";

import "./styles.css";

//component & container import
import InputContainer from "./containers/input_container";
import OutputContainer from "./containers/output_container";

const store = createStore(reducers);

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

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));