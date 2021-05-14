import "./ProductMobile.css"
import React from "react";
import {Row, Col} from 'react-bootstrap'

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
            if(i===5)
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
                style = {{background: this.props.ProductInfo.ProductColors[i], 
                            backgroundOrigin: "content-box", 
                            backgroundClip: "content-box"}}
                ></span>
                );
        }
        }
        else{
            for(let i = 0; i < this.state.productTotalColors; ++i)
        {
            if(i===3)
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
                style = {{background: this.props.ProductInfo.ProductColors[i], 
                            backgroundOrigin: "content-box", 
                            backgroundClip: "content-box"}}
                ></span>
                );
        }
        }
        
    }


    render()
    {
        var ProductFolder = "productimages/" + this.props.ProductInfo.ProductFolder + "/";
        return(
            <div fluid-fixed="true" id={this.props.ProductInfo.ProductCode} className="mobileProductContainer">
                <Row className = "imageRow">
                    <Col xs={12} className = "imageCol">
                        <img src={ProductFolder + this.props.ProductInfo.imgsrc} alt={this.props.ProductInfo.ProductName}></img>
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