import React from "react";
import Featured from "../../components/Featured/Featured";
import SurgicalTechniques from "../../components/SurgicalTechniques/SurgicalTechniques";
import STVideos from "../../components/STVideos/STVideos";
// import Products from "../../components/Products/Products";
import CTANew from "../../components/CTANew/CTANew";
import ProductDetails from "../ProductDetails/ProductDetails";

const ParkSystemSet = () => {
  return (
    <div>
      <div>
        <Featured type="Featured" />
      </div>

      {/* <div id="techniques">
        <SurgicalTechniques />
      </div> */}
      <div>
        <STVideos />
      </div>
      {/* <div className="mb-[80px]">
        <CTANew />
      </div> */}
      <ProductDetails />
      {/* <div id="product-list">
        <Products />
      </div> */}
      <div>
        <CTANew />
      </div>
    </div>
  );
};

export default ParkSystemSet;
