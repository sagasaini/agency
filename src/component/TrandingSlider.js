import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './TradingSlider.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import AboutCard from './AboutCard';


function TradingSlider() {
  return (
    <div className="slider-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
     
        </SwiperSlide>
        <SwiperSlide>
       <AboutCard/>
        </SwiperSlide>
        <SwiperSlide>
        <AboutCard/>

        </SwiperSlide>
        <SwiperSlide>
        <AboutCard/>

        </SwiperSlide>
        <SwiperSlide>
        <AboutCard/>

        </SwiperSlide>
        <SwiperSlide>
        <AboutCard/>

        </SwiperSlide>
      

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          <FaArrowLeft/>
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
          </div>
          <div className="swiper-button-next slider-arrow">
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
            <FaArrowRight />

          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default TradingSlider;