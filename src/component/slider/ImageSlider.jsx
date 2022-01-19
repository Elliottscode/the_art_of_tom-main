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

  const path = artData.map(obj => {return obj.imagePath});
  console.log(path)


  
  return (
    <>
    <Swiper pagination={true} className="mySwiper" loop={true} preloadImages={true} autoHeight={true} >

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
  )
}




