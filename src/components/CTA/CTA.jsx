

export default function CTA() {

    return (
      <div className="overflow-y-hidden">
        <div className="bg-blue-50 flex justify-center sm:flex-row flex-col items-center py-14 xl:px-44 sm:space-x-24  xl:space-x-28 md:px-28 px-4">
          <div className="w-2/4 sm:w-2/3 ">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cta-9_marketing.png" alt="images" />
          </div>
          <div className="lg:w-2/3 mt-8 sm:mt-0 flex sm:justify-end items-center justify-center sm:items-end sm:text-right flex-col">
            <h1 className="text-xl md:text-2xl xl:text-4xl font-semibold leading-5 md:leading-6 xl:leading-9 sm:text-right text-gray-800">We are here for you.</h1>
            <p className="mt-4 sm:w-64 lg:w-auto text-base leading-normal text-center sm:text-right text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className="flex mt-6 xl:mt-8 justify-center  sm:justify-end items-center space-x-4">
              <button className="flex shrink-0 text-base font-medium leading-none text-right text-blue-700 hover:text-blue-800">
                Learn more
              </button>
              <button className="w-40 h-10 bg-blue-700 rounded flex justify-center items-center hover:bg-blue-800 text-base font-medium leading-4 text-white">
                Schedule a call
              </button>
            </div>
          </div>
        </div>
      </div>
  
  
    )
  }
  