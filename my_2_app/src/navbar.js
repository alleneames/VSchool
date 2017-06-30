import React from "react";
//import { DropdownButton, MenuItem } from "react-bootstrap";
class Navbar extends React.Component {
    render() {
//        console.log(this.props.links)
        let links = this.props.links.map((item) => {
          return (
          <li key={item.text}>
              <a href={item.link}>
                  {item.text}
              </a>
          </li>
          )  
        })
        return (
            
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                       <a className="navbar-brand">{this.props.brand}</a> 
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        {links}
                     
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar