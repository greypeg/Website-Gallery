import "./HomeScreen.css";
import ProductDesktop from "./ProductDesktop"
import ProductMobile from "./ProductMobile"
import {Container, Row, Col} from 'react-bootstrap'
import React from "react";
import bagsrc1 from "../images/bag1.jpg"
import bagsrc2 from "../images/bag2.jpg"
import bagsrc3 from "../images/bag3.jpg"
 

const Products = [
    {
        ProductName: "Leather Backpack",
        ProductDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ligula erat, \
                                ut semper mauris mollis vel. Duis fermentum a quam facilisis vulputate. Aenean id velit non ex sagittis posuere et id odio.\
                                Nulla aliquet, libero nec pulvinar efficitur, orci lectus tempus libero, et varius nunc turpis a metus.\
                                Mauris ac leo id lacus tempus pulvinar. Praesent diam est, tempus a massa mollis, condimentum commodo justo.\
                                Curabitur malesuada est vitae arcu bibendum, vel pretium nisl elementum. Sed vehicula justo sagittis erat ultrices scelerisque.\
                                Fusce ut ante sem. Vivamus vitae mattis libero, vitae rhoncus tellus. Sed id vestibulum erat, sed eleifend est.\
                                Sed in erat eu odio pharetra ullamcorper commodo finibus justo. Vestibulum interdum semper arcu, sit amet porta massa rutrum eu.\
                                Nulla accumsan diam eget consectetur auctor.",

        ProductCode: "001",
        ProductColors: ["7C3E29", "874E3B", "5C4736", "322423", "322423", "5C4736", "5C4736", "322423", "322423", "322423", "5C4736", "5C4736"],
        ProductColorCodes: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012"],
        imgsrc: bagsrc1,
        carouselimageSources: [bagsrc1, bagsrc2, bagsrc3, bagsrc2, bagsrc3],
        carouselimageAlts: ["bag1", "bag2", "bag3", "bag2", "bag3"],
        ProductShortDescription: "Leather, Back"
    },
    {
      ProductName: "Leather Backpack Blue",
      ProductDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ligula erat, \
                              ut semper mauris mollis vel. Duis fermentum a quam facilisis vulputate. Aenean id velit non ex sagittis posuere et id odio.\
                              Nulla aliquet, libero nec pulvinar efficitur, orci lectus tempus libero, et varius nunc turpis a metus.\
                              Mauris ac leo id lacus tempus pulvinar. Praesent diam est, tempus a massa mollis, condimentum commodo justo.\
                              Curabitur malesuada est vitae arcu bibendum, vel pretium nisl elementum. Sed vehicula justo sagittis erat ultrices scelerisque.\
                              Fusce ut ante sem. Vivamus vitae mattis libero, vitae rhoncus tellus. Sed id vestibulum erat, sed eleifend est.\
                              Sed in erat eu odio pharetra ullamcorper commodo finibus justo. Vestibulum interdum semper arcu, sit amet porta massa rutrum eu.\
                              Nulla accumsan diam eget consectetur auctor.",

      ProductCode: "002",
      ProductColors: ["7C3E29", "874E3B", "5C4736", "322423", "322423", "5C4736", "5C4736", "322423", "322423", "322423", "5C4736", "5C4736"],
      ProductColorCodes: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012"],
      imgsrc: bagsrc2,
      carouselimageSources: [bagsrc1, bagsrc2, bagsrc3, bagsrc2, bagsrc3],
      carouselimageAlts: ["bag1", "bag2", "bag3", "bag2", "bag3"],
      ProductShortDescription: "Leather, Back"
  },
  {
    ProductName: "Leather Backpack Red",
    ProductDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ligula erat, \
                            ut semper mauris mollis vel. Duis fermentum a quam facilisis vulputate. Aenean id velit non ex sagittis posuere et id odio.\
                            Nulla aliquet, libero nec pulvinar efficitur, orci lectus tempus libero, et varius nunc turpis a metus.\
                            Mauris ac leo id lacus tempus pulvinar. Praesent diam est, tempus a massa mollis, condimentum commodo justo.\
                            Curabitur malesuada est vitae arcu bibendum, vel pretium nisl elementum. Sed vehicula justo sagittis erat ultrices scelerisque.\
                            Fusce ut ante sem. Vivamus vitae mattis libero, vitae rhoncus tellus. Sed id vestibulum erat, sed eleifend est.\
                            Sed in erat eu odio pharetra ullamcorper commodo finibus justo. Vestibulum interdum semper arcu, sit amet porta massa rutrum eu.\
                            Nulla accumsan diam eget consectetur auctor.",

    ProductCode: "003",
    ProductColors: ["7C3E29", "874E3B", "5C4736", "322423", "322423", "5C4736", "5C4736", "322423", "322423", "322423", "5C4736", "5C4736"],
    ProductColorCodes: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012"],
    imgsrc: bagsrc3,
    carouselimageSources: [bagsrc1, bagsrc2, bagsrc3, bagsrc2, bagsrc3],
    carouselimageAlts: ["bag1", "bag2", "bag3", "bag2", "bag3"],
    ProductShortDescription: "Leather, Back"
  },
  {
    ProductName: "Leather Backpack Green-Yellow",
    ProductDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ligula erat, \
                            ut semper mauris mollis vel. Duis fermentum a quam facilisis vulputate. Aenean id velit non ex sagittis posuere et id odio.\
                            Nulla aliquet, libero nec pulvinar efficitur, orci lectus tempus libero, et varius nunc turpis a metus.\
                            Mauris ac leo id lacus tempus pulvinar. Praesent diam est, tempus a massa mollis, condimentum commodo justo.\
                            Curabitur malesuada est vitae arcu bibendum, vel pretium nisl elementum. Sed vehicula justo sagittis erat ultrices scelerisque.\
                            Fusce ut ante sem. Vivamus vitae mattis libero, vitae rhoncus tellus. Sed id vestibulum erat, sed eleifend est.\
                            Sed in erat eu odio pharetra ullamcorper commodo finibus justo. Vestibulum interdum semper arcu, sit amet porta massa rutrum eu.\
                            Nulla accumsan diam eget consectetur auctor.",

    ProductCode: "004",
    ProductColors: ["7C3E29", "874E3B", "5C4736", "322423", "322423", "5C4736", "5C4736", "322423", "322423", "322423", "5C4736", "5C4736"],
    ProductColorCodes: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012"],
    imgsrc: bagsrc1,
    carouselimageSources: [bagsrc1, bagsrc2, bagsrc3, bagsrc2, bagsrc3],
    carouselimageAlts: ["bag1", "bag2", "bag3", "bag2", "bag3"],
    ProductShortDescription: "Leather, Back"
  },
  {
    ProductName: "Leather Backpack Black Blue And Pink",
    ProductDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ligula erat, \
                            ut semper mauris mollis vel. Duis fermentum a quam facilisis vulputate. Aenean id velit non ex sagittis posuere et id odio.\
                            Nulla aliquet, libero nec pulvinar efficitur, orci lectus tempus libero, et varius nunc turpis a metus.\
                            Mauris ac leo id lacus tempus pulvinar. Praesent diam est, tempus a massa mollis, condimentum commodo justo.\
                            Curabitur malesuada est vitae arcu bibendum, vel pretium nisl elementum. Sed vehicula justo sagittis erat ultrices scelerisque.\
                            Fusce ut ante sem. Vivamus vitae mattis libero, vitae rhoncus tellus. Sed id vestibulum erat, sed eleifend est.\
                            Sed in erat eu odio pharetra ullamcorper commodo finibus justo. Vestibulum interdum semper arcu, sit amet porta massa rutrum eu.\
                            Nulla accumsan diam eget consectetur auctor.",

    ProductCode: "005",
    ProductColors: ["7C3E29", "874E3B", "5C4736", "322423", "322423", "5C4736", "5C4736", "322423", "322423", "322423", "5C4736", "5C4736"],
    ProductColorCodes: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012"],
    imgsrc: bagsrc2,
    carouselimageSources: [bagsrc1, bagsrc2, bagsrc3, bagsrc2, bagsrc3],
    carouselimageAlts: ["bag1", "bag2", "bag3", "bag2", "bag3"],
    ProductShortDescription: "Leather, Back"
  },
  {
    ProductName: "Leather Backpack whatever...",
    ProductDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ligula erat, \
                            ut semper mauris mollis vel. Duis fermentum a quam facilisis vulputate. Aenean id velit non ex sagittis posuere et id odio.\
                            Nulla aliquet, libero nec pulvinar efficitur, orci lectus tempus libero, et varius nunc turpis a metus.\
                            Mauris ac leo id lacus tempus pulvinar. Praesent diam est, tempus a massa mollis, condimentum commodo justo.\
                            Curabitur malesuada est vitae arcu bibendum, vel pretium nisl elementum. Sed vehicula justo sagittis erat ultrices scelerisque.\
                            Fusce ut ante sem. Vivamus vitae mattis libero, vitae rhoncus tellus. Sed id vestibulum erat, sed eleifend est.\
                            Sed in erat eu odio pharetra ullamcorper commodo finibus justo. Vestibulum interdum semper arcu, sit amet porta massa rutrum eu.\
                            Nulla accumsan diam eget consectetur auctor.",

    ProductCode: "006",
    ProductColors: ["7C3E29", "874E3B", "5C4736", "322423", "322423", "5C4736", "5C4736", "322423", "322423", "322423", "5C4736", "5C4736"],
    ProductColorCodes: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012"],
    imgsrc: bagsrc3,
    carouselimageSources: [bagsrc1, bagsrc2, bagsrc3, bagsrc2, bagsrc3],
    carouselimageAlts: ["bag1", "bag2", "bag3", "bag2", "bag3"],
    ProductShortDescription: "Leather, Back"
  }
  ]

