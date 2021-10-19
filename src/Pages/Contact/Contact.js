import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';


const Contact = () => {
    return (
        <div className="">
            <p className="title my-3 text-center">Have A Qustions ?</p>
            <Container>
                <Row className="my-4 text-center">
                    <Col md={4} sm={12} className="contact-us ">
                        <p className="head-icon"> <i className="fas fa-phone-square"></i> Call Us</p>
                        <p>+0096188363</p>
                    </Col>
                    <Col md={4} sm={12} className="contact-us ">
                        <p className="head-icon"><i className="fas fa-map-marker-alt"></i> Address</p>
                        <p>Dhaka-1211, Bangladesh</p>
                    </Col>
                    <Col md={4} sm={12} className="contact-us ">
                        <p className="head-icon"> <i className="fas fa-envelope"></i> E-mail</p>
                        <p>akbarShovo@Email.com</p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="my-4">
                    <Col md={3}></Col>
                    <Col md={6} sm={12}>
                        <div>
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div>
                            <label for="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>

                        <div className="form-floating mt-3">
                            <label for="floatingTextarea2">Comments</label>
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"150px"}} ></textarea>
                        </div>

                        <button className="btn signup-btn mt-3">Send Message</button>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;