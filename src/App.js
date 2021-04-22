import React from "react";
import './App.css';
import './components/NavbarMini.css'
import Navbar from './components/Navbar'
import NavbarMini from './components/NavbarMini'
import HomeScreen from "./components/HomeScreen";
import ItemCarousel from "./components/itemCarousel";
import SortFilter from "./components/Sort_Filters";
import ProductPage from "./components/ProductPage";
import ProductMobile from "./components/ProductMobile";

const CategoriesEnum = {
  Handbugs    : 0,
  Backpacks   : 1,
  Shouldebags : 2,
  Hats        : 3,
  All         : 4
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

  // TODO:
  //  Breadcrumbs
  //  StateList
  //  Button's that actually work
  //  Create Database.
  constructor(props)
  {
    super(props);
    this.state = {
      SelectedCategory: CategoriesEnum.All,
      SelectedSorting: Sorting.AlphIncremental,
      NumberOfDisplayedItems: 6,
      DisplayedPage: Pages.Product,
      windowWidth: window.innerWidth,
      previousPage: Pages.Product,
      MainContent: []
    };

    this.changeSelectedCategory = this.changeSelectedCategory.bind(this);
    this.changeSelectedSorting = this.changeSelectedSorting.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.changeDisplayedPage = this.changeDisplayedPage.bind(this);

    this.changeDisplayedPage(Pages.Home, true);
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
   };
  
   componentDidMount() {
    window.addEventListener("resize", this.handleResize);
   }
  
   componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
   } 

  changeSelectedCategory(newCategory)
  {
    if(newCategory >= 0 && newCategory < 5)
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

  changeDisplayedPage(newPage, init=false)
  {
    
    if((newPage>=0 && newPage < 3 && this.state.DisplayedPage !== newPage) || init)
    {
      const categoryDisplayed = this.state.SelectedCategory;
      const sortingSelected = this.state.SelectedSorting;
      const displayedItems  = this.state.NumberOfDisplayedItems;
      
      this.setState({
        previousPage: this.state.DisplayedPage,
        DisplayedPage: newPage
      });

      switch(newPage)
      {
        case Pages.Home:
          this.state.MainContent = [];
          this.state.MainContent.push(<ItemCarousel key="HomeCarousel"/>);
          this.state.MainContent.push(<SortFilter key="SortFilters" changeSelectedCategory={this.changeSelectedCategory} changeSelectedSorting={this.changeSelectedSorting}/>);
          this.state.MainContent.push(<HomeScreen key="HomeScreen" windowWidth={this.state.windowWidth} displayedItems={displayedItems} categorySelected={categoryDisplayed} sortingSelected = {sortingSelected}/>);
          break;
        case Pages.Product:
          this.state.MainContent = [];
          this.state.MainContent.push(<ProductPage/>);
          break;
        case Pages.About:
          break;
        default:
          this.state.MainContent = [];
          this.state.MainContent.push(<ProductMobile/>)
          break;
      }
    }

  }

  render()
  {
    return(
      <>
          <NavbarMini/>
          <Navbar/>
          {this.state.MainContent}
      </>
      );
  }
  
}

export default App;
