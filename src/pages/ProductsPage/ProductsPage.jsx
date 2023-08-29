import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shopContext";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  // fetch all products when the homepage loads
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]); // we watch to fetch all products when the homepage loads for changes

  // if products are not available yet, show a spinner
  if (!products) return <div>Loading...</div>;

  return (
    <div className="mt-20 ml-20 mr-20 mx-auto">
      {/* {products.map((product) => (
        <Link to={`/products/${product.handle}`} key={product.id}>
          {product.title}
        </Link>
      ))} */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Our Products
            </h2>
            <Link
              to="/product-details"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              Product Details
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                  <img
                    src={product.images[0].src}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <Link to={`/products/${product.handle}`}>
                    <span className="absolute inset-0" />
                    {product.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {/* {product.variants[1].price} */}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              to="/product-details"
              className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Product Details
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
