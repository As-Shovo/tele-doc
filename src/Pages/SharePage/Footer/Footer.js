import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/banner/logo.png'

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <Container className="footer-area py-5">
                <Row className="felx">
                    <Col md={4} >
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <h2>The simple, <br />
                            free, and secure <br />
                            telemedicine solution <br />
                        </h2>
                        <p className="">Telemedicine, also referred to as telehealth or e-medicine, is the remote delivery of healthcare services, including exams and consultations, over the telecommunications infrastructure.</p>
                    </Col>
                    <Col md={4}>
                        <h1>Contact Us</h1>
                        <div className="footer-menu">
                            <Link to="#"><i className="fas fa-phone-square-alt icons"></i>  +096122327</Link>
                            <Link to="#"><i className="fas fa-map-marker-alt icons"></i>  Dhaka-1211, Bangladesh</Link>
                            <Link to="#"><i className="fas fa-envelope-open-text icons"></i>  ShutterUp@gamil.com</Link>
                            <Link to="#"><i className="fab fa-instagram-square icons"></i>  Instagrame </Link>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="py-5">

                            <h1>SUBCRIBE</h1>
                            <InputGroup className="my-3">
                                <FormControl
                                    placeholder="Your E-mail"
                                />

                                <Button variant="outline-primary" id="button-addon2">
                                    Subcribe
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;