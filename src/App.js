import React from "react";
import './App.css';
import './components/NavbarMini.css'
import Navbar from './components/Navbar'
import NavbarMini from './components/NavbarMini'
import HomeScreen from "./components/HomeScreen";
import ItemCarousel from "./components/itemCarousel";
import SortFilter from "./components/Sort_Filters";
import ProductPage from "./components/ProductPage";


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
      DisplayedPage: Pages.Home,
      windowWidth: window.innerWidth,
      previousPage: Pages.Home,
      MainContent: [],
      ProductPageInfo: undefined
    };

    this.changeSelectedCategory = this.changeSelectedCategory.bind(this);
    this.changeSelectedSorting = this.changeSelectedSorting.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.changeDisplayedPage = this.changeDisplayedPage.bind(this);
    this.handleOpenProductPage = this.handleOpenProductPage.bind(this);
    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);

    this.changeDisplayedPage(Pages.Home, true);
  }

  handleOpenProductPage(SelectedProductInfo)
  {
    this.setState({ 
      ProductPageInfo: SelectedProductInfo
    },() => { this.changeDisplayedPage(Pages.Product) }) ;
  }

  handleNavButtonClick(NavButtonClicked)
  {
    switch(NavButtonClicked)
    {
      case Pages.Home:
        if(this.state.DisplayedPage === Pages.Home) return;
        
        this.changeDisplayedPage(Pages.Home);
        break;
      case Pages.About:
        if(this.state.DisplayedPage === Pages.About) return;

        this.changeDisplayedPage(Pages.About);
        break;
      default:
        console.error("How did you even get here? Please report the bug to our devs");
        break;
    }
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
      
      switch(newPage)
      {
        case Pages.Home:

          this.state.MainContent = [
              <ItemCarousel key="HomeCarousel"/>,
              <SortFilter key="SortFilters" changeSelectedCategory={this.changeSelectedCategory} changeSelectedSorting={this.changeSelectedSorting}/>,
              <HomeScreen key="HomeScreen" OpenProductPageHandler={this.handleOpenProductPage} windowWidth={this.state.windowWidth} displayedItems={displayedItems} categorySelected={categoryDisplayed} sortingSelected = {sortingSelected}/>,
            ];
          break;
        case Pages.Product:

          this.state.MainContent = [
              <ProductPage key="ProductPage" ProductInfoDemo = {this.state.ProductPageInfo}/>,
            ];

          break;
        case Pages.About:

          this.state.MainContent = [
              <span key="AboutUs">About us :)</span>
            ];

          break;
        default:
          console.error("How did you get here? Please contact our devs");
          break;
      }
      
      this.setState({
        previousPage: this.state.DisplayedPage,
        DisplayedPage: newPage
      });
      console.log(this.state.MainContent);
    }

  }

  render()
  {
    return(
      <>
          <NavbarMini/>
          <Navbar handleNavButtonClick = {this.handleNavButtonClick}/>
          {this.state.MainContent}
      </>
      );
  }
  
}

export default App;
