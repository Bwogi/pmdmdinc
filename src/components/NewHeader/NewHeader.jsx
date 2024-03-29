import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Features", href: "#featured" },
  { name: "Surgical Techniques", href: "#techniques" },
  // { name: 'Product Catalogue', href: '#catalogue' },
  // { name: 'Blog', href: '#blog' },
  { name: "Park's Pectus System in Plants", href: "#product-list" },
  { name: "Contact", href: "#contact" },
];

export default function NewHeader() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rv17dht",
        "template_rk7qn8p",
        form.current,
        "N-mLmSDWIHSghOvx3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div
        className="hidden lg:absolute lg:inset-0 lg:block"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-1/2 translate-x-64 -translate-y-8 transform"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            y={72}
            width={640}
            height={640}
            className="text-gray-50"
            fill="currentColor"
          />
          <rect
            x={118}
            width={404}
            height={784}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <Popover>
          {/* <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Link to="/">
                  <span className="sr-only">
                    Pediatric Medical Device Marketing and Distribution LLC.
                  </span>
                  <img
                    className="h-8 w-auto sm:h-10 rounded-md"
                    src="/img/pmdmdLogo.png"
                    alt=""
                  />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden md:ml-10 md:block md:space-x-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden text-right md:block">
              <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                <Link
                  to="/login"
                  className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-[#C49A69] hover:bg-gray-50"
                >
                  Log in
                </Link>
              </span>
            </div>
          </nav> */}
          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="h-8 w-auto rounded-md"
                      src="/img/pmdmdLogo.png"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                      <span className="sr-only">Close main menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <Link
                  to="#"
                  className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-gree-800 hover:bg-gray-100"
                >
                  Log in
                </Link> */}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mx-auto mt-8 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-base font-semibold text-[#C49A69] sm:text-lg lg:text-base xl:text-lg">
                  {/* <span className="block text-base font-semibold text-white sm:text-lg lg:text-base xl:text-lg"> */}
                  Welcome to the
                  {/* Introducing */}
                </span>
                <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-3xl xl:text-4xl">
                  <span className="block text-gray-600">
                    Pediatric Medical Device{" "}
                  </span>
                  <span className="block text-gray-400">
                    Marketing and Distribution LLC.
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                We distribute{" "}
                <span className="font-bold">Pediatric Medical Devices</span>.
                <br /> We pride ourselves in delivering the best technologies
                available in the marketplace. We provide state-of-the-art chest
                wall deformity correction equipment and supplies.
              </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <p className="text-xs text-gray-400">
                  Sign up for latest updates on the latest medical device
                  technology.
                </p>
                {/* <form action="https://formsubmit.co/andrew.bwogi@gmail.com" method="POST" className="mt-3 sm:flex"> */}
                <form ref={form} onSubmit={sendEmail} className="mt-3 sm:flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-green-500 focus:ring-green-500 sm:flex-1"
                    placeholder="Enter your email"
                  />
                  {/* <input type="hidden" name="_next" value="https://pmdmdinc.vercel.app/thanks.html" />
                    
                  <input type="hidden" name="_subject" value="New Email submitted for latest updates from PMDMD website" />
                                
                  <input type="hidden" name="_cc" value="oidowu@msn.com,jireidowu@gmail.com" /> */}
                  <button
                    type="submit"
                    className="mt-3 w-full rounded-md border border-transparent bg-[#384A6B] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
                  >
                    Notify me
                  </button>
                </form>
                {/* <p className="mt-3 text-sm text-gray-400">
                  We care about the protection of your data. Read our 
                  <Link to="#" className=" text-gray-500 underline">
                                      {' '}Privacy Policy
                  </Link>
                  .
                </p> */}
              </div>
            </div>
            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <svg
                className="absolute top-0 left-1/2 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  width={640}
                  height={640}
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x={118}
                  width={404}
                  height={784}
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <a
                  href="https://youtu.be/7KGHovGOgew"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-3xl hover:bg-gray-50"
                  >
                    <span className="sr-only">
                      Watch our video to learn more
                    </span>
                    <img
                      className="w-full"
                      src="/img/medical-device.jpg"
                      alt=""
                    />
                    <span
                      className="absolute inset-0 flex h-full w-full items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-20 w-20 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 84 84"
                      >
                        <circle
                          opacity="0.9"
                          cx={42}
                          cy={42}
                          r={42}
                          fill="white"
                        />
                        <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
