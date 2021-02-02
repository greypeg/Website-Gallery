import React,{useState} from 'react'
import '../App.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/features">Features</a>
                <a href="/contact">Contact</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>{""} <MenuIcon style={{ color: "#fffff" }}/></button>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Search..."/>
                <button><SearchIcon style={{ color: "#fffff" }}/></button>
            </div>
        </div>
    )
}

export default Navbar
