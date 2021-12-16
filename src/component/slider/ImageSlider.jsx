import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination"

import "./sliderStyles.scss"

// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

import image1 from "../../assets/art/God.png"

//images 
//const images = [{ image: require("../../assets/art/God.png") }]


export default function App() {
  
  
  
  return (
    <>
    <Swiper pagination={true} className="mySwiper">

  <SwiperSlide> <img src={image1} />   </SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
  <SwiperSlide>Slide 5</SwiperSlide>
  <SwiperSlide>Slide 6</SwiperSlide>
  <SwiperSlide>Slide 7</SwiperSlide>
  <SwiperSlide>Slide 8</SwiperSlide>
  <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
    </>
  )
}




