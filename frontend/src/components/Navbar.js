import React from 'react'
import './Navbar.css'
import logoe from './images/logoe.png';


function Navbar() {


    return (
        <div className="Navbar">
            <div className="leftSide">
            <a href="/">
                <img src={logoe} alt="Logo" style={{ height: 100 }}/>
            </a>
                </div>
                 <div className="rightSide">
                <div className="links">
                <a href="/home">Home</a>
                <a href="/gallery">Gallery</a>
                <a href="/aboutus">About us</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
