import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";



import YodaContainer from "./containers/yoda_container";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/";

import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return(
            <div>
                <div className="container">
                    <YodaContainer />
                </div>
                

            </div>

        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));