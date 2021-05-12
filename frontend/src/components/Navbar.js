import React, {useState} from 'react'
import './Navbar.css'
import logoe from './images/logoe.png';
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap'
import Hamburger from 'hamburger-react'

function Navbar() {
    const [isOpen, setOpen] = useState(false)
    return (
        <Container fluid className="Navbar">
            <Row>
                <Col lg={1}></Col>
                <Col lg={2}  md={3} sm={3} xs={2} className="leftSide">
                    <div className=".d-none .d-xl-block">  <a href="/">
                        <div className="logocontainer">
                        <img src={logoe} alt="Logo" className="logo"/></div>
                    </a></div>
                    <div className="ham"><Hamburger className="ham" toggled={isOpen} toggle={setOpen} /></div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={10}className="centerSide">
                    <InputGroup >
                        <FormControl
                        placeholder="Search..."
                        aria-label="Search..."
                        aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                </Col>
                <Col lg={6} md={6} sm={6} xs="auto" className="rightSide links" id={isOpen ? "hidden" : ""}>
                    <Row id={isOpen ? "wrapper" : ""}>
                        <Col lg={true} md={true} sm={true} xs={true} className="">
                            <a href="/">Home</a>
                        </Col>
                        <Col lg={true} md={true} sm={true} xs={true} className="">
                            <a href="/aboutus">About</a>
                        </Col>
                        <Col lg={true} md={true} sm={true} xs={true} className="">
                            <a href="/contactus">Contact</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar
