import React from "react";
import Accessories from "../../components/Accessories/Accessories";
import ProductDetails from "../ProductDetails/ProductDetails";
import CTANew from "../../components/CTANew/CTANew";

const InPlants = () => {
  return (
    <div>
      <Accessories />
      <div>
        <CTANew />
      </div>
      <ProductDetails />
    </div>
  );
};

export default InPlants;
