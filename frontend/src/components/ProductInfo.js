import "./ProductInfo.css"
import {Row, Col} from 'react-bootstrap'
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
            productID: this.props.ProductInfo.ProductCode,
            productTotalColors: this.props.ProductInfo.ProductColors.length,
            colorDots: [],
            selectedDotColor: "Click a color above to reveal its codename."
        }

        this.initiateColorsForProduct = this.initiateColorsForProduct.bind(this);
        this.initiateColorsForProduct();
    }

    initiateColorsForProduct()
    {
        for(let i = 0; i < this.state.productTotalColors; ++i)
        {
            this.state.colorDots.push(
            <span 
                className="colors" 
                id={this.state.productCode + "Color" + i} 
                key = {this.props.productCode + "Color" + i} 
                style = {{background: this.props.ProductInfo.ProductColors[i], 
                            backgroundOrigin: "content-box", 
                            backgroundClip: "content-box"}}
                alt = {this.props.ProductInfo.ProductColorCodes[i]}
                title = {"Color code: " + this.props.ProductInfo.ProductColorCodes[i]}
                onClick = {(e) => {this.setState({selectedDotColor: e.target.title})}}
                >{this.props.ProductInfo.ProductColors[i].match("#FFFFFF") ? "*" : ''}</span>)
        }
    }

    render()
    {
        
        return(
            <div className="positioning">
                <Row>
                    <span className="Title">{this.props.ProductInfo.ProductName}</span>
                </Row>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                    <span className="ColorText">Size</span>
                    <span className="SizeInfo">
                        Width: {this.props.ProductInfo.size.w + " " + this.props.ProductInfo.size.uom}
                    </span>
                    <span className="SizeInfo">
                        Height: {this.props.ProductInfo.size.h + " " + this.props.ProductInfo.size.uom}
                    </span>
                    <span className="SizeInfo">
                        {this.props.ProductInfo.size.t ? 
                            "Thickness: " + this.props.ProductInfo.size.t + " " + this.props.ProductInfo.size.uom 
                            : 
                            ''
                        }
                    </span>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6} className="ColorInfo">
                        <span className="ColorText">Available Colors</span>
                        <div className="ColorDiv">
                            {this.state.colorDots}
                        </div>
                        <span className="SelectedDotTitle">
                            {this.state.selectedDotColor}
                        </span>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
                <Row>
                    <span className="Code">Product Code: {this.props.ProductInfo.ProductCode}</span>
                </Row>
            </div>
        )
    }
}

export default ProductInfo