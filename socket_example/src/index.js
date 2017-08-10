import React from "react";
import ReactDOM from "react-dom";

import FormContainer from "./containers/form-container.js";

class App extends React.Component {
    render() {
        return(

            <div>
                <FormContainer />

            </div>

        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));