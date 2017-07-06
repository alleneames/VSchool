import React from "react";
import ReactDOM from "react-dom";

import DjContainer from "./containers/dj_container.js";
import "./styles.css";

class App extends React.Component {
    render () {
        return (
            <view>
                <DjContainer />
            </view>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));