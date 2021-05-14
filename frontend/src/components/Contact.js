import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import './Contact.css'

function ContactUs(){
    return(
        <Container>
            <Row className="spacing">
                <Col sm={1} ></Col>
                <Col sm={10} xs={12} className="contactInfo">
                    <h3>Our contact info:</h3>
                    <div className="ImageWithTextDiv">
                        <img src="icons8-email-96.png" alt="Our email address."/>
                        <span>pchanoutsis@gmail.com</span>
                    </div>
                    <div className="ImageWithTextDiv">
                        <img src="icons8-cell-phone-96.png" alt="Our cellphone number."/>
                        <span>6945 386365</span>
                    </div>
                    <div className="ImageWithTextDiv">
                        <img src="icons8-address-96.png" alt="Our physical address."/>
                        <span>Αγίας Παρασκευής 25, Λ. Χερσονήσου, 700 14, Κρήτη</span>
                    </div>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>
    );
}

export default ContactUs;