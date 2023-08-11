import React from "react";

const Navigation = () => {
  return (
    <div>
      <div class="flex items-center justify-between border-b bg-white p-3">
        <div class="flex items-center space-x-2 rounded ml-[150px] py-1  text-slate-500">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg> */}
          {/* <span>Back</span> */}
          <ul className="flex ">
            <li className="mr-5 cursor-pointer">Pectus Vac Device</li>
            <li className="mr-5 cursor-pointer">Perks's Pectus System Set</li>
            <li></li>
          </ul>
        </div>
        <div class="text-lg font-bold text-gray-100">
          <img
            className="h-[100px] w-auto z-[289]"
            src="/img/logo.jpg"
            alt="logo"
          />
        </div>
        <div class="flex items-center space-x-5 text-gray-100">
          <h1>company</h1>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
