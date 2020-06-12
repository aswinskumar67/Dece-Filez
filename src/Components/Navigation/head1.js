import React, { Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    
} from 'reactstrap';
import './head1.css';
class Head1 extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        
        return (
            <div>
                <Navbar  light expand="md">
                    <NavbarBrand href="/">DECE FILEZ</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto"  navbar>
                            <NavItem>
                                <NavLink href="/Components/">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Login-sign-up">Get Started</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/Contact-us">Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Dashboard/Browse-files">Dashboard</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Head1