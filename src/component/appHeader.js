import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class AppHeader extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">FORMTEST</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default AppHeader;