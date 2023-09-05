import { useRef } from "react";
// import { useState useRef } from "react";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

export default function HeroNew() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <div className="bg-white">
      <main>
        <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-green-100 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-green-200">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#1f932ae7] to-[#89fcca] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> */}
                  <h1>
                    {/* We’re changing the way people connect. */}
                    <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-3xl xl:text-5xl">
                      <span className="block text-gray-600">
                        Pediatric Medical Device{" "}
                      </span>
                      <span className="block text-gray-400">
                        Marketing and Distribution LLC.
                      </span>
                    </span>
                  </h1>
                  {/* <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
                    quis cupidatat mollit aute velit. Et labore commodo nulla
                    aliqua proident mollit ullamco exercitation tempor. Sint
                    aliqua anim nulla sunt mollit id pariatur in voluptate
                    cillum.
                  </p> */}
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    We distribute{" "}
                    <span className="font-bold">Pediatric Medical Devices</span>
                    .
                    <br /> We pride ourselves in delivering the best
                    technologies available in the marketplace. We provide
                    state-of-the-art chest wall deformity correction equipment
                    and supplies.
                  </p>
                  <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                    <p className="text-xs text-gray-400">
                      Sign up for latest updates on the latest medical device
                      technology.
                    </p>
                    {/* <form action="https://formsubmit.co/andrew.bwogi@gmail.com" method="POST" className="mt-3 sm:flex"> */}
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className="mt-3 sm:flex"
                    >
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
                        className="mt-3 w-full rounded-md border border-transparent bg-[#384A6B] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
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
                  <div className="mt-10 flex items-center gap-x-6">
                    <Link
                      to="/about"
                      className="text-sm font-semibold leading-6  text-gray-900 ring-1 hover:ring-gray-400 hover:bg-transparent bg-green-200 ring-green-200 px-6 py-3"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="https://pect-vac.myshopify.com/"
                      className="text-sm font-semibold leading-6  text-gray-900 ring-1 hover:ring-[#C39A68] hover:bg-transparent bg-[#C39A68] ring-[#C39A68] px-6 py-3"
                    >
                      Our Products <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/img/photo-01.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/img/photo-02.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/img/photo-03.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/img/photo-04.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/img/photo-05.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
