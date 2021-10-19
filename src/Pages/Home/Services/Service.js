import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name, image, decription, id} = props.service;
    return (
        <Col md={6} sm={12}>
            <Card className="my-2">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {decription.slice(0, 150)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                   <Link to={`/service/${id}`}><button className="btn signup-btn">Click More</button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;