import './itemCarousel.css'
import React from 'react'
import bag1 from "../images/bag1.jpg"
import bag2 from "../images/bag2.jpg"
import bag3 from "../images/bag3.jpg"
import {Carousel, Container, Row, Col} from 'react-bootstrap'

const ItemCarousel = () =>
{

        return(
            <Container fluid className="pt-5 d-none d-lg-block"> 
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            <Col>
                            <Carousel hover="true">
                            <Carousel.Item>
                                <img
                                className="d-block w-100 CarouselContent"
                                src={bag1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 CarouselContent" 
                                src={bag2}
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 CarouselContent"
                                src={bag3}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            
        )
}

export default ItemCarousel;