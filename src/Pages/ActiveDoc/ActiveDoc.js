import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import doctor from '../../images/doctor.jpg';
import './ActiveDoc.css';
import DisplayDoc from './DisplayDoc';


const ActiveDoc = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('adoc.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    // console.log(data);

    
    return (
        <div>
            <Container className="my-5">
                <Row className="my-3">
                    <Col md={6} sm={12}>
                        <img src={doctor} className="w-100" alt="..." />
                    </Col>
                    <Col md={6} sm={12} className="my-4">
                        <div className="active-doc">
                            <p>Online Consult</p>
                            <h2>Get 24/7 Care Right From Your Phone</h2>
                            <li>Get unlimited 24/7 Video Chat with a provider at no extra cost</li>
                            <li>Easily book appointments and renew prescriptions</li>
                            <li>Skip unnecessary trips to the ER or urgent care</li>
                            <li>Have a Remote Visit with your primary care provider over video</li>
                            <li>A message with your provider</li>
                        </div>
                    </Col>

                </Row>
            </Container>

            <Container className="my-5">
                <h1 className="text-center">Our Active Doctors</h1>
                <Row className="g-3 my-5">
                {
                    data.map(adoc => <DisplayDoc key={adoc.id} adoc={adoc}></DisplayDoc>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default ActiveDoc;