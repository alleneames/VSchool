import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";


import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

//import container
import CounterLogic from "./containers/counter_logic.js"

const store = createStore(reducers);

class App extends React.Component {
    render() {
        return(
            <view>
                <CounterLogic />
            </view>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));