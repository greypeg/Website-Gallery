import "./ProductInfo.css"
import {Container, Row, Col} from 'react-bootstrap'
import React from "react";

/*
    this.props = {
        ProductTitle: string,
        ProductDescription: string,
        ProductCode: string,
        ProductColors: Array of strings (hexadecimal color codes)
    }
*/

class ProductInfo extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            productID: this.props.ProductCode,
            productTotalColors: this.props.ProductColors.length,
            colorDots: [],
        }

        this.initiateColorsForProduct = this.initiateColorsForProduct.bind(this);
        this.initiateColorsForProduct();
    }

    initiateColorsForProduct()
    {
        for(let i = 0; i < this.state.productTotalColors; ++i)
        {
            this.state.colorDots.push(<span className="colors" id={this.state.productID + "Color" + i} key = {this.props.productID + "Color" + i} 
                style = {{background: "#" + this.props.ProductColors[i], 
                            backgroundOrigin: "content-box", 
                            backgroundClip: "content-box"}}></span>)
        }
    }

    render()
    {
        
        console.log(this.state.colorDots);
        return(
            <div className="positioning">
                <Row>
                    <span className="Title">{this.props.ProductTitle}</span>
                </Row>
                <Row>
                    <span className="Description">{this.props.ProductDescription}</span>
                </Row>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <span className="ColorText">Available Colors</span>
                        <div className="ColorDiv">
                            {this.state.colorDots}
                        </div>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
                <Row>
                    <span className="Code">Product Code: {this.props.ProductCode}</span>
                </Row>
            </div>
        )
    }
}

export default ProductInfo