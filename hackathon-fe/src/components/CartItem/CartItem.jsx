import "./CartItem.css";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  console.log("item", item);
  return (
    <div className="cartitem">
      <div
        className="cartitem__value"
        style={{ backgroundColor: item.value }}
      ></div>
      <div className="cartItem__name">
        <p>{item.name}</p>
      </div>
      <p className="cartitem__price">${item.price}</p>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
