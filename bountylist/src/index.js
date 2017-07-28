import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";

import reducers from "./reducers/";

import thunk from "redux-thunk";



import "./styles.css";
import BountyRequestForm from "./containers/bounty_requestform_container.js";
import BountyListContainer from "./containers/bounty_list_container";
const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return(
            <div>
                <BountyRequestForm />
                <BountyListContainer />

            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));