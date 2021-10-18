import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Doctor = (props) => {
    const { name, decription, image } = props.doctor;
    return (
        <Col md={4} sm={12}>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {decription}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;