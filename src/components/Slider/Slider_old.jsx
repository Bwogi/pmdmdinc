import React from 'react'
import { Carousel } from "antd";


const Slider = () => {
 
  return (
    <div>
    <div className='w-[1146px] h-[500px] bg-orange-400 rounded-xl overflow-hidden'>
      <Carousel autoplay>
        <div>
          <img src='/img/v1.jpg' alt="" />
        </div>
        <div>
          <img src='/img/v2.jpg' alt="" />
        </div>
        <div>
          <img src='/img/v3.jpg' alt="" />
        </div>
        <div>
          <img src='/img/v4.jpg' alt="" />
        </div>
      </Carousel>
    </div>
  </div>
  )
}

export default Slider