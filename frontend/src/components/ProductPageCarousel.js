import "./ProductPageCarousel.css"
import 'bootstrap';
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


/*
*   this.props = {
*       ProductImageSources: Array of Strings (select 1 as default image source),
*       ProductImageAlts: Array of Strings,
        ProductFolder: String
*       }
*/

class ProductPageCarousel extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            imagesArray: []
        }
        
        this.initCarousel = this.initCarousel.bind(this);
        this.initCarousel();
    }

    initCarousel(){
        var ProductFolderPath = "productimages/" + this.props.ProductFolder + "/";
        for(let i = 0; i<this.props.ProductImageSources.length; ++i)
        {
            this.state.imagesArray.push(
            <div key={this.props.ProductImageSources[i]}>
                <img src={ProductFolderPath + this.props.ProductImageSources[i]} alt={this.props.ProductImageAlts[i]}className="carouselImage"/>
            </div>
            )
        }
    }

    render()
    {
        return (
            <div>
                <Carousel 
                    autoPlay  
                    interval="5000" transitionTime="1000" 
                    className="product-carousel"
                    showArrows>
                    
                    {this.state.imagesArray}
                
                </Carousel>
            </div>
        )
    }
}

export default ProductPageCarousel