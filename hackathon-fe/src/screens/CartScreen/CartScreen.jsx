import "./CartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Linking } from "react-native";

// Components
import CartItem from "../../components/CartItem/CartItem";

// Actions
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import useLogin from "../../utils/hooks/useLogin";
import { Screen } from "../../components/Screen";
import { Api } from "../../utils/Api";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { loginInfo } = useLogin();

  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart({ pId: item.product, _id: item._id }));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const handleProceedBtn = async () => {
    const res = await Api.postRequest("/api/order/create-session", {
      products: cartItems,
    });
    if (res) {
      const { payment_url } = JSON.parse(res.data).data;
      Linking.openURL(payment_url);
    }
  };

  if (loginInfo.loading) return <h1>Loading.....</h1>;
  else if (!loginInfo.loading && loginInfo.isLogin)
    return (
      <Screen>
        <div className="cartscreen">
          <div className="cartscreen__left">
            {cartItems.length === 0 ? (
              <div>Your Cart Is Empty</div>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={() => removeFromCartHandler(item)}
                />
              ))
            )}
          </div>

          <div className="cartscreen__right">
            <div className="cartscreen__info">
              <p>Subtotal ({getCartCount()}) items</p>
              <p>${getCartSubTotal()}</p>
            </div>
            <div>
              <button
                title="Functionality need to be add."
                onClick={handleProceedBtn}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </Screen>
    );
};

export default CartScreen;
