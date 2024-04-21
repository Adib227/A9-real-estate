import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper my-8 mt-10 lg:mt-8"
    >
      <SwiperSlide>
        <img
          className="h-fit lg:h-[600px] w-full relative"
          src="https://i.ibb.co/WWp5jqx/house-540796-1280.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-fit lg:h-[600px] w-full"
          src="https://i.ibb.co/N3XBr4d/house-1836070-1280.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-fit lg:h-[600px] w-full"
          src="https://i.ibb.co/jwTmfvK/large-home-389271-1280.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