class HomeScreen extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {
      Products: [],
      SelectedSorting: this.props.sortingSelected,
      SelectedGenre: this.props.categorySelected,
      NumberOfDisplayedItems: this.props.displayedItems,
    };

    this.UpdateInfo = this.UpdateInfo.bind(this);
    this.initProducts = this.initProducts.bind(this);

    this.initProducts();
  }

  UpdateInfo()
  {
    if(
      this.state.SelectedGenre !== this.props.categorySelected ||
      this.state.SelectedSorting !== this.props.sortingSelected ||
      this.state.NumberOfDisplayedItems !== this.props.displayedItems
      )
      {
        this.setState({
          SelectedSorting : this.props.sortingSelected,
          SelectedGenre : this.props.categorySelected,
          NumberOfDisplayedItems : this.props.displayedItems
        });
      }

    // create Products Array
  }

  // We will query the server with a specified category, sorting and we will display a number of items equal to totalProducts. Response will be into Products var.
  initProducts()
  {

    var totalProducts = this.state.NumberOfDisplayedItems;
    // let sorting = this.state.SelectedSorting;
    // let category = this.state.categorySelected;
    var Cols = [];

    // our product list may be shorter than the expected amount of products the user wants displayed.
    totalProducts = (totalProducts < Products.length ? totalProducts : Products.length);

    var ProductsPerRow;

    if(this.props.windowWidth > 1200)
    {

      ProductsPerRow = 3;
      for(let i = 0; i < totalProducts; ++i)
      {
        Cols.push(
            <Col onClick={() => this.props.OpenProductPageHandler(Products[i])} md={4} key={"Product" + i + "Col"} className = "homescreen__products">
              <ProductDesktop 
                ProductID={"Product" + Products[i].ProductCode}
                ProductInfo={Products[i]}
              ></ProductDesktop>
            </Col>
        );
      }

      for (let i = 0; i < totalProducts;)
      {
        if(i + ProductsPerRow <= totalProducts)
        {
          this.state.Products.push(
            <Row key={"Product" + i + "-" + i+2 + "Row"} className="rowSize">
              <Col lg={1}></Col>
              <Col lg={10}>
                <Row>
                  {Cols[i++]}
                  {Cols[i++]}
                  {Cols[i++]}
                </Row>
              </Col>
              <Col lg={1}></Col>
            </Row>
          )
        }
        else if(i + (ProductsPerRow-1) < totalProducts)
        {
          this.state.Products.push(
            <Row key={"Product" + i + "-" + i+1 + "Row"} className="rowSize">
              <Col lg={1}></Col>
              <Col lg={10}>
                <Row>
                  {Cols[i++]}
                  {Cols[i++]}
                </Row>
              </Col>
              <Col lg={1}></Col>
            </Row>
          )
        }
        else
        {
          this.state.Products.push(
            <Row key={"Product" + i + "-" + i + "Row"} className="rowSize">
              <Col lg={1}></Col>
              <Col lg={10}>
                <Row>
                  {Cols[i++]}
                </Row>
              </Col>
              <Col lg={1}></Col>
            </Row>
          )
        }
      }
    }
    else if (this.props.windowWidth < 768)
    {
      ProductsPerRow = 2;
      for(let i = 0; i < totalProducts; ++i)
      {
        Cols.push(
            <Col onClick={() => this.props.OpenProductPageHandler(Products[i])} xs={6} key={"Product" + i + "Col"} className = "homescreen__products">
              <ProductMobile 
                ProductID={"Product" + Products[i].ProductCode}
                ProductInfo={Products[i]}
              ></ProductMobile>
            </Col>
        );
      }

      for (let i = 0; i < totalProducts;)
      {
        if(i + ProductsPerRow <= totalProducts)
        {
          this.state.Products.push(
            <Row key={"Product" + i + "-" + i+2 + "Row"} className="rowSize">
              <Col xs={12}>
                <Row>
                  {Cols[i++]}
                  {Cols[i++]}
                </Row>
              </Col>
            </Row>
          )
        }
        else if(i + (ProductsPerRow-1) < totalProducts)
        {
          this.state.Products.push(
            <Row key={"Product" + i + "-" + i+1 + "Row"} className="rowSize">
              <Col xs={12}>
                <Row>
                  {Cols[i++]}
                </Row>
              </Col>
            </Row>
          )
        }
      }
    }
    else if (this.props.windowWidth >= 768 && this.props.windowWidth <= 1200)
    {
      ProductsPerRow = 3;
      for(let i = 0; i < totalProducts; ++i)
      {
        Cols.push(
            <Col onClick={() => this.props.OpenProductPageHandler(Products[i])} xs={4} key={"Product" + i + "Col"} className = "homescreen__products">
              <ProductMobile 
                ProductID={"Product" + Products[i].ProductCode}
                ProductInfo={Products[i]}
                windowWidth={this.props.windowWidth}
              ></ProductMobile>
            </Col>
        );
      }

      for (let i = 0; i < totalProducts;)
      {
        if(i + ProductsPerRow <= totalProducts)
        {
          this.state.Products.push(
            <Row key={"Product" + i + "-" + i+2 + "Row"} className="rowSize">
              <Col sm={1}></Col>
              <Col sm={10}>
                <Row>
                  {Cols[i++]}
                  {Cols[i++]}
                  {Cols[i++]}
                </Row>
              </Col>
              <Col sm={1}></Col>
            </Row>
          )
        }
        else if(i + (ProductsPerRow-1) < totalProducts)
        {
          this.state.Products.push(
            <Row key={"Product" + i + "-" + i+1 + "Row"} className="rowSize">
              <Col xs={12}>
                <Row>
                  {Cols[i++]}
                  {Cols[i++]}
                </Row>
              </Col>
            </Row>
          )
        }
        else if(i + (ProductsPerRow-2) < totalProducts)
        {
          this.state.Products.push(
            <Row key={"Product" + i + "-" + i+1 + "Row"} className="rowSize">
              <Col xs={12}>
                <Row>
                  {Cols[i++]}
                </Row>
              </Col>
            </Row>
          )
        }
      }
    }
  }

  

  render() {
    this.UpdateInfo();
    return (
      <Container fluid>
        {this.state.Products}
      </Container>
    );
  }
  
};

export default HomeScreen;