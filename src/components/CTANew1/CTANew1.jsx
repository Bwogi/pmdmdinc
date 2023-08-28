import React from "react";

function CTANew1() {
  return (
    <>
      <div className="px-4 py-12">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full mx-auto py-12 lg:px-20 md:px-6 px-4 bg-white">
          <div className="flex flex-col items-center justify-between lg:flex-row gap-x-6">
            <div className="lg:max-w-[411px] w-full">
              <p className="lg:text-5xl md:text-4xl text-3xl  font-bold lg:leading-[60px] text-gray-800 lg:mb-6 md:mb-4 mb-4">
                Want To Know More About Us?
              </p>
              <p className="mb-4 text-base leading-6 text-gray-600 lg:mb-12 md:mb-4">
                We at Luxe believe shopping is a right, not a luxury, so we keep
                ourselves up-to date with the newest fashion to provide you the
                best experiance
              </p>
              <button className="hidden py-4 text-base font-medium leading-none text-white duration-300 ease-in-out transform bg-green-700 lg:block md:hidden px-28 hover:bg-green-600">
                Learn More
              </button>
            </div>
            <div className="max-w-[845px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d212645.32758412763!2d73.08610799999998!3d33.61611625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1648649256122!5m2!1sen!2s"
                width="100%"
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="block w-full mt-6 lg:hidden md:block">
              <button className="w-full py-4 text-base font-medium leading-none text-white duration-300 ease-in-out transform bg-green-700  hover:bg-green-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CTANew1;
