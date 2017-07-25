import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

import { createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";

import reducers from "./reducers/";

import Header from "./components/header.js";
import FormContainer from "./containers/form_container.js";
import TodoListContainer from "./containers/todo_list_container";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
        <div>
            <Header />
            <FormContainer />
            <TodoListContainer />
        </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));