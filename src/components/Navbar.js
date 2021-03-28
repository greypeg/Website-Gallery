import React from 'react'
import './Navbar.css'
import logoe from '../images/logoe.png';


function Navbar() {


    return (
        <div className="Navbar container-fluid">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-2 leftSide">
                    <a href="/">
                        <img src={logoe} alt="Logo" style={{ height: 73 }}/>
                    </a>
                </div>
                <div className="col-lg-4 centerSide">
                    <input type="search" placeholder="  Search..."></input>
                    <span className="iconify" data-icon="bx:bx-search" data-inline="false"></span>
                </div>
                <div className="col-lg-4 rightSide links">
                    <div className="row">
                        <div className="col-lg align-self-end">
                            <a href="/home">Home</a>
                        </div>
                        <div className="col-lg align-self-end">
                            <a href="/aboutus" style={{marginLeft: '-12%'}}>About us</a>
                        </div>
                        <div className="col-lg align-self-end">
                            <a href="/contact">Contact</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    )
}

export default Navbar
