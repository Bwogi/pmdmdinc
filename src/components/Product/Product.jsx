import React, { useState } from "react";
import "./Product.scss";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

export default function Product() {
  const images = ["/img/sample2.jpg", "/img/sample3.jpg"];
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1 className="ext-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Pectus Vacuum Device
        </h1>
        <span>$850</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste error,
          velit fugiat facere est nemo voluptatem eaque excepturi debitis
          provident esse repellat omnis sequi, deleniti asperiores. Cumque
          recusandae totam sequi!
        </p>
        <div className="size">
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Sizes:
          </label>
          <select
            id="size"
            name="size"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
            defaultValue="Canada"
          >
            <option>Small/Mini</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <div className="bluetooth">
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Bluetooth Capability:
          </label>
          <select
            id="location"
            name="location"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
            defaultValue="Canada"
          >
            <option>With Bluetooth Capability</option>
            <option>Without Bluetooth Capability</option>
          </select>
        </div>

        <div className="quantity">
          <button
            type="button"
            onClick={(e) => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            className="rounded-md bg-green-50 px-3.5 py-2.5 text-sm font-semibold text-green-600 shadow-sm hover:bg-green-100"
          >
            -
          </button>
          {quantity}
          <button
            type="button"
            onClick={(e) => setQuantity((prev) => prev + 1)}
            className="rounded-md bg-green-50 px-3.5 py-2.5 text-sm font-semibold text-green-600 shadow-sm hover:bg-green-100"
          >
            +
          </button>
        </div>
        <div className="submit-button">
          <button
            type="button"
            className="inline-flex items-center gap-x-2  bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            <ShoppingCartIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            {/* <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" /> */}
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
