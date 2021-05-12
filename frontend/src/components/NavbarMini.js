import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import "./NavbarMini.css"


function NavbarMini() {
    return (  
    <Container fluid className="NavbarMini container-fluid">
        <Row>
            <Col sm={1}></Col>
            <Col sm={10} xs={12} className="iconDiv">
                <Row>
                    <Col sm={2} xs={4}>
                        <Row>
                            <Col lg={2} md={2} sm={2} xs={2}><span className="iconify" data-icon="simple-icons:facebook" data-inline="false"></span></Col>
                            <Col lg={2} md={2} sm={2} xs={2}><span className="iconify" data-icon="akar-icons:instagram-fill" data-inline="false"></span></Col>        
                            <Col lg={2} md={2} sm={2} xs={2}> <span className="iconify" data-icon="entypo:email" data-inline="false"></span></Col>
                        </Row>
                    </Col>
                    <Col xs={1}></Col>
                    <Col sm={9} xs={7}>
                        <Row id="hid">
                            <Col xs={1} style={{textAlign: "right"}} className="pr-0">
                                <span className="iconify" data-icon="entypo:old-mobile" data-inline="false"></span>
                            </Col>
                            <Col xs={10} style={{textAlign: "left", paddingTop: "2px"}}>
                                <p>: 6945 386 365</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col sm={1}></Col>
        </Row>
    </Container>)
       
    
}

export default NavbarMini
