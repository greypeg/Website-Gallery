import React from "react";
import ProductGallery from "./ProductGallery";
import ItemCarousel from "./itemCarousel";
import SortFilter from "./Sort_Filters";

class HomeScreen extends React.Component{
    render()
    {
        return(
            <div>  
                <ItemCarousel key="HomeCarousel" backendIP = {this.props.backendIP}/>
                <SortFilter key="SortFilters" 
                    changeSelectedCategory = {(number) => this.props.changeSelectedCategory(number)} 
                    changeSelectedSorting = {(number) => this.props.changeSelectedSorting(number)}
                />
                <ProductGallery key="ProductGallery"
                    OpenProductPageHandler={this.props.OpenProductPageHandler}
                    windowWidth={this.props.windowWidth}
                    displayedItems={this.props.displayedItems}
                    categorySelected={this.props.categorySelected}
                    sortingSelected={this.props.sortingSelected}
                    backendIP = {this.props.backendIP}
                />
            </div>
        )
    }
}

export default HomeScreen;