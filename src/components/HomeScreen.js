import "./HomeScreen.css";
import ProductDesktop from "./ProductDesktop"
import {Container, Row, Col} from 'react-bootstrap'
import React from "react";
import bagsrc1 from "../images/bag1.jpg"
import bagsrc2 from "../images/bag2.jpg"
import bagsrc3 from "../images/bag3.jpg"
 
const Products = [
  {
    Imgsrc: bagsrc1,
    ProductCode: "001",
    ProductColors: ["7C3E29", "874E3B", "5C4736", "322423", "322423", "322423", "5C4736", "5C4736"],
    ProductDescription: "Patata3000",
    ProductName: "Product tsixla",
  },
  {
    Imgsrc: bagsrc2,
    ProductCode: "002",
    ProductColors: ["7C3E29", "322423", "322423", "5C4736", "5C4736"],
    ProductDescription: "Patata3001",
    ProductName: "Product goomba",
  },
  {
    Imgsrc: bagsrc3,
    ProductCode: "003",
    ProductColors: ["7C3E29", "322423", "5C4736", "5C4736"],
    ProductDescription: "Patata3002",
    ProductName: "Product Mario",
  },
  {
    Imgsrc: bagsrc1,
    ProductCode: "004",
    ProductColors: ["7C3E29", "322423", "7C3E29", "874E3B", "322423", "5C4736", "5C4736"],
    ProductDescription: "Patata3003",
    ProductName: "Product schle",
  },
  {
    Imgsrc: bagsrc2,
    ProductCode: "005",
    ProductColors: ["322423", "7C3E29", "874E3B", "322423", "5C4736", "5C4736"],
    ProductDescription: "Patata3004",
    ProductName: "Product phle",
  },
  {
    Imgsrc: bagsrc3,
    ProductCode: "006",
    ProductColors: ["7C3E29", "322423", "7C3E29", "874E3B", "5C4736"],
    ProductDescription: "Patata3005",
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

    if(this.props.windowWidth > 992)
    {
      ProductsPerRow = 3;
      for(let i = 0; i < totalProducts; ++i)
      {
        Cols.push(
            <Col md={3} key={"Product" + i + "Col"} className = "homescreen__products">
              <ProductDesktop 
              ProductID={"Product" + i} 
              picsrc={Products[i].Imgsrc}
              ProductName={Products[i].ProductName} 
              ProductCode={Products[i].ProductCode}
              ProductColors={Products[i].ProductColors}
              ProductDesc={Products[i].ProductDescription}
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
              <Col sm={1}></Col>
              {Cols[i++]}
              {Cols[i++]}
              {Cols[i++]}
              <Col sm={1}></Col>
            </Row>
          )
        }
        else if(i + (ProductsPerRow-1) < totalProducts)
        {
          this.state.Products.push(
            <Row key={"Product" + i + "-" + i+1 + "Row"} className="rowSize">
              <Col sm={1}></Col>
              {Cols[i++]}
              {Cols[i++]}
              <Col sm={1}></Col>
            </Row>
          )
        }
        else
        {
          this.state.Products.push(
            <Row key={"Product" + i + "-" + i + "Row"} className="rowSize">
              <Col sm={1}></Col>
              {Cols[i++]}
              <Col sm={1}></Col>
            </Row>
          )
        }
      }
    }
    else
    {
      // mikre grigori this is your job (sm and xs screens :) )
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