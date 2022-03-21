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

import artData from '../../assets/art/imageindex.js'

//images 
//const images = [{ image: require("../../assets/art/God.png") }]




export default function App() {

  const originalPath = artData.map(obj => {return obj.imagePath});
  const originalOrder = artData.map(obj => {return obj.id});

  const slide = [];

  originalPath.forEach((item, index)=>{ 
    slide.push(<SwiperSlide key={originalOrder[index]}> <img src={originalPath[index]} /></SwiperSlide>)
  })
  
  return (
    <div>
    <>
    <Swiper className="mySwiper" preloadImages={true} loop={true} >
      {slide}
    </Swiper>
    </>
  
  </div>
  
  )
}




