import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import publicip from 'public-ip'
import './App.css';
import './components/NavbarMini.css'
import Navbar from './components/Navbar'
import NavbarMini from './components/NavbarMini'
import HomeScreen from "./components/HomeScreen";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import publicIp from "public-ip";

const CategoriesEnum = {
  Handbags    : 0,
  Backpacks   : 1,
  Shoulderbags: 2,
  ShoppingBags: 3,
  CrossBodyBags: 4,
  MessengerBags: 5,
  All         : 6
};

const Sorting = {
  AlphIncremental : 0,
  AlphDecremental : 1,
  NewestToOldest  : 2,
  OldestToNewset  : 3
};

const Pages = {
  Home : 0,
  Product: 1,
  About : 2,
  test: 3,
};

class App extends React.Component {
  //when app loads up 

  constructor(props)
  {
    super(props);
    this.state = {
      SelectedCategory: CategoriesEnum.All,
      SelectedSorting: Sorting.AlphIncremental,
      NumberOfDisplayedItems: 100,
      DisplayedPage: Pages.Home,
      windowWidth: window.innerWidth,
      previousPage: Pages.Home,
      MainContent: [],
      ProductPageInfo: undefined,
      publicIP: "172.104.130.5",
    };

    this.changeSelectedCategory = this.changeSelectedCategory.bind(this);
    this.changeSelectedSorting = this.changeSelectedSorting.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.updateMainContent = this.updateMainContent.bind(this);

    this.updateMainContent(Pages.Home, true);


  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
   };
  
   componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    window.onpopstate = (event) => {
      console.log(event);
    }
   }
  
   componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
   } 

  changeSelectedCategory(newCategory)
  {
    if(newCategory >= 0 && newCategory < 7)
      this.setState({
        SelectedCategory: newCategory
      });

  }

  changeSelectedSorting(newSorting)
  {
    if(newSorting >= 0 && newSorting < 4)
      this.setState({
        SelectedSorting: newSorting
      });

  }

  updateMainContent(TypeOfPageDisplayed, init=false)
  {
    if((TypeOfPageDisplayed>=0 && TypeOfPageDisplayed < 3 && this.state.DisplayedPage !== TypeOfPageDisplayed) || init)
    {
      this.state.MainContent = [];

      this.state.MainContent.push(
          <Route key="HomeScreen" path="/" exact render={(props) => (
            <HomeScreen {...props}
              changeSelectedCategory={(number) => this.changeSelectedCategory(number)}
              changeSelectedSorting={(number) => this.changeSelectedSorting(number)}
              windowWidth={this.state.windowWidth}
              displayedItems={this.state.NumberOfDisplayedItems}
              categorySelected={this.state.SelectedCategory}
              sortingSelected = {this.state.SelectedSorting}
              backendIP = {this.state.publicIP}
            />
          )}>
          </Route>,
      );
      this.state.MainContent.push(
          <Route key="ProductPage" path="/Products" render={(props) => (
            <ProductPage {...props} backendIP = {this.state.publicIP}/>
          )}/>
        );
    
      this.state.MainContent.push(
        <Route key="AboutUs" path="/AboutUs" render={(props) => (
          <About></About>
        )}/>
      );

      this.state.MainContent.push(
        <Route key="ContactUs" path="/ContactUs" render={(props) => (
          <Contact></Contact>
        )}/>
      );
      
      this.setState({
        previousPage: this.state.DisplayedPage,
        DisplayedPage: TypeOfPageDisplayed
      });
    }

  }

  render()
  {
    return(
      <Router>
        <NavbarMini/>
        <Navbar handleNavButtonClick = {this.handleNavButtonClick}/>
        <Switch>
          {this.state.MainContent}
        </Switch>
        <Footer/>
      </Router>
    );
  }
  
}


export default App;
