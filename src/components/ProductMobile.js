import "./ProductMobile.css"
import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import bagsrc1 from "../images/bag1.jpg"

const ProductInfoDemo = 
    {
        ProductName: "Leather Backpack",
        ProductDescription: "Leather Backpack",
        ProductCode: "001",
        ProductColors: ["7C3E29", "874E3B", "5C4736", "322423", "322423", "5C4736", "5C4736", "322423", "322423", "322423", "5C4736", "5C4736"],
        imgsrc: bagsrc1,
    }

class ProductMobile extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            productID: props.ProductInfo.ProductCode,
            productTotalColors: props.ProductInfo.ProductColors.length,
            dots: [],
            tsixla: "2",
        }

        this.initiateColorsForProduct = this.initiateColorsForProduct.bind(this);

        this.initiateColorsForProduct();
    }

    
    initiateColorsForProduct()
    {
        if(this.props.windowWidth >= 768)
        {
            for(let i = 0; i < this.state.productTotalColors; ++i)
        {
            if(i==5)
            {
                this.state.dots.push(
                <span 
                    className="colorDot" 
                    id={"ExtraColors"} 
                    key = {"ExtraColors"} 
                    style = {{background: "grey", padding: "0px", color: "white"}}
                >{"+" + (this.state.productTotalColors - i)}</span>
                )
                return;
            }
            this.state.dots.push(
            <span 
                className="colorDot" 
                id={this.state.productID + "Color" + i} 
                key = {this.state.productID + "Color" + i} 
                style = {{background: "#" + this.props.ProductInfo.ProductColors[i], 
                            backgroundOrigin: "content-box", 
                            backgroundClip: "content-box"}}
                ></span>
                );
        }
        }
        else{
            for(let i = 0; i < this.state.productTotalColors; ++i)
        {
            if(i==3)
            {
                this.state.dots.push(
                <span 
                    className="colorDot" 
                    id={"ExtraColors"} 
                    key = {"ExtraColors"} 
                    style = {{background: "grey", padding: "0px", color: "white"}}
                >{"+" + (this.state.productTotalColors - i)}</span>
                )
                return;
            }
            this.state.dots.push(
            <span 
                className="colorDot" 
                id={this.state.productID + "Color" + i} 
                key = {this.state.productID + "Color" + i} 
                style = {{background: "#" + this.props.ProductInfo.ProductColors[i], 
                            backgroundOrigin: "content-box", 
                            backgroundClip: "content-box"}}
                ></span>
                );
        }
        }
        
    }


    render()
    {
        return(
            <div fluid-fixed="true" id={this.props.ProductID} className="mobileProductContainer">
                <Row className = "imageRow">
                    <Col xs={12}>
                        <img src={this.props.ProductInfo.imgsrc} alt={this.props.ProductInfo.ProductName}></img>
                        <span className="spanMobile" style={{backgroundColor: "grey", marginLeft:"5%", marginTop:"3px", width: "90%", height: "2px"}}></span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Row className="infoRow">
                            <Col xs={7} >
                                <Row>
                                    <span className="spanMobile TitleMobile">{this.props.ProductInfo.ProductName}</span>
                                </Row>
                                <Row>
                                    <span className="spanMobile">{this.props.ProductInfo.ProductShortDescription}</span>
                                </Row>
                                <Row>
                                    <span className="spanMobile">Product Code: {this.props.ProductInfo.ProductCode}</span>
                                </Row>
                            </Col>
                            <Col xs={3} className="colorColumn">
                                {this.state.dots}
                            </Col>
                        </Row>
                    </Col>
                    
                    <Col xs={1}></Col>
                </Row>
            </div>
        )
    }

}

export default ProductMobile;