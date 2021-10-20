import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import founderA from '../../images/About/founder.jpg'
import founderB from '../../images/About/151700128_1677433145773927_7489256493697598667_n.jpg'
import './About.css';


const About = () => {
    return (
        <div >
            <div className="text-center heading">
                <h1>Our mission is simple:</h1>
                <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement.</p>
            </div>
            <Container>
                <p className="text-center fder">Founder</p>
                <Row className="my-5 gx-1">
                    <Col md={6} sm={12} className="text-center">

                        <div className="founder">
                            <div className="founder-image">
                                <img src={founderA} alt="" />
                                <h5>Jhankar Mahbub</h5>
                            </div>
                            <div className="founder-image">
                                <img src={founderB} alt="" />
                                <h5>MD Akbar Hossain</h5>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <p className="story">Our Story</p>
                        <p>Founders <strong>Jhankar Mahbub</strong>  and <strong>Md Akbar Hossain</strong>  had a vision to solve an ongoing problem for practitioners and patients alike: The lack of convenient and reimbursable health care options.The two joined forces to develop a telemedicine company that would focus on 3 aspects to give them a competitive edge in the market: streamlined reimbursement, patient satisfaction, and boosting practice efficiency. Chiron Health was created in 2013 as a telemedicine company to address these issues and has since raised more than $4.5 million in seed capital from top investors, including Austin, Texas based Capital Factory, and has grown to more than twenty employees. <br /> Unlike many telemedicine companies, Chiron Health provides a modern approach to telehealth technology. We make it easy to seamlessly integrate telemedicine into existing practice workflows, allowing physician practices to provide convenient and efficient care while driving incremental revenue for their practice.</p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;