import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import customar from '../../../images/customar.jpg';

const Customar = () => {
    return (
        <div className="my-4">
            <h1 style={{textAlign:"center"}}>Our Customer Opinion </h1>

            <Container className="my-3">
                <Row>
                    <Col md={6} sm={12} className="my-4">
                        <h1>We Care Your <br /> Health And Checkup <br /> With Best</h1>
                        <p>The most respect profession comes with big responsibilities, taking care of us all! So, if our doctor is doing a good job he deserves our feed back. After our “good dentist reviews” we decided to make a list for Positive doctor review examples that you can write to your doctor and help him with his reputation.</p>
                    </Col>
                    <Col md={6} sm={12}>
                        <img src={customar} alt="" />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Customar;