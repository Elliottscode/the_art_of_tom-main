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


  const pathData = artData.map(obj => {return [obj.id, obj.imagePath, obj.title, obj.category]})


  const slide = [];

  function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0 ) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

    }
    return array
}

  
  return (
    <div>
    <>
    <Swiper className="mySwiper" preloadImages={true} loop={true} >
      <SwiperSlide>

      </SwiperSlide>

      <SwiperSlide>

      </SwiperSlide>

      <SwiperSlide>

        
      </SwiperSlide>
    </Swiper>
    </>
  
  </div>
  
  )
}




