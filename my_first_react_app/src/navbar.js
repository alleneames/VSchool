import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <span>Kill Webstorm</span>
        <span>
          <a href="#">Why won't this conversation die?</a>
        </span>
        <span>
          <a href="#">It's still going</a>
        </span>
        <span><a href="#">FML</a></span>
      </div>
    )
  }
}

export default Navbar;
