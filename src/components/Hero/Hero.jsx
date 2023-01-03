import { useState, useRef } from "react"
export default function Hero() {
  const [show, setShow] = useState('laptop 1');
    const mainImage = useRef(0)

  const HandleShow = (e) => {
    let imageSrc = e.target.src;
    mainImage.current.src = imageSrc;
    setShow(e.currentTarget.id)

  }
  return (
    <div className>
      <div className="flex justify-center items-center flex-col">
        <div className>
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero_XXIV_img_1.png" alt="background" />
        </div>
        <div className="px-4 pb-12 md:px-6  xl:px-20 flex md:flex-row flex-col-reverse  justify-center items-center md:space-x-6 lg:space-x-24 2xl:space-x-32 ">
          <div className="md:w-2/3 mt-10 lg:mt-0 lg:w-auto xl:w-2/3 flex justify-start items-start flex-col ">
            <h1 className=" text-xl md:text-2xl xl:text-4xl font-medium leading-5 md:leading-6 xl:leading-9 text-gray-800">We are a distributor</h1>
            <p className="mt-4  text-xl md:text-2xl xl:text-4xl leading-5 md:leading-6 xl:leading-9 text-gray-800">of <span className="font-semibold">Pediatric Medical Devices</span>.</p>
            <p className="md:w-80 xl:w-auto xl:w-10/12 2xl:w-2/3 mt-6 text-base leading-normal text-gray-600">We pride ourselves in distributing the best technologies available in the marketplace. We provide the state-of-the-art chest wall deformity correction equipment and supplies.</p>
            <button className="hover:-translate-y-1 transition duration-300 mt-6 md:mt-8 flex justify-center items-center space-x-2">
              <p className="text-xl font-medium pb-1 leading-5 text-gray-800">Learn more</p>
              <div className="w-5">
                <img className="w-5" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero_XXIV_svg-1.svg" alt="arrow" />
              </div>
            </button>
          </div>
          <div className="lg:w-2/3 xl:w-2/3 -mt-12 lg:-mt-20 flex flex-col justify-center items-center ">
            <img ref={mainImage} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero_XXIV_MacBook_Pro_1.png" alt="computers" />
            <div className="flex md:px-6 lg:px-10 justify-center items-center space-x-5 xl:space-x-6">
              <button id="laptop 1" onClick={(e) => HandleShow(e)} className={` ${show === 'laptop 1' ? '' : 'opacity-50'} `}>
                <img src="/img/macbook1.png" alt="computer 1" />
                {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero_XXIV_MacBook_Pro_1.png" alt="computer 1" /> */}
              </button>
              <button id="laptop 2" onClick={(e) => HandleShow(e)} className={` ${show === 'laptop 2' ? '' : 'opacity-50'} `}>
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero_XXIV_MacBook_Pro_2.png" alt="computer 2" />
              </button>
              <button id="laptop 3" onClick={(e) => HandleShow(e)} className={` ${show === 'laptop 3' ? '' : 'opacity-50'} `}>
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero_XXIV_MacBook_Pro_3.png" alt="computer 3" />
              </button>
              <button id="laptop 4" onClick={(e) => HandleShow(e)} className={` ${show === 'laptop 4' ? '' : 'opacity-50'} `}>
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero_XXIV_MacBook_Pro_4.png" alt="computer 4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
