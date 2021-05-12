import "./ProductGallery.css";
import ProductDesktop from "./ProductDesktop"
import ProductMobile from "./ProductMobile"
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import React from "react";
 

const ProductGenres = ["Hand Bag", "Backpack", "Shoulder Bag", "Shopping Bag", "Crossbody Bag", "Messenger Bag", ""];

class ProductGallery extends React.Component{

  componentDidMount()
  {
    this.fetchProductInfo();
  }

  fetchProductInfo()
  {
    fetch("http://" + this.props.backendIP + ":4000/Search?searchParam=" + ProductGenres[this.props.categorySelected])
            .then((response) => response.json())
            .then((data) => this.setState({productInfo: data}, ()=>{this.initProducts()}))
    
    console.log("http://" + this.props.backendIP + ":4000/");
  }

  constructor(props)
  {
    super(props);
    this.state = {
      Products: [],
      productInfo: [],
      PageReady: false,
      SelectedSorting: this.props.sortingSelected,
      SelectedGenre: this.props.categorySelected,
      NumberOfDisplayedItems: this.props.displayedItems,
    };

    this.UpdateInfo = this.UpdateInfo.bind(this);
    this.initProducts = this.initProducts.bind(this);
    this.fetchProductInfo = this.fetchProductInfo.bind(this);
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
        }, () => {this.fetchProductInfo()});
      }

    // create Products Array
  }

  componentDidUpdate(prevProps)
  {
    if(prevProps.categorySelected !== this.props.categorySelected ||
        prevProps.sortingSelected !== this.props.sortingSelected)
    {
      this.UpdateInfo();
    }
  }
  // We will query the server with a specified category, sorting and we will display a number of items equal to totalProducts.
  initProducts()
  {
    console.log(this.state.productInfo);
    if(this.state.productInfo.length === 0) return 0;

    var totalProducts = this.state.NumberOfDisplayedItems;
    // let sorting = this.state.SelectedSorting;
    // let category = this.state.categorySelected;
    var Cols = [];
    // our product list may be shorter than the expected amount of products the user wants displayed.
    totalProducts = (totalProducts < this.state.productInfo.length ? totalProducts : this.state.productInfo.length);

    var ProductsPerRow;
    let MainContent = [];

    if(this.props.windowWidth > 1200)
    {

      ProductsPerRow = 3;
      
      for(let i = 0; i < totalProducts; ++i)
      {
        Cols.push(
            <Col md={4} key={"Product" + this.state.productInfo[i].ProductCode + "Col"} className = "homescreen__products">
              <Link to={'/Products?ProductID=' + this.state.productInfo[i].ProductCode}>
              <ProductDesktop 
                ProductID={"Product" + this.state.productInfo[i].ProductCode}
                ProductInfo={this.state.productInfo[i]}
              ></ProductDesktop>
            </Link>
          </Col>
        );
      }

      for (let i = 0; i < totalProducts;)
      {
        let RowKey;
        if(i + ProductsPerRow <= totalProducts)
        {
          RowKey ="Product" + this.state.productInfo[i].ProductCode + "-" + this.state.productInfo[i+2].ProductCode + "Row";
          MainContent.push(
            <Row key={RowKey} className="rowSize">
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
        else if(i + (ProductsPerRow-1) <= totalProducts)
        {
          RowKey = "Product" + this.state.productInfo[i].ProductCode + "-" + this.state.productInfo[i+1].ProductCode + "Row"
          MainContent.push(
            <Row key={RowKey} className="rowSize">
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
          RowKey = "Product" + this.state.productInfo[i].ProductCode + "Row";
          MainContent.push(
            <Row key={RowKey} className="rowSize">
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
          <Col xs={6} key={"Product" + this.state.productInfo[i].ProductCode + "Col"} className = "homescreen__products">
            <Link to={'/Products?ProductID=' + this.state.productInfo[i].ProductCode}>
              <ProductMobile 
                ProductID={"Product" + this.state.productInfo[i].ProductCode}
                ProductInfo={this.state.productInfo[i]}
              ></ProductMobile>
              
            </Link>
          </Col>
        );
      }

      for (let i = 0; i < totalProducts;)
      {
        let RowKey;
        if(i + ProductsPerRow <= totalProducts)
        {
          RowKey = "Product" + this.state.productInfo[i].ProductCode + "-" + this.state.productInfo[i+1].ProductCode + "Row";
          MainContent.push(
            <Row key={RowKey} className="rowSize">
              <Col xs={12}>
                <Row>
                  {Cols[i++]}
                  {Cols[i++]}
                </Row>
              </Col>
            </Row>
          )
        }
        else if(i + (ProductsPerRow-1) <= totalProducts)
        {

          RowKey = "Product" + this.state.productInfo[i].ProductCode + "Row"
          MainContent.push(
            <Row key={RowKey} className="rowSize">
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
            <Col xs={4} key={"Product" + this.state.productInfo[i].ProductCode + "Col"} className = "homescreen__products">
              <Link to={'/Products?ProductID=' + this.state.productInfo[i].ProductCode} style={{textDecorationLine: "none"}}>
                <ProductMobile 
                  ProductID={"Product" + this.state.productInfo[i].ProductCode}
                  ProductInfo={this.state.productInfo[i]}
                  windowWidth={this.props.windowWidth}
                ></ProductMobile>
              </Link>
            </Col>
        );
      }

      for (let i = 0; i < totalProducts;)
      {
        let RowKey;
        if(i + ProductsPerRow <= totalProducts)
        {
          RowKey = "Product" + this.state.productInfo[i].ProductCode + "-" + this.state.productInfo[i+2].ProductCode + "Row"
          MainContent.push(
            <Row key={RowKey} className="rowSize">
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
        else if(i + (ProductsPerRow-1) <= totalProducts)
        {
          RowKey = "Product" + this.state.productInfo[i].ProductCode + "-" + this.state.productInfo[i+1].ProductCode + "Row"
          MainContent.push(
            <Row key={RowKey} className="rowSize">
              <Col sm={1}></Col>
              <Col sm={10}>
                <Row>
                  {Cols[i++]}
                  {Cols[i++]}
                </Row>
              </Col>
              <Col sm={1}></Col>
            </Row>
          )
        }
        else if(i + (ProductsPerRow-2) <= totalProducts)
        {
          RowKey = "Product" + this.state.productInfo[i].ProductCode + "Row";
          MainContent.push(
            <Row key={RowKey} className="rowSize">
              <Col sm={1}></Col>
              <Col sm={10}>
                <Row>
                  {Cols[i++]}
                </Row>
              </Col>
              <Col sm={1}></Col>
            </Row>
          )
        }
      }
    }

    this.setState({Products: MainContent, PageReady: true});
    return 1;
  }

  

  render() {
    if(!this.state.PageReady) { return(<h3>Loading, please wait...</h3>)}

    //TODO : Update automatically when category changes.
    return (
      <Container fluid>
        {this.state.Products}
      </Container>
    );
  }
  
};

export default ProductGallery;