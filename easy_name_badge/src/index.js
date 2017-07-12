import React from "react";
import ReactDOM from "react-dom";

//import container
import NameContainer from "./containers/name_container.js";

class App extends React.Component {
    render() {
      return(
          <NameContainer />
      )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));