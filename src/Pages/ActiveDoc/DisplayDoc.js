import React from 'react';
import { Col } from 'react-bootstrap';
import './DisplayDoc.css';


const DisplayDoc = (props) => {
    const { name, image, specialist } = props.adoc;
    return (
        <Col md={4} sm={12} className="my-2">
            <div className="doc-card">
                <div className="img-area">
                    <img src={image} alt="" />
                </div>
                <div className="name text-center">
                    <h2>Dr.{name}</h2>
                    <h4>{specialist}</h4>
                </div>
                <div className="icons">
                    <i className ="fab fa-facebook-messenger"></i>
                    <i className ="fab fa-whatsapp"></i>
                    <i className ="fas fa-headset"></i>
                </div>
            </div>

        </Col>
    );
};

export default DisplayDoc;