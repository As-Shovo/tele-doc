import React, { useEffect, useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import Service from './Service';

const Services = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    return (
        <div className="my-3">
            <h1 style={{ textAlign: "center" }}>Our Services</h1>
            <Container>
                <Row>

                    {
                        data.map(service => <Service key={service.id} service={service}></Service>)
                    }

                </Row>
            </Container>

        </div>
    );
};

export default Services;