import "./HomeScreen.css";
import ProductDesktop from "./ProductDesktop"
import {Container, Row, Col} from 'react-bootstrap'

const HomeScreen = () => {

  return (
    <Container fluid>
      <Row>
        <Col sm={1}></Col>
        <Col lg={3} className="homescreen__products">
          <ProductDesktop/>
        </Col>
        <Col lg={3} className="homescreen__products">
          <ProductDesktop/>
        </Col>
        <Col lg={3} className="homescreen__products">
          <ProductDesktop/>
        </Col>
        <Col sm={1}></Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;