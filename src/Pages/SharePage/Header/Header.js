import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#">Tele Doc</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as= {Link} to ="/home">Home</Nav.Link>
                            <Nav.Link as= {Link} to ="/home#services">Services</Nav.Link>
                            <Nav.Link as= {Link} to ="/activeDoctors">Active Doctors</Nav.Link>
                            <Nav.Link as= {Link} to ="/about">About</Nav.Link>
                            <Nav.Link as= {Link} to ="/contact">Contact us</Nav.Link>
                            <Nav.Link as= {Link} to ="/login">Login</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;