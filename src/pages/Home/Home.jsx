import React from "react";
// import BelowSlide from '../../components/BelowSlide/BelowSlide'
// import CTA from '../../components/CTA/CTA'
// import CTA1 from '../../components/CTA/CTA1'
// import Header from '../../components/Header/Header'
// import Partners from '../Partners/Partners'
// import Slider from "../../components/Slider/Slider";
// import Contact from '../Contact/Contact'
// import ImageIndex from  '../../img/img_index.jpg'
// import {Link} from 'react-router-dom'
// import STVideos from "../../components/STVideos/STVideos";
// import Featured from "../../components/Featured/Featured";
// import NewHeader from "../../components/NewHeader/NewHeader";
// import Contact from "../../components/Contact/Contact";
// import Products from "../../components/Products/Products";
// import SurgicalTechniques from "../../components/SurgicalTechniques/SurgicalTechniques";
// import Contact1 from "../../components/Contact1/Contact1";
// import SliderNew from "../../components/SliderNew/SliderNew";
// import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import HeroNew from "../../components/HeroNew/HeroNew";
// import CTANew1 from "../../components/CTANew1/CTANew1";
// import FeatureSectionNew from "../../components/FeatureSectionNew/FeatureSectionNew";
// import Navigation from "../../components/Navigation/Navigation";
// import Blog from '../../components/Blog/Blog'
// import Hero from '../../components/Hero/Hero'
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
// import StoreCategories from "../../components/StoreCategories/StoreCategories";
// import ProductCategories from "../../components/ProductCategories/ProductCategories";

const Home = () => {
  // const title3 = 'We are a distributor of Pediatric Medical Devices. We pride ourselves in distributing the best technologies available in the marketplace.  We provide the state-of-the-art chest wall deformity correction equipment and supplies.';
  return (
    <div>
      {/* <Slider /> */}
      {/* <Hero /> */}
      {/* <Navigation /> */}
      {/* <SliderNew /> - switched off temporarily */}

      <div>
        <HeroNew />
      </div>

      {/* <div id="about">
        <NewHeader />
      </div> */}
      {/* <ProductCategories /> */}
      <FeaturedProducts />
      {/* <StoreCategories /> */}
      {/* <div>
        <FeatureSectionNew />
      </div> */}
      {/* <div id="featured-products">
        <FeaturedProducts />
      </div> */}

      {/* <Header intro="INTRODUCING xPEDIATRIC MEDICAL DEVICE MARKETING AND DISTRIBUTION LLC" title1="We are a distributor of" title2="Pediatric Medical Devices" title3={title3} /> */}

      {/* Park's pectus system featured products */}
      {/* <Featured type="Featured" /> */}

      {/* <Featured type="Trending" /> */}
      {/* <div className='flex justify-center flex-col items-center'>
              <BelowSlide />
          </div> */}

      {/* <div id="partners"><Partners /></div> */}
      {/* <div id="techniques">
        <SurgicalTechniques />
      </div>
      <div>
        <STVideos />
      </div>
      <div id="product-list">
        <Products />
      </div> */}
      {/* <div id='blog'><Blog /></div> */}
      {/* <div id="contact"> */}
      {/* <Contact /> */}
      {/* <Contact1 /> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
