import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";

const ProductPage = () => {
  const { handle } = useParams();
  const { fetchProductWithHandle, product } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product) return <div>Loading...</div>;

  return <div className="mt-20 mr-20 ml-20">{product.title}</div>;
};

export default ProductPage;
