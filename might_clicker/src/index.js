import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//component import
import Container from "./containers/clicker_container.js";

class App extends React.Component {
    render() {
        return(
            <Container />
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));