import React,{useState,useEffect, useRef} from 'react'
import "./Main.css"
import bag1 from './images/bag1.jpg';
import bag2 from './images/bag2.jpg';
import bag3 from './images/bag3.jpg';
import bag4 from './images/bag3.jpg'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const images = [
    {img:bag1, title:"bag1"},
    {img:bag2, title:"bag2"},
    {img:bag3, title:"bag3"},
    {img:bag4, title:"bag3"}
];

function Main() {
    const [currImage, setCurrImage] = useState(0);
    const savedCallback = useRef();

    function callback() {
        setCurrImage(currImage+ 1);
        if(currImage>=2)
        setCurrImage(0)
      }

      useEffect(() => {
        savedCallback.current = callback;
      });

      useEffect(() => {
        function tick() {
        savedCallback.current()
        }

        let id = setInterval(tick, 5000);
        return () => clearInterval(id);
      }, []);
  
    return (
        <div className="main">
        <div className="carousel">
            <div className="carouselInner" style={{backgroundImage: `url(${images[currImage].img})`}}>
                <div className="left"
                 onClick={() => {
                     currImage > 0 && setCurrImage(currImage-1)}}>
                    <ArrowBackIosIcon style={{fontSize: 40}}/>
                </div>
                <div className="center">
                </div>
                <div className="right" onClick={() => {
                    currImage < images.length-1 && setCurrImage(currImage+1)}}>
                <ArrowForwardIosIcon style={{fontSize: 40}}/>
                </div>
            </div>
        </div>
        <a href="/" className="btn">View our Gallery</a>
        </div>
    );
}

export default Main

