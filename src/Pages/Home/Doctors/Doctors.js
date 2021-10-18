import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from './Doctor';

const Specialists = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="my-3">
            <h1 className="my-3" style={{ textAlign: "center" }}>Our Specialists Doctors</h1>
            <Container>
                <Row>
                    {
                        data.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Specialists;