import React from 'react'
// import CTA from '../../components/CTA/CTA'
// import CTA1 from '../../components/CTA/CTA1'
import Header from '../../components/Header/Header'
import Partners from '../../components/Partners/Partners'
import Slider from '../../components/Slider/Slider'
// import Contact from '../Contact/Contact'

const Home = () => {
    const title3 = 'We are distributor of Pediatric Medical Device. We pride ourselves in distributing the best technologies available in the marketplace.  We provide the state-of-the-art chest wall deformity correction equipment and supplies.';
  return (
      <div>
          <Header title1="We are a distributor of" title2="Pediatric Medical Devices" title3={title3} />
          <div className='flex justify-center'>
          <Slider />   
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