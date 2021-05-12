import "./ProductPage.css"
import {Container, Row, Col} from 'react-bootstrap'
import React from "react";
import ProductPageCarousel from "./ProductPageCarousel"
import ProductInfo from "./ProductInfo"



class ProductPage extends React.Component{

    

    constructor(props)
    {
        super(props);

        this.state = {
            productInfo: null,
        }
        this.findQueryValue = this.findQueryValue.bind(this);
    }

    componentDidMount()
    {
        fetch("http://" + this.props.backendIP + ":4000/getProduct?ProductCode=" + this.findQueryValue("ProductID"))
            .then((response) => response.json())
            .then((data) => this.setState({productInfo: data[0]}))
        
    }

    findQueryValue(name) {
        let query =  new URLSearchParams(this.props.location.search); 
      
        return query.get(name);
    }
    
    

    render()
    {
        let productID = this.findQueryValue("ProductID");
        if(productID === undefined) return(<span>No such page found.</span>);
        

        if(this.state.productInfo === null) return(<h3>Loading, please wait...</h3>);

        if(this.state.productInfo.error || this.state.productInfo.length === 0)
        {
            return(
                <div key="error">    
                    <h1>Error Occured</h1>
                    <span> Product Code not found in our database</span>
                </div>
            );
        }
        else
        {
            return(
                <Container fluid key="productPage">
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            <Row>
                            <Col xl={6} sm={12} className="pr-0">
                                <ProductPageCarousel 
                                    ProductFolder = {this.state.productInfo.ProductFolder} 
                                    ProductImageSources={this.state.productInfo.carouselimageSources} 
                                    ProductImageAlts={this.state.productInfo.carouselimageAlts}
                                />
                            </Col>
                            <Col xl={6} sm={12}>
                                <ProductInfo ProductInfo={this.state.productInfo}/>
                            </Col>
                            </Row>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </Container>    
            );
        }
    }
}

export default ProductPage
