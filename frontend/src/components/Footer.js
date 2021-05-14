import React from 'react'
import './Footer.css'
import {Row, Container, Col} from 'react-bootstrap';

function Footer() {
    return (
      <Container fluid className="footer">
        
        <Row>
          <Col xs={2} className="icons8Links">
            <div>
              <a target="_blank" rel="noreferrer" href="undefined/icons/set/email--v1">Email icon</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com/">Icons8</a>
            </div>
            <div>
              <a target="_blank" rel="noreferrer" href="undefined/icons/set/address">Address icon</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com/">Icons8</a>
            </div> 
            <div>
              <a target="_blank" rel="noreferrer" href="undefined/icons/set/cell-phone--v1">Cell Phone icon</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com/">Icons8</a>
            </div>                     
          </Col>
          <Col xs={7}></Col>
          <Col xs={3}>
            <div className="copyrights">
              Copyright © 2021 Chatzakis John, Papas Gregory.
            </div>
          </Col>
        </Row>
      </Container>
    )
}

export default Footer
