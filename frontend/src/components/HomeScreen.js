import "./HomeScreen.css";
import Product from "./Product"


// Components


//Actions
//import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  //const dispatch = useDispatch();

  //const getProducts = useSelector((state) => state.getProducts);
  //const { products, loading, error } = getProducts;

  //(() => {
    //dispatch(listProducts());
  //}, [dispatch]);

  return (
    <div className="homescreen">
      <div className="homescreen__products">
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  );
};

export default HomeScreen;