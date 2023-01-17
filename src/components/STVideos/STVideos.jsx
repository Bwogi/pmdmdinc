// import React, { useRef, useState } from "react";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"

import SwiperCore, {
  Navigation
} from 'swiper';

SwiperCore.use([Navigation]);


const techniques = [
    {
      title: 'Magic String Park Technique',
      sub: 'This technique relieves focal parasternal protrusions after pectus bar repair of PE, which are often emerging in asymmetric deformities. ',
      image: "/img/video-sub1.jpg",
      watch:  'https://www.youtube.com/watch?v=19JLb0tJEIc',
    },
    {
        title: 'Flare buster Park Technique',
        sub: 'This technique relieves lower costal flaring following pectus bar repair of PE to make the chest wall anatomically correct.',
        image: "/img/video-sub2.jpg",
        watch:  'https://www.youtube.com/watch?v=OzhnzequyFs',
    },
    {
        title: 'Pectus Carinatum Repair - Hook Puller',
        sub: 'Park Technique for Pectus Carinatum Repair Hook Puller',
        image: "/img/video-sub3.jpg",
        watch:  'https://www.youtube.com/watch?v=E0xH6ro9RU4',
    },
    {
        title: 'Pectus Carinatum Repair - Easy Compressor',
        sub: 'Park Technique: Carinatum Sandwich Technique Easy Compressor',
        image: "/img/video-sub4.jpg",
        watch:  'https://www.youtube.com/watch?v=fHBpWnOpqyM',
    },
    {
        title: 'Pectus Excavatum Repair - Easy Crane',
        sub: 'Park Technique for Pectus Excavatum Repair, Easy Crane',
        image: "/img/video-sub5.jpg",
        watch:  'https://www.youtube.com/watch?v=uAZlgtyU6nA',
      },
   
  ] 

export default function Index() {
  return (
      <div className>
           <div className="sm:flex-auto text-center">
            <h1 className="text-2xl font-bold  text-gray-600 text-center">More Surgical Techniques using Park's Pectus System Set </h1>
            <h1 className="text-xl  text-gray-400 text-center">The videos below continue to demonstrate the versatility of the Park's Pectus System Set</h1>
        </div>
          <div className="py-12 flex lg:flex-row flex-col items-start lg:items-center justify-between ">
              
        <div className="mx-4 md:w-2/3 lg:w-auto md:mx-6 xl:ml-20  flex flex-col justify-start items-start">
          <h1 className="text-xl md:text-2xl xl:text-4xl font-semibold leading-6 xl:leading-10 text-gray-600">Park's Pectus System <span className="text-[#C49A69]">Videos</span>.</h1>
          <p className="mt-4 text-base leading-normal text-gray-600">See how this state-of-the-art Pectus system is used in chest wall deformity correction.  </p>
          {/* <button className="w-full md:w-auto text-center mt-6 bg-[#C49A69] hover:-translate-y-1 ease-in-out transition duration-300 rounded">
            <p className="text-base py-4 px-6 font-medium leading-none text-white">Find your industry</p>
          </button> */}
        </div>
        <div className="mainDiv pl-4 md:pl-6 ">
          <div className="h-5 mt-6 mb-4 md:mt-0 lg:mb-0 flex justify-end items-end space-x-6 ">
            <button aria-label="back"  className=" swiper-button-prev">
              <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/content_9_svg1.svg" alt="back" />
            </button>
            <button aria-label="next"  className=" swiper-button-next">
              <img className=" transform rotate-180" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/content_9_svg1.svg" alt="next" />
            </button>
          </div>
          <Swiper
            slidesPerView={'auto'} slidesPerGroupSkip={3} grabCursor={true} loopFillGroupWithBlank={true} loop={true}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}

          breakpoints={{
            // when window width is >= 320px
            "320": {
            slidesPerView: "auto",
            spaceBetween: 24,
            },
            // when window width is >= 480px
            "480": {
            slidesPerView: "auto",
            spaceBetween: 24,
            },
            // when window width is >= 640px
            "640": {
            slidesPerView: "auto",
            spaceBetween: 24,
            },
            "1024": {
                slidesPerView: "auto",
            spaceBetween: 32,
            },
            "1336": {
            slidesPerView: 3,
            spaceBetween: 32
            }
          }}
           className="swiper mySwiper">
            {techniques.map((technique, techniqueIdx) => (
              <SwiperSlide className="swiper-slide shadow-xl mb-10 mt-5  rounded-xl ">
                <div className="flex flex-col  space-y-4">
                  <div className="rounded-t-xl  group cursor-pointer relative flex justify-center items-center">
                    <a href={technique.watch} target="_blank" rel="noreferrer"><img className="rounded-t-xl  " src={technique.image} alt={technique.title} /></a> 
                  </div>
                  <div className="px-4 py-6 rounded-b-xl w-full flex justify-between  flex-col items-start ">
                    <p className="text-xs leading-none text-gray-600 text-left">{technique.sub} </p>
                                  <p className="mt-3 text-base font-semibold leading-none text-gray-800"><a href={technique.watch} target="_blank" rel="noreferrer">{technique.title}</a> </p>
                                  
                                  <button className="mt-6 hover:-translate-y-1 transition duration-500 ease-in-out flex justify-start items-center space-x-3">
                                      
                      {/* <p className="text-sm leading-none text-green-800">Find out more</p> */}
                      {/* <div className="w-4 ">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/content_9_svg-2.svg" alt="arrow" />
                      </div> */}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        <style>
{`
.mainDiv {
position: relative;
width: 100%
}

.swiper-button-next::after,
.swiper-button-prev::after {
    content: "";
}

.swiper-wrapper{
    display: flex;
    align-items: center;
} 

.swiper-button-next,
.swiper-button-prev {
    position: relative;
    height: 24px;
    width: 24px;
}

.swiper {
  
    height: 100%;
}
.swiper-slide:nth-child(n) {
width: 70%;
}

.swiper-slide:nth-child(2n) {
width: 70%;
}

@media (min-width: 768px) { 

.swiper-slide:nth-child(n) {
width: 35%;
}

.swiper-slide:nth-child(2n) {
width: 35%;
}
}
@media (min-width: 1024px) { 
.mainDiv {
position: relative;
height: 100%;
padding: 20px;
width: 70%
} 

.swiper-button-next,
.swiper-button-prev {
    position: relative;
    height: 32px;
    width: 32px;
}
.swiper-slide:nth-child(n) {
width: 40%;
}

.swiper-slide:nth-child(2n) {
width: 40%;
}
.swiper-slide:nth-child(3n) {
width: 40%;
}
}

@media (min-width: 1536px) { 
.mainDiv {
position: relative;
height: 100%;
padding: 40px;
width: 75%
} 

.swiper-button-next,
.swiper-button-prev {
    height: 40px;
    width: 40px;
}

.swiper-slide:nth-child(n) {
width: 30%;
}

.swiper-slide:nth-child(2n) {
width: 30%;
}
.swiper-slide:nth-child(3n) {
width: 30%;
}
.swiper-slide:nth-child(4n) {
width: 30%;
}
}   

.swiper-slide {
    
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-slide img {
   
    width: 660px;
    object-fit: cover;
}


`}

</style>
    </div>



  )
}
