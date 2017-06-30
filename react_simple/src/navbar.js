import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";

class CustomNavbar extends React.Component {
    render () {
        let nav = this.props.links.map((item) => {
            return (
                <NavItem href={item.link}>
                    {item.text}
                </NavItem>
            )
        })
    return (
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand className="brand">
                            <a href="#">{this.props.brand}</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                      {nav}
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
      
    }
}

export default CustomNavbar;