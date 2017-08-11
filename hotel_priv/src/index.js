import React from "react";
import ReactDOM from "react-dom";
import HomeContainer from "./containers/home-container.js";



import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

let store = createStore(reducers,applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return(
            <div>
           
            <HomeContainer />
           
            </div>
            

        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));