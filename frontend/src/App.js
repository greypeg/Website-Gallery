import React from "react";
import './App.css';
import './components/NavbarMini.css'
import Navbar from './components/Navbar'
import NavbarMini from './components/NavbarMini'
import HomeScreen from "./components/HomeScreen";
function App() {
  //when app loads up 
  return(
  <>
      <NavbarMini/>
      <Navbar/>
      <HomeScreen/>
  </>
  );
}

export default App;
