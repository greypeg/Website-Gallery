import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import "./About.css"

function AboutUs(){
    return(
        <Container>
            <Row className="spacing">
                <Col xs={1}></Col>
                <Col xs={10} className="textProperties">
                    <h3 style={{marginBottom: "5%"}}>About us</h3>
                    <span>
                        Oops. It appears as if we don't have an about us description yet. 
                        Please check again in the future, thank you!
                    </span>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    )
}

export default AboutUs;