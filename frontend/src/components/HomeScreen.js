import "./HomeScreen.css";
import ProductDesktop from "./ProductDesktop"

const HomeScreen = () => {

  return (
    <div className="container-fluid pl-0 pr-0">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <ProductDesktop/>
        </div>
        <div className="col-lg-3">
          <ProductDesktop/>
        </div>
        <div className="col-lg-3">
          <ProductDesktop/>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default HomeScreen;