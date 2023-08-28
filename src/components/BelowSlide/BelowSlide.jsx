import { Link } from "react-router-dom";
// import ImageIndex from '../../img/img_index.jpg'

export default function BelowSlide() {
  return (
    <div
      className="
      bg-gradient-to-b from-green-800 to-green-600
      mt-8
      rounded-xl"
    >
      <div className="mx-auto w-[100%] rounded-xl mt-8 border border-none py-3 px-4 text-center sm:py-5 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="font-medium">
            Park's <span className="text-orange-300">Pectus</span> System
          </span>
        </h2>
        <h3 className="text-white mt-[50px] text-medium">
          A world reknown safe and simple technique for Pectus Excavacum
          Correction
        </h3>
        <p className="text-gray-300 mt-5">
          Dr. Park has developed simple and safest minimally evasive pectus
          implants to remodel
          <br /> the chest disorder. The congenital disformity appears in
          approximately one of every 1,000 children
          <br />
          This concave funnel shaped chest can pressure the vital organs,
          resulting in restricted organ growth and shortness of breath.
        </p>
        <div className="my-10">
          <img src="/img/img_index.jpg" alt="" />
        </div>

        <div className="mt-[100px] text-white">
          <span className=" text-xl font-bold">
            PEDIATRIC MEDICAL DEVICE MARKETING AND DISTRIBUTION INC.
          </span>{" "}
          <br /> is the{" "}
          <span className="text-orange-300">sole distributor</span> of{" "}
          <span className="text-gray-300 italic">Park's Pectus System</span> in
          the United States of America.
        </div>
        <div className="mt-10  mb-10 text-white">
          {" "}
          <Link to="/products">
            <button className="border border-none px-8  py-3 rounded-md hover:bg-[#025E6C] hover:border-[#025e6c] bg-blue-800 ">
              See Product Catalogue
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
