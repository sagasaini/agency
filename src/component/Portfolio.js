import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Portfolio.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import AboutCard from './AboutCard';
import PortfolioCard from './PortfolioCard'


function Portfolio() {
  return (
    <div className="slider-container-1">
     <h1>Portfolio</h1>
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
        className="swiper_container-1"
      >
        <SwiperSlide>
     
        </SwiperSlide>
        <SwiperSlide>
       {/* <AboutCard/> */}
       <PortfolioCard />
        </SwiperSlide>
        <SwiperSlide>
        <PortfolioCard />

        </SwiperSlide>
        <SwiperSlide>
        <PortfolioCard />

        </SwiperSlide>
        <SwiperSlide>
        <PortfolioCard />

        </SwiperSlide>
        <SwiperSlide>
        <PortfolioCard />

        </SwiperSlide>
      

        <div className="slider-controler-1">
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

export default Portfolio;