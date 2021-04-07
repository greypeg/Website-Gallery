import "./HomeScreen.css";
import ProductDesktop from "./ProductDesktop"
import {Container, Row, Col} from 'react-bootstrap'
import React from "react";
import bagsrc from "../images/bag2.jpg"
 
const Products: JSX.Element[] = [];

class HomeScreen extends React.Component{

  constructor(props)
  {
    super(props);
  }

  UpdateInfo()
  {
    let SelectedSorting = this.props.sortingSelected;
    let SelectedGenre = this.props.categorySelected;
    let NumberOfDisplayedItems = this.props.displayedItems;

    // create Products Array
  }

  render() {
    this.UpdateInfo();

    return (
      <Container fluid>
        <Row>
          <Col sm={1}></Col>
          <Col lg={3} className="homescreen__products">
            <ProductDesktop ProductId={"Product0"} picsrc={bagsrc}/>
          </Col>
          <Col lg={3} className="homescreen__products">
            <ProductDesktop ProductId={"Product1"} picsrc={bagsrc}/>
          </Col>
          <Col lg={3} className="homescreen__products">
            <ProductDesktop ProductId={"Product2"} picsrc={bagsrc}/>
          </Col>
          <Col sm={1}></Col>
        </Row>
        <Row>
          <Col sm={1}></Col>
          <Col lg={3} className="homescreen__products">
            <ProductDesktop ProductId={"Product3"} picsrc={bagsrc}/>
          </Col>
          <Col lg={3} className="homescreen__products">
            <ProductDesktop ProductId={"Product4"} picsrc={bagsrc}/>
          </Col>
          <Col lg={3} className="homescreen__products">
            <ProductDesktop ProductId={"Product5"} picsrc={bagsrc}/>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    );
  }
  
};

export default HomeScreen;