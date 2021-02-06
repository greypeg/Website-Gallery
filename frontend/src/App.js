import React from "react";
import './App.css';
import './components/NavbarMini.css'
import Navbar from './components/Navbar'
import Main from './components/Main';
import NavbarMini from './components/NavbarMini'


function App() {
  //when app loads up 
  return(
  <>
      <NavbarMini/>
      <Navbar/>
      <Main/>
  </>
  );
}

export default App;
