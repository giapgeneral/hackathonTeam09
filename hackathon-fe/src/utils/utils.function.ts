export const convertToCartData = (carts) => {
  return carts.map((c) => {
    return {
      product: c.productId._id,
      name: c.productId.name,
      value: c.productId.value,
      price: c.productId.price,
      countInStock: c.productId.countInStock,
      qty: c.count,
      _id: c._id,
    };
  });
};
