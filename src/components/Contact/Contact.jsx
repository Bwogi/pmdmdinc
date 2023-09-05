import React from "react";

function Contact() {
  return (
    <>
      <div>
        <div className="px-4 py-12">
          <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full mx-auto py-12  bg-white relative">
            <div className="relative w-full">
              <iframe
                title="lafayette"
                className="relative"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100754.28700647665!2d-122.19289849493923!3d37.89370325014323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085607ca3fa8f85%3A0xf928585d03e46927!2sLafayette%2C%20CA!5e0!3m2!1sen!2sus!4v1671613833484!5m2!1sen!2sus"
                width="100%"
                height={600}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div>
                <svg
                  className="absolute inset-x-0 w-3/4 mx-auto mb-auto cursor-pointer loc md:w-2/5 lg:inset-y-0 lg:my-auto inset-y-10"
                  width={44}
                  height={52}
                  viewBox="0 0 44 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 52C23.496 52 29.344 47.728 34.004 42.428C40.216 35.368 44 27.488 44 20C44 8.148 34.26 0 22 0C9.74 0 0 8.148 0 20C0 27.52 3.784 35.4 9.996 42.452C14.652 47.74 20.5 52 22 52ZM22 24.8C23.0609 24.8 24.0783 24.3786 24.8284 23.6284C25.5786 22.8783 26 21.8609 26 20.8C26 19.7391 25.5786 18.7217 24.8284 17.9716C24.0783 17.2214 23.0609 16.8 22 16.8C20.9391 16.8 19.9217 17.2214 19.1716 17.9716C18.4214 18.7217 18 19.7391 18 20.8C18 21.8609 18.4214 22.8783 19.1716 23.6284C19.9217 24.3786 20.9391 24.8 22 24.8ZM22 33.6C18.6052 33.6 15.3495 32.2514 12.949 29.851C10.5486 27.4505 9.2 24.1948 9.2 20.8C9.2 17.4052 10.5486 14.1495 12.949 11.749C15.3495 9.34857 18.6052 8 22 8C25.3948 8 28.6505 9.34857 31.051 11.749C33.4514 14.1495 34.8 17.4052 34.8 20.8C34.8 24.1948 33.4514 27.4505 31.051 29.851C28.6505 32.2514 25.3948 33.6 22 33.6Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
              <div className="absolute px-8 py-8 bg-white lg:top-28 lg:left-28 md:bottom-28 bottom-28 left-8 md:left-11 lg:max-w-[410px] md:max-w-[648px] max-w-[311px] w-full lg:max-h-[356px] set">
                <p className="mb-4 text-3xl font-bold lg:leading-[48px] md:leading-[36px] leading-[30px] text-gray-800 md:text-4xl lg:text-5xl">
                  Get in Touch
                </p>
                <p className="text-base">
                  Looking for our assistance?{" "}
                  <span className="font-semibold text-green-700 underline cursor-pointer">
                    <a href="mailto:contact@pmdmd-inc.com">Contact Us</a>
                  </span>{" "}
                </p>
                <div className="flex mt-8 gap-x-4">
                  <svg
                    className="cursor-pointer  h-[21px] mt-1"
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1406 10.5C12.9787 10.5 13.6581 9.82843 13.6581 9C13.6581 8.17157 12.9787 7.5 12.1406 7.5C11.3025 7.5 10.623 8.17157 10.623 9C10.623 9.82843 11.3025 10.5 12.1406 10.5Z"
                      fill="#4B5563"
                    />
                    <path
                      d="M12.1405 1.5C7.95677 1.5 4.55273 4.71797 4.55273 8.67188C4.55273 10.5548 5.42105 13.0589 7.13351 16.1147C8.50878 18.5681 10.0998 20.7867 10.9274 21.8906C11.0672 22.0792 11.25 22.2326 11.461 22.3384C11.6721 22.4441 11.9053 22.4992 12.1419 22.4992C12.3785 22.4992 12.6117 22.4441 12.8227 22.3384C13.0337 22.2326 13.2166 22.0792 13.3564 21.8906C14.1825 20.7867 15.775 18.5681 17.1502 16.1147C18.8599 13.0598 19.7282 10.5558 19.7282 8.67188C19.7282 4.71797 16.3241 1.5 12.1405 1.5ZM12.1405 12C11.5402 12 10.9534 11.8241 10.4542 11.4944C9.95513 11.1648 9.56612 10.6962 9.3364 10.1481C9.10668 9.59987 9.04657 8.99667 9.16368 8.41473C9.28079 7.83279 9.56986 7.29824 9.99432 6.87868C10.4188 6.45912 10.9596 6.1734 11.5483 6.05764C12.1371 5.94189 12.7473 6.0013 13.3019 6.22836C13.8565 6.45542 14.3305 6.83994 14.664 7.33329C14.9975 7.82664 15.1755 8.40666 15.1755 9C15.1747 9.79538 14.8546 10.5579 14.2856 11.1204C13.7166 11.6828 12.9451 11.9991 12.1405 12Z"
                      fill="#4B5563"
                    />
                  </svg>
                  <p className="text-base leading-normal text-gray-600 ">
                    P.O.BOX 1755, <br /> Lafayette, CA 94549, USA{" "}
                  </p>
                </div>
                <div className="flex mt-8 gap-x-4">
                  <svg
                    className="cursor-pointer"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3284 22.5001C17.4134 22.5001 16.1281 22.1691 14.2034 21.0938C11.8629 19.7813 10.0526 18.5696 7.72481 16.2479C5.48044 14.0049 4.38825 12.5527 2.85965 9.77115C1.13278 6.63052 1.42715 4.98427 1.75622 4.28068C2.14809 3.43974 2.72653 2.93677 3.47419 2.43755C3.89885 2.15932 4.34825 1.92081 4.81669 1.72505C4.86356 1.7049 4.90715 1.68568 4.94606 1.66833C5.17809 1.5638 5.52965 1.40583 5.97497 1.57458C6.27215 1.68615 6.53747 1.91443 6.95278 2.32458C7.8045 3.16458 8.9684 5.03537 9.39778 5.95412C9.68606 6.57333 9.87684 6.98208 9.87731 7.44052C9.87731 7.97724 9.60731 8.39115 9.27965 8.83787C9.21825 8.92177 9.15731 9.00193 9.09825 9.07974C8.74153 9.54849 8.66325 9.68396 8.71481 9.92583C8.81934 10.4119 9.59887 11.859 10.88 13.1372C12.1611 14.4155 13.5664 15.1458 14.0543 15.2499C14.3065 15.3038 14.4448 15.2222 14.9286 14.8529C14.9979 14.7999 15.0692 14.7451 15.1437 14.6902C15.6434 14.3185 16.0381 14.0555 16.5622 14.0555H16.565C17.0211 14.0555 17.4115 14.2533 18.0584 14.5796C18.9022 15.0052 20.8292 16.1541 21.6743 17.0068C22.0854 17.4211 22.3147 17.6855 22.4267 17.9822C22.5954 18.429 22.4365 18.7791 22.3329 19.0135C22.3156 19.0524 22.2964 19.0951 22.2762 19.1424C22.0789 19.61 21.839 20.0585 21.5595 20.4821C21.0612 21.2274 20.5564 21.8044 19.7136 22.1968C19.2808 22.4015 18.8071 22.5052 18.3284 22.5001Z"
                      fill="#4B5563"
                    />
                  </svg>
                  <p className="text-base text-gray-600">
                    <a href="tel:+14155355362">
                      +1 (415)-535-5362 *click to call
                    </a>
                  </p>
                </div>
                <div className="flex mt-8 gap-x-4">
                  <svg
                    className="cursor-pointer"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.875 3.75H4.125C3.42904 3.75074 2.76179 4.02755 2.26967 4.51967C1.77755 5.01179 1.50074 5.67904 1.5 6.375V17.625C1.50074 18.321 1.77755 18.9882 2.26967 19.4803C2.76179 19.9725 3.42904 20.2493 4.125 20.25H19.875C20.571 20.2493 21.2382 19.9725 21.7303 19.4803C22.2225 18.9882 22.4993 18.321 22.5 17.625V6.375C22.4993 5.67904 22.2225 5.01179 21.7303 4.51967C21.2382 4.02755 20.571 3.75074 19.875 3.75ZM19.2103 8.09203L12.4603 13.342C12.3287 13.4444 12.1667 13.4999 12 13.4999C11.8333 13.4999 11.6713 13.4444 11.5397 13.342L4.78969 8.09203C4.71038 8.03214 4.64377 7.95709 4.59372 7.87123C4.54367 7.78537 4.51118 7.69042 4.49815 7.5919C4.48511 7.49338 4.49179 7.39325 4.51778 7.29733C4.54378 7.20142 4.58858 7.11162 4.64958 7.03316C4.71058 6.95471 4.78656 6.88916 4.87312 6.84032C4.95967 6.79149 5.05506 6.76034 5.15376 6.74869C5.25245 6.73704 5.35248 6.74513 5.44802 6.77247C5.54357 6.79981 5.63272 6.84587 5.71031 6.90797L12 11.7998L18.2897 6.90797C18.447 6.7892 18.6447 6.73711 18.84 6.76296C19.0354 6.78881 19.2128 6.89053 19.3338 7.04612C19.4547 7.20171 19.5096 7.39866 19.4865 7.59439C19.4634 7.79011 19.3642 7.96888 19.2103 8.09203Z"
                      fill="#4B5563"
                    />
                  </svg>
                  <p className="text-base text-gray-600">
                    <a href="mailto:contact@pmdmd-inc.com">
                      contact@pmdmd-inc.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
    @media (min-width:1024px) {
        .loc{
            left: 200px;
        }
    }
    @media (max-width:380px) {
        .set{
            width: 300px;
            left: 12px;
        }
        
    }
    `}
        </style>
      </div>
    </>
  );
}

export default Contact;

// import React from "react";

// export default function Contact() {
//   return (
//     <>
//       <div className="container mx-auto py-10 px-5 ">
//         <div className="relative md:block flex flex-col-reverse">
//           <iframe id="iframe" className="w-full md:absolute right-0 md:h-full h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429154.75848513725!2d-117.38916630193054!3d32.824817514402476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1593793817578!5m2!1sen!2s" width={425} height={250} style={{ border: 0 }} allowFullScreen title="maps" />
//           <div className>
//             <div className="container xl:w-1/3 md:w-1/2 relative z-30 bg-gradient-to-r from-white via-white to-transparent md:pl-6 py-4 sm:py-10 lg:py-40">
//               <div className="lg:w-96">
//                 <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-10 text-gray-800">LET’S TALK</h1>
//                 <p className="text-base leading-normal text-gray-600 mt-4 lg:mt-2">
//                   We are here to answer any questions <br />
//                   you may have about our ui kit
//                 </p>
//               </div>
//               <div className="mt-8 lg:mt-16">
//                 <h2 className="lg:w-64 text-xl lg:text-2xl font-semibold leading-normal text-gray-800">Address</h2>
//                 <p className="sm:w-1/2 text-base leading-normal text-gray-600 mt-2">P.O. BOX 1755,<br />Lafayette, CA 94549, USA</p>
//               </div>
//               <div className="mt-8 lg:mt-12">
//                 <h2 className="lg:w-64 text-xl lg:text-2xl font-semibold leading-normal text-gray-800">Phone</h2>
//                 <p className="text-base leading-normal text-gray-600 mt-2">+1(415) 535-5362 </p>
//               </div>
//               <div className="mt-8 lg:mt-12">
//                 <h2 className="lg:w-64 text-xl lg:text-2xl font-semibold leading-normal text-gray-800">Email</h2>
//                 <p className="text-base leading-normal text-gray-600 mt-2">contact@pmdmd-inc.com</p>
//               </div>
//               <button className="mt-8 lg:mt-10 px-8 py-4 hover:bg-green-600 bg-green-700 rounded text-base font-medium text-center text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"><a href="mailto:contact@pmdmd-inc.com">Send Email</a> </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
