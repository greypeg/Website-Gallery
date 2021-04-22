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
    imgsrc: bagsrc1,
    ProductCode: "001",
    ProductColors: ["7C3E29", "874E3B", "5C4736", "322423", "322423", "322423", "5C4736", "5C4736", "7C3E29", "874E3B", "5C4736", "322423", "7C3E29", "874E3B", "5C4736", "322423"],
    ProductShortDescription: "Patata3000",
    ProductName: "Product tsixla",
  },
  {
    imgsrc: bagsrc2,
    ProductCode: "002",
    ProductColors: ["7C3E29", "322423", "322423", "5C4736", "5C4736"],
    ProductShortDescription: "Patata3001",
    ProductName: "Product goomba",
  },
  {
    imgsrc: bagsrc3,
    ProductCode: "003",
    ProductColors: ["7C3E29", "322423", "5C4736", "5C4736"],
    ProductShortDescription: "Patata3002",
    ProductName: "Product Mario",
  },
  {
    imgsrc: bagsrc1,
    ProductCode: "004",
    ProductColors: ["7C3E29", "322423", "7C3E29", "874E3B", "322423", "5C4736", "5C4736"],
    ProductShortDescription: "Patata3003",
    ProductName: "Product schle",
  },
  {
    imgsrc: bagsrc2,
    ProductCode: "005",
    ProductColors: ["322423", "7C3E29", "874E3B", "322423", "5C4736", "5C4736"],
    ProductShortDescription: "Patata3004",
    ProductName: "Product phle",
  },
  {
    imgsrc: bagsrc3,
    ProductCode: "006",
    ProductColors: ["7C3E29", "322423", "7C3E29", "874E3B", "5C4736"],
    ProductShortDescription: "Patata3005",
    ProductName: "Product kati einai kai auto",
  },
];

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
            <Col md={4} key={"Product" + i + "Col"} className = "homescreen__products">
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
            <Col xs={6} key={"Product" + i + "Col"} className = "homescreen__products">
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
            <Col xs={4} key={"Product" + i + "Col"} className = "homescreen__products">
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