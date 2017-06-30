import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Navbar from "./navbar.js";
import Footer from "./footer.js";

class App extends React.Component {
    render() {
        return ( 
            <div className ="index">
                <Navbar brand="Singer" links={
                        [
                            {
                                text: "Upper Right", link: "www.google.com"
                            }, 
                            {
                                text: "Blog", link: "www.netflix.com"
                            }
                        ]
                    } />
                 <content>
                    <h1 className = "title"> Hello darkness, my old friend</h1> 
                    <div className="test"></div>
                 </content>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render( < App / > , document.querySelector("#root"));
