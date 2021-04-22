import "./ProductPage.css"
import {Container, Row, Col} from 'react-bootstrap'
import React from "react";
import ProductPageCarousel from "./ProductPageCarousel"
import ProductInfo from "./ProductInfo"
import bagsrc1 from "../images/bag1.jpg"
import bagsrc2 from "../images/bag2.jpg"
import bagsrc3 from "../images/bag3.jpg"

const ProductInfoDemo = 
    {
        ProductName: "Leather Backpack",
        ProductDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ligula erat, \
                                ut semper mauris mollis vel. Duis fermentum a quam facilisis vulputate. Aenean id velit non ex sagittis posuere et id odio.\
                                Nulla aliquet, libero nec pulvinar efficitur, orci lectus tempus libero, et varius nunc turpis a metus.\
                                Mauris ac leo id lacus tempus pulvinar. Praesent diam est, tempus a massa mollis, condimentum commodo justo.\
                                Curabitur malesuada est vitae arcu bibendum, vel pretium nisl elementum. Sed vehicula justo sagittis erat ultrices scelerisque.\
                                Fusce ut ante sem. Vivamus vitae mattis libero, vitae rhoncus tellus. Sed id vestibulum erat, sed eleifend est.\
                                Sed in erat eu odio pharetra ullamcorper commodo finibus justo. Vestibulum interdum semper arcu, sit amet porta massa rutrum eu.\
                                Nulla accumsan diam eget consectetur auctor.",

        ProductCode: "001",
        ProductColors: ["7C3E29", "874E3B", "5C4736", "322423", "322423", "5C4736", "5C4736", "322423", "322423", "322423", "5C4736", "5C4736"],
        ProductColorCodes: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012"],
        imgsrc: bagsrc1,
        carouselimageSources: [bagsrc1, bagsrc2, bagsrc3, bagsrc2, bagsrc3],
        carouselimageAlts: ["bag1", "bag2", "bag3", "bag2", "bag3"],
    }



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
                            <ProductPageCarousel ProductImageSources={ProductInfoDemo.carouselimageSources} ProductImageAlts={ProductInfoDemo.carouselimageAlts}/>
                        </Col>
                        <Col xl={6} sm={12}>
                            <ProductInfo ProductInfo={ProductInfoDemo}/>
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