import './itemCarousel.css'
import React from 'react'
import bag1 from "../images/bag1.jpg"
import bag2 from "../images/bag2.jpg"
import bag3 from "../images/bag3.jpg"
import {Carousel} from 'react-bootstrap'
import useWindowDimensions from './windowDimensions'

function ItemCarousel()
{
    const {height, width} = useWindowDimensions();

    if (width > 976)
        return(
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
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
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
            
        )
    else
        return(
            <div id="noElement"></div>
        )
}

export default ItemCarousel;