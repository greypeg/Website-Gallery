import React from 'react'
import './ProductDesktop.css'

class ProductDesktop extends React.Component {

    
    constructor(props)
    {
        super(props);
        this.state = {
            productTotalColors: props.ProductInfo.ProductColors.length, 
            dots: [],
        }
        this.initiateColorsForProduct = this.initiateColorsForProduct.bind(this);
        this.initiateColorsForProduct();
    }

    initiateColorsForProduct()
    {
        for(let i = 0; i < this.state.productTotalColors; ++i)
        {
            this.state.dots.push(<span className="colorDot" id={this.state.productID + "Color" + i} key = {this.props.ProductInfo.productID + "Color" + i} style = {{background: "#" + this.props.ProductInfo.ProductColors[i]}}></span>)
        }
    }

    render()
    {
        return (
            <div className="container-fluid ProductContainer" >
                <img src={this.props.ProductInfo.imgsrc} className="PictureStyle" alt={this.props.ProductInfo.ProductShortDesc}/>
                <h3 className="pictureOverlayHeader">{this.props.ProductInfo.ProductName}</h3>
                <span className="pictureOverlayColourText">Available Colours</span>
                <div className="colorDiv">
                    {this.state.dots}
                </div>
                <span className="pictureOverlayProductID">Product Code: {this.props.ProductInfo.ProductCode}</span>
                <span className="carousel-caption TextStyle">
                    {this.props.ProductInfo.ProductName}
                </span>
    
            </div>
        )
    }
    
}


export default ProductDesktop
