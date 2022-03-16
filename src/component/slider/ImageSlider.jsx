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

  const slide = [];
  // art paths 
  const path = artData.map(obj => {return obj.imagePath});
  // randomise art 
  function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0 ) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

    }
    return array
  }
  shuffleArray(path);
  path.forEach((item, index)=>{
    slide.push(<SwiperSlide> <img src={path[index]} /> </SwiperSlide>)
  })
  
  return (
    <div>
    <>
    <Swiper className="mySwiper" preloadImages={true} loop={true} >
      {slide}
    </Swiper>
    </>
  
  <>
  <Swiper className="mySwiper2" loop={true}>
  <SwiperSlide> <img src={path[0]} /> </SwiperSlide>
  <SwiperSlide> <img src={path[1]} /> </SwiperSlide>
  <SwiperSlide> <img src={path[2]} /> </SwiperSlide>
  <SwiperSlide> <img src={path[3]} /> </SwiperSlide>
  <SwiperSlide> <img src={path[4]} /> </SwiperSlide>
  <SwiperSlide> <img src={path[5]} /> </SwiperSlide>
  <SwiperSlide> <img src={path[7]} /> </SwiperSlide>
  <SwiperSlide> <img src={path[8]} /></SwiperSlide>
  <SwiperSlide> <img src={path[9]} /> </SwiperSlide>

  </Swiper>

  </>
  </div>
  
  )
}




