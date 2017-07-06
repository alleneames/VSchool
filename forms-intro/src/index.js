import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import FormsContainer from "./containers/forms_container";

class App extends React.Component {
    render() {
        return (
        <view>
            <FormsContainer />
        </view>
        
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));