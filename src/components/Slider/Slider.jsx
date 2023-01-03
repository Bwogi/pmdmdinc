import React, {useState} from 'react'
import './slider.scss'
import { EastOutlined, WestOutlined } from '@mui/icons-material';

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://www.ode-labs.net/pmdmdImages/v1.jpg",
        "https://www.ode-labs.net/pmdmdImages/v2.jpg",
        "https://www.ode-labs.net/pmdmdImages/v3.jpg",
        "https://www.ode-labs.net/pmdmdImages/v4.jpg"
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
        
    }
  return (
      <div className='slider'>
          <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
              <img src={data[0]} alt="" />
              <img src={data[1]} alt="" />
              <img src={data[2]} alt="" />
              <img src={data[3]} alt="" />
          </div>
          <div className="icons">
              <div className="icon" onClick={prevSlide}>
              <WestOutlined />
              </div>
              <div className="icon" onClick={nextSlide}>
              <EastOutlined />
              </div>
          </div>
    </div>
  )
}
