import React from "react";
import ReactDOM from "react-dom";



import "./index.css";
import Navbar from "./navbar.js";

class App extends React.Component {
    render() {
        return ( <
            div >
            <
            Navbar / >
            <
            h1 > Hello < /h1> <
            h2 > It 's me</h2> <
            p className = "sarah" > testing < /p> <
            /div>

        );
    }
}

ReactDOM.render( <
    App / > , document.querySelector("#root"));
