import { Link } from "react-router-dom";

export default function CTANew() {
  return (
    <div className="bg-indigo-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready to place your order?
          <br />
          {/* Start your free trial today. */}
        </h2>
        <div className=" flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link to="">
            <button className="border border-1 px-6 py-6 mt-5 rounded-md bg-[#384A6B] text-white">
              <Link to="#">Order Now</Link>
            </button>
          </Link>

          {/* <Link
            to="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
