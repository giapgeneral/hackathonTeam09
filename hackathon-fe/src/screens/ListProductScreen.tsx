import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Screen } from "../components/Screen";
import { useDispatch, useSelector } from "react-redux";
import { setUserDeatils } from "../redux/actions/userAction";
import { getProducts as listProducts } from "../redux/actions/productActions";
import Product from "../components/Product/Product";

export const ListProduct = ({navigation}) => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setUserDeatils());
  }, [dispatch]);

  return (
    <Screen>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        products?.length && (
          <FlatList
            style={{ flex: 1 }}
            data={products}
            renderItem={({ item }) => {
              return (
                <Product
                navigation={navigation}
                  key={item._id}
                  name={item?.name}
                  value={item?.value}
                  price={item?.price}
                  imageUrl={item?.imageUrl}
                  productId={item._id}
                />
              );
            }}
            keyExtractor={(item) => item._id}
          />
        )
      )}
    </Screen>
  );
};
