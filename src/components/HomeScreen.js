import "./HomeScreen.css";
import ProductDesktop from "./ProductDesktop"

const HomeScreen = () => {

  return (
    <div className="container-fluic pl-0 pr-0">
      <div className="row rowSize">
        <div className="col-sm-1"></div>
        <div className="col-sm-3 homescreen__products">
          <ProductDesktop/>
        </div>
        <div className="col-sm-3 homescreen__products">
          <ProductDesktop/>
        </div>
        <div className="col-sm-3 homescreen__products">
          <ProductDesktop/>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};

export default HomeScreen;