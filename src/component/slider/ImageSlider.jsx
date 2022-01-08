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

//import image100 from "../../assets/art/God.png"

import {image0, image1, image2, image3, image4, image5, image6, image7, image8, image9 } from '../../assets/art/imageindex.js'

//images 
//const images = [{ image: require("../../assets/art/God.png") }]


export default function App() {
  
  
  
  return (
    <>
    <Swiper pagination={true} className="mySwiper">

  <SwiperSlide> <img src={image0} /> </SwiperSlide>
  <SwiperSlide> <img src={image1} /> </SwiperSlide>
  <SwiperSlide> <img src={image2} /> </SwiperSlide>
  <SwiperSlide> <img src={image3} /> </SwiperSlide>
  <SwiperSlide> <img src={image4} /> </SwiperSlide>
  <SwiperSlide> <img src={image5} /> </SwiperSlide>
  <SwiperSlide> <img src={image6} /> </SwiperSlide>
  <SwiperSlide> <img src={image7} /></SwiperSlide>
  <SwiperSlide> <img src={image8} /> </SwiperSlide>
  </Swiper>
    </>
  )
}




