import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

import logo from '../../../images/banner/logo.png';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
    const {user, logout} = useAuth();

    const handleLogout= ()=>{
        logout()
    };
    return (
        <div>
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand as={Link} to ="/"><img className="w-100" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 nav-list"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as= {Link} to ="/home">Home</Nav.Link>
                            <Nav.Link as= {HashLink} to ="/home#services">Services</Nav.Link>
                            <Nav.Link as= {Link} to ="/activeDoctors">Active Doctors</Nav.Link>
                            <Nav.Link as= {Link} to ="/about">About</Nav.Link>
                            <Nav.Link as= {Link} to ="/contact">Contact us</Nav.Link>

                            {
                                user?.displayName?<Nav.Link onClick={handleLogout} >Logout</Nav.Link>:<Nav.Link as= {Link} to ="/login">Login</Nav.Link>
                            }

                            <span className="name">{user?.displayName}</span>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;