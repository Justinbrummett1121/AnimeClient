import React, {useState} from 'react';
import './Navbar.css'

import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

const PermaNav = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return (
        <Navbar color="white" light expand="md">
            <div className="navbar">
            <NavbarBrand href="/">Home</NavbarBrand>

            </div>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default PermaNav;