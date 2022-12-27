import React from 'react'
import BelowSlide from '../../components/BelowSlide/BelowSlide'
// import CTA from '../../components/CTA/CTA'
// import CTA1 from '../../components/CTA/CTA1'
import Header from '../../components/Header/Header'
import Partners from '../../components/Partners/Partners'
import Slider from '../../components/Slider/Slider'
// import Contact from '../Contact/Contact'
// import ImageIndex from  '../../img/img_index.jpg'
import {Link} from 'react-router-dom'

const Home = () => {
    const title3 = 'We are a distributor of Pediatric Medical Devices. We pride ourselves in distributing the best technologies available in the marketplace.  We provide the state-of-the-art chest wall deformity correction equipment and supplies.';
  return (
      <div>
          <Header title1="We are a distributor of" title2="Pediatric Medical Devices" title3={title3} />
          <div className='flex justify-center items-center mb-10'>
          <button className='border border-gray-200  px-5 py-2 text-white bg-gray-600 rounded-md hover:bg-[#3BB3BD] hover:border-[#3BB3BD]'><Link to="/products">See Our Catalogue</Link></button>
              
          </div>
          <div className='flex justify-center flex-col items-center'>
              <Slider /> 
              <BelowSlide />
          </div>
          <div> 
          <Partners />
          </div>
          {/* <CTA />
          <CTA1 /> */}
          {/* <div id='contact'>
              <Contact />
          </div> */}
      </div>
  )
}

export default Home