import React from "react";
import './App.css';
import './components/NavbarMini.css'
import Navbar from './components/Navbar'
import NavbarMini from './components/NavbarMini'
import HomeScreen from "./components/HomeScreen";
import ItemCarousel from "./components/itemCarousel";
import SortFilter from "./components/Sort_Filters";

function App() {
  //when app loads up 
  return(
  <>
      <NavbarMini/>
      <Navbar/>
      <ItemCarousel/>
      <SortFilter/>
      {/* <HomeScreen/> */}
  </>
  );
}

export default App;
