import './itemCarousel.css'
import React from 'react'
import {Carousel, Container, Row, Col} from 'react-bootstrap'

import {Link} from 'react-router-dom'

class ItemCarousel extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state={
            carouselImageInfo: [],
            CarouselReady: false,
            carouselSlides: [],
        }

        this.fetchCarouselInfo = this.fetchCarouselInfo.bind(this);
        this.initCarousel = this.initCarousel.bind(this);

    }

    componentDidMount()
    {
        this.fetchCarouselInfo();
    }

    fetchCarouselInfo()
    {
        fetch("http://" + this.props.backendIP + ":4000/getCarouselImages")
            .then(response => response.json())
            .then(data => {this.setState({carouselImageInfo: data}, ()=>{this.initCarousel()})});
    }

    initCarousel()
    {
        const carouselSlideNo = this.state.carouselImageInfo.length;
        let CarouselSlides = [];

        for(let i = 0; i<carouselSlideNo; ++i)
        {
            CarouselSlides.push(
                
                <Carousel.Item>
                    <Link to={'/Products?ProductID=' + this.state.carouselImageInfo[i].ProductShortDescription}>
                        <img
                        className="d-block w-100 CarouselContent"
                        src={this.state.carouselImageInfo[i].imgsrc}
                        alt="Carousel slide showing product"
                        />
                    </Link>
                </Carousel.Item>
            )
        }
        this.setState({carouselReady: true, carouselSlides: CarouselSlides});
    }

    render(){
        if(!this.state.carouselReady) { return <h3>Loading Carousel, please wait...</h3>}
        return(
            <Container fluid className="pt-5 d-none d-md-block"> 
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Row>
                            <Col>
                            <Carousel hover="true">
                                {this.state.carouselSlides}
                            </Carousel>
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            
        )
    };
}

export default ItemCarousel;