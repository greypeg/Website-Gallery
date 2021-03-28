import React from 'react'
import './Product.css'
import bag1 from "../images/bag1.jpg"

function ProductDesktop() {
    return (
        <div className="container-fluid ProductContainer">
            <img src={bag1} className="PictureStyle" alt="bag1"/>
            <span className="carousel-caption TextStyle">
                MyGreatText
            </span>
        </div>
    )
}

export default ProductDesktop
