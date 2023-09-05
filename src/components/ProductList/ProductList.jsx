import React from "react";
import CTANew from "../CTANew/CTANew";
// import Header from '../Header/Header'
// import Table from '../../components/Table/Table'
// import TableImage from '../../components/TableImage/TableImage'
// import {Link} from 'react-router-dom'

const ProductList = () => {
  // const title3 = 'When you submit your Purchase Order by clicking the button below, we will prepare and send you a customised Price List '
  return (
    <div>
      {/* <Header intro ="Our Products" title1="Our Catalogue" title2="Park's Pectus System" title3={title3} /> */}

      <div className="mt-20">
        <div className="flex ml-[200px] text-center">
          {/* <h1 className="text-green-800">Park's Pectus System in Plants</h1> */}

          {/* <div className="sm:flex-auto text-center">
            <h1 className="text-2xl font-bold  text-gray-600 text-center">
              Accessories{" "}
            </h1>
            <h1 className="text-xl  text-gray-400 text-center">
              This is a product list of Park's Pectus System Set Accessories
              that are available for you to order.
            </h1>
          </div> */}
          {/* <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">Park's Pectus System</h2> */}
        </div>

        {/* <Link to='/contact'><button className='border border-gray-600 px-6 py-2 rounded-xl text-white bg-gray-600 hover:bg-[#3BB3BD] hover:border-[#3BB3BD]' >Send your Purchase order and or Enquiries here</button></Link> */}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
        }}
      >
        {/* <Table /> */}
        {/* <TableImage /> */}
        <img className="w-[60%]" src="/img/products.jpg" alt="" />

        <div className="flex justify-center mb-20">
          {/* <Link to='/contact'><button className='border border-gray-600 px-6 py-2 rounded-xl text-white bg-gray-600 hover:bg-[#3BB3BD] hover:border-[#3BB3BD]' >Send your Purchase order and or Enquiries here</button></Link> */}
        </div>
      </div>
      <CTANew />
    </div>
  );
};

export default ProductList;
