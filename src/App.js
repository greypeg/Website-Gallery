import React from "react";
import './App.css';
import './components/NavbarMini.css'
import Navbar from './components/Navbar'
import NavbarMini from './components/NavbarMini'
import HomeScreen from "./components/HomeScreen";
import ItemCarousel from "./components/itemCarousel";
import SortFilter from "./components/Sort_Filters";

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

class App extends React.Component {
  //when app loads up 
  constructor(props)
  {
    super(props);
    this.state = {
      SelectedCategory: CategoriesEnum.All,
      SelectedSorting: Sorting.AlphIncremental,
      NumberOfDisplayedItems: 3
    };

    this.changeSelectedCategory = this.changeSelectedCategory.bind(this);
    this.changeSelectedSorting = this.changeSelectedSorting.bind(this);
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

  render()
  {
    const categoryDisplayed = this.state.SelectedCategory;
    const sortingSelected = this.state.SelectedSorting;
    const displayedItems  = this.state.NumberOfDisplayedItems;

    return(
      <>
          <NavbarMini/>
          <Navbar/>
          <ItemCarousel/>
          <SortFilter changeSelectedCategory={this.changeSelectedCategory} changeSelectedSorting={this.changeSelectedSorting}/>
          <HomeScreen displayedItems={displayedItems} categorySelected={categoryDisplayed} sortingSelected = {sortingSelected}/>
      </>
      );
  }
  
}

export default App;
