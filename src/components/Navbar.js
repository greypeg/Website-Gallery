import React from 'react'
import './Navbar.css'
import logoe from '../images/logoe.png';
import {Carousel, Container, Row, Col} from 'react-bootstrap'


function Navbar() {


    return (
        <Container fluid className="Navbar">
            <Row>
                <Col lg={1}></Col>
                <Col lg={2} className="leftSide">
                    <a href="/">
                        <img src={logoe} alt="Logo" className="logo"/>
                    </a>
                </Col>
                <Col lg={4} className="centerSide">
                    <input type="search" placeholder="  Search..."></input>
                    <span className="iconify" data-icon="bx:bx-search" data-inline="false"></span>
                </Col>
                <Col lg={4} className="rightSide links">
                    <Row>
                        <Col lg={true} className="align-self-end">
                            <a href="/home">Home</a>
                        </Col>
                        <Col lg={true} className="align-self-end">
                            <a href="/aboutus" style={{marginLeft: '-12%'}}>About us</a>
                        </Col>
                        <Col lg={true} className="align-self-end">
                            <a href="/contact">Contact</a>
                        </Col>
                    </Row>
                </Col>
                <Col lg={1}></Col>
            </Row>
        </Container>
    )
}

export default Navbar
