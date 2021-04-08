import React from 'react'
import './Product.css'


const colors = ["7C3E29", "874E3B", "5C4736", "322423", "322423", "322423", "5C4736", "5C4736"];

class ProductDesktop extends React.Component {

    
    constructor(props)
    {
        super(props);
        console.log(props);
        this.state = {
            productTotalColors: props.ProductColors.length, 
            dots: [],
        }
        this.initiateColorsForProduct = this.initiateColorsForProduct.bind(this);
        this.initiateColorsForProduct();
    }

    initiateColorsForProduct()
    {
        for(let i = 0; i < this.state.productTotalColors; ++i)
        {
            this.state.dots.push(<span className="colorDot" id={this.state.productID + "Color" + i} key = {this.props.productID + "Color" + i} style = {{background: "#" + this.props.ProductColors[i]}}></span>)
        }
    }

    render()
    {
        return (
            <div className="container-fluid ProductContainer" >
                <img src={this.props.picsrc} className="PictureStyle" alt={this.props.ProductDesc}/>
                <h3 className="pictureOverlayHeader">{this.props.ProductName}</h3>
                <span className="pictureOverlayColourText">Available Colours</span>
                <div className="colorDiv">
                    {this.state.dots}
                </div>
                <span className="pictureOverlayProductID">Product Code: {this.props.ProductCode}</span>
                <span className="carousel-caption TextStyle">
                    {this.props.ProductName}
                </span>
    
            </div>
        )
    }
    
}


export default ProductDesktop
