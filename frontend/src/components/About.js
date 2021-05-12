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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus dapibus nunc sit amet euismod. 
                        Aenean vehicula, lacus dictum fermentum accumsan, lectus ante bibendum tortor, eu consequat diam mi vitae ex. 
                        Aliquam cursus consequat felis vitae hendrerit. Aliquam lacinia eros vel nibh ullamcorper, id vestibulum quam ultrices. 
                        Vivamus ultricies mauris maximus ante rutrum lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos. Fusce sodales semper mollis. Sed non massa hendrerit, viverra lacus eu, luctus sapien. 
                        Vivamus quis iaculis turpis. Mauris porttitor tortor eu risus iaculis, sit amet varius odio mollis.

                        Nunc rutrum eleifend ante vitae iaculis. Duis at varius ipsum. Aenean et mauris posuere, mattis lectus et, posuere orci. 
                        Phasellus ullamcorper ante non convallis porttitor. Praesent dapibus feugiat fringilla. 
                        Vestibulum viverra purus in imperdiet placerat. Suspendisse potenti.
                    </span>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    )
}

export default AboutUs;