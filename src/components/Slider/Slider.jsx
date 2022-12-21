import React from 'react'
import { Carousel } from "antd";
import Img1 from "../../img/v1.jpg";
import Img2 from "../../img/v2.jpg";
import Img3 from "../../img/v3.jpg";

const Slider = () => {
  return (
    <div>
    <div className='w-[1146px] h-[500px] bg-orange-400 rounded-xl overflow-hidden'>
      <Carousel autoplay>
        <div>
          <img src={Img1} alt="" />
        </div>
        <div>
          <img src={Img2} alt="" />
        </div>
        <div>
          <img src={Img3} alt="" />
        </div>
        <div>
          <img src={Img1} alt="" />
        </div>
      </Carousel>
    </div>
  </div>
  )
}

export default Slider