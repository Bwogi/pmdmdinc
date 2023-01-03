import React from 'react'
// import BelowSlide from '../../components/BelowSlide/BelowSlide'
// import CTA from '../../components/CTA/CTA'
// import CTA1 from '../../components/CTA/CTA1'
// import Header from '../../components/Header/Header'
import Partners from '../Partners/Partners'
// import Slider from '../../components/Slider/Slider'
// import Contact from '../Contact/Contact'
// import ImageIndex from  '../../img/img_index.jpg'
// import {Link} from 'react-router-dom'
import Featured from '../../components/Featured/Featured'
import NewHeader from '../../components/NewHeader/NewHeader'
import Contact from '../../components/Contact/Contact'
import Products from '../../components/Products/Products'
import SurgicalTechniques from '../../components/SurgicalTechniques/SurgicalTechniques'
import Blog from '../../components/Blog/Blog'
// import Hero from '../../components/Hero/Hero'

const Home = () => {
    // const title3 = 'We are a distributor of Pediatric Medical Devices. We pride ourselves in distributing the best technologies available in the marketplace.  We provide the state-of-the-art chest wall deformity correction equipment and supplies.';
  return (
      <div>
          {/* <Slider />  */}
      {/* <Hero /> */}
      <div id='about'><NewHeader  /></div>
      
          {/* <Header intro="INTRODUCING PEDIATRIC MEDICAL DEVICE MARKETING AND DISTRIBUTION LLC" title1="We are a distributor of" title2="Pediatric Medical Devices" title3={title3} /> */}

          <Featured type="Featured" />
          
          {/* <Featured type="Trending" /> */}
          {/* <div className='flex justify-center flex-col items-center'>
              <BelowSlide />
          </div> */}
      
          <div id='partners'> 
            <Partners />
          </div>
          <div id='techniques'>
            <SurgicalTechniques />
          </div>
          <div id='catalogue'>
            <Products />
      </div>
      {/* <div id='blog'><Blog /></div> */}
          <div id='contact'>
            <Contact />      
          </div>
         
      </div>
  )
}

export default Home