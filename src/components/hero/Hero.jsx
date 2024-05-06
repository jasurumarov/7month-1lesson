import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// IMAGES
import HeroBg1 from '../../images/heroBag.png'
import HeroBg2 from '../../images/heroBag2.png'
import HeroBg3 from '../../images/banner2.png'

import { Navigation, Autoplay} from 'swiper/modules';
import { TbBrandTelegram } from 'react-icons/tb';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="container">
        <Swiper 
          loop={true} 
          navigation={true} 
          autoplay={{
            delay: 25000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]} 
          className="hero__swiper">
          <SwiperSlide>
            <img src={HeroBg1} alt="swiper img" />
            <div className="delivery-section__content">
                <h2>Fresh Vegetables Big discount</h2>
                <p>Save up to 50% off on your first order</p>
                <form>
                    <TbBrandTelegram className='hero-section__title__form-icon' />
                    <input type="email" placeholder='Your emaill address' required/>
                    <button>Subscribe</button>
                </form>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroBg2} alt="swiper img" />
            <div className="delivery-section__content">
            <h2>Stay home & get your daily</h2>
                <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
                <form>
                    <TbBrandTelegram className='hero-section__title__form-icon' />
                    <input type="email" placeholder='Your emaill address' required/>
                    <button>Subscribe</button>
                </form>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Hero