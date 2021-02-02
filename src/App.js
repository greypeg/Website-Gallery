import React from "react";
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  //when app loads up 
  return(
  <>
      <Navbar/>
      <Main/>
      <Footer/>
  </>
  );
}

export default App;
