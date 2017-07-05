import React from "react";
import ReactDOM from "react-dom";
import ContCounter from "./containers/cont_counter.js";

import "./index.css";

class App extends React.Component {
    render () {
        return(
            <view>
                <ContCounter />
            </view>
        
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))