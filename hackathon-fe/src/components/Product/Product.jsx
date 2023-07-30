import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { addToCart } from "../../redux/actions/cartActions";

const Product = ({ navigation, imageUrl, value, price, name, productId }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const addToCartHandler = (productId) => {
    if (user.userInfo.isLogin) {
      dispatch(addToCart(productId, 1));
      navigation.navigate("CartScreen");
      return;
    } else {
      alert("You need to first login.");
    }
  };
  return (
    <div className="product">
      <div className="product__info">
        <div className="product_value" style={{ backgroundColor: value }}></div>
        <p className="info__name">{name}</p>
        <p className="info__price">${price}</p>
        <button
          className="info__button"
          type="button"
          onClick={() => addToCartHandler(productId)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
