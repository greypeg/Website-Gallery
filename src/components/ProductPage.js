import "./ProductPage.css"
import {Container, Row, Col} from 'react-bootstrap'
import React from "react";
import ProductPageCarousel from "./ProductPageCarousel"
import ProductInfo from "./ProductInfo"


class ProductPage extends React.Component{

    constructor(props)
    {
        super(props);
        
    }

    render()
    {
        return(
            <Container fluid>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Row>
                        <Col xl={6} sm={12} className="pr-0">
                            <ProductPageCarousel ProductImageSources={this.props.ProductInfoDemo.carouselimageSources} ProductImageAlts={this.props.ProductInfoDemo.carouselimageAlts}/>
                        </Col>
                        <Col xl={6} sm={12}>
                            <ProductInfo ProductInfo={this.props.ProductInfoDemo}/>
                        </Col>
                        </Row>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
            
            )
    }
}

export default ProductPage