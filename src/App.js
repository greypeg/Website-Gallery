import React from "react";
import './App.css';
import './components/NavbarMini.css'
import Navbar from './components/Navbar'
import NavbarMini from './components/NavbarMini'
import HomeScreen from "./components/HomeScreen";
import ItemCarousel from "./components/itemCarousel";

function App() {
  //when app loads up 
  return(
  <>
      <NavbarMini/>
      <Navbar/>
      <ItemCarousel/>
      <HomeScreen/>
  </>
  );
}

export default App;
