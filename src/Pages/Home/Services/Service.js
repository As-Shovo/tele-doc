import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Service = (props) => {
    const {service} = props
    return (
        <Col md={6} sm={12}>
            <Card className="my-2">
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                        {service.decription.slice(0, 150)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className="btn signup-btn">Click More</button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;