import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Home.css'

import bannar1 from '../../../images/banner/bannar1.jpg'
import bannar2 from '../../../images/banner/bannar2.jpg'
import bannar3 from '../../../images/banner/bannar3.jpg'
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';
import Customar from '../Customar/Customar';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* banner section  */}
            <Container className="my-4">
                <Row>
                    <Col md={6} sm={12}>
                        <div className="my-5 title">
                            <h1>The simple, <br /> free, and secure <br /> telemedicine solution </h1>
                            <p>We’ve made telemedicine simple and easy for you. Create your personal room and start practicing telemedicine today.</p>
                            <Link to="/login"><button className="btn signup-btn">Singup</button></Link>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={bannar1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={bannar2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={bannar3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                </Row>
            </Container>
            <div className="my-5">

                <Services></Services>

            </div>
            <Doctors></Doctors>

            <Customar></Customar>
        </div>
    );
};

export default Home;