import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DetailsServices = () => {
    const { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    const sData = data?.filter(dt => dt.id === id);


    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col md={3} sm={12}></Col>
                    <Col md={6} sm={12}>
                        <Card className="my-2">
                            <Card.Img variant="top" src={sData[0]?.image} />
                            <Card.Body>
                                <Card.Title>{sData[0]?.name}</Card.Title>
                                <Card.Text>
                                    {sData[0]?.decription}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to="/activeDoctors"><button className="btn signup-btn mx-3">Our Active Doctor</button></Link>
                                <Link to="/home"><button className="btn signup-btn">Go Back</button></Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={3} sm={12}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetailsServices;