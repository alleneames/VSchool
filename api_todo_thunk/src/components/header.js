import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid custom-jumbotron">
                <div className="container">
                    <h1 className="display-3 header">To-do List</h1>
                </div>
            </div>
        )
    }
}

export default Header;