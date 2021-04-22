import "./ProductPageCarousel.css"
import '../../node_modules/bootstrap';
import React from "react";
import bagsrc1 from "../images/bag1.jpg"
import bagsrc2 from "../images/bag2.jpg"
import bagsrc3 from "../images/bag3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


/*
*   this.props = {
*       ProductImageSources: Array of Strings (select 1 as default image source),
*       ProductImageAlts: Array of Strings
*        }
*/

class ProductPageCarousel extends React.Component{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        var i = 0;
        return (
            <div>
                <Carousel 
                    autoPlay  
                    interval="5000" transitionTime="1000" 
                    className="product-carousel">
                    <div>
                        <img src="https://picsum.photos/700/400?img=1" className="carouselImage"/>
                        <p className="legend">My Classic Still {++i}</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=2" className="carouselImage"/>
                        <p className="legend">My Classic Still {++i}</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=3" className="carouselImage"/>
                        <p className="legend">My Classic Still {++i}</p>
                    </div>
                    <div>
                        <img src={bagsrc1} className="carouselImage"/>
                        <p className="legend">My Classic Still {++i}</p>
                    </div>
                    <div>
                        <img src={bagsrc2} className="carouselImage"/>
                        <p className="legend">My Classic Still {++i}</p>
                    </div>
                    <div>
                        <img src={bagsrc3} className="carouselImage"/>
                        <p className="legend">My Classic Still {++i}</p>
                    </div>

                </Carousel>
            </div>
        )
    }
}

export default ProductPageCarousel