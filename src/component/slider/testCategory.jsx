import React, {useState, useEffect} from "react";



// swiper component import 
import { Swiper, SwiperSlide } from "swiper/react";


// swiper styles 
import "swiper/scss";
import "swiper/scss/pagination";


// my styles 
import "./sliderStyles.scss"

// art data 
import  artData from "../../assets/art/imageindex";

import SwiperCore, {
    Pagination, navigation, Navigation
} from 'swiper';


SwiperCore.use([Pagination, Navigation]);


function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0 ) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

    }
    return array
}

const pathData = artData.map(obj => {return [obj.id, obj.imagePath, obj.title, obj.category]})
const random = shuffleArray(artData);


export default function App() {
    return (
        <>
        <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        pagination={{clickable: true}}
        modules={[Pagination]} 
        >
            <SwiperSlide id="h1">
                Slide 1 
            </SwiperSlide>

            <SwiperSlide>
            <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            loop={true}>
                <SwiperSlide key="v11">vertical 1</SwiperSlide>
                <SwiperSlide key="v12">vertical 2</SwiperSlide>
                <SwiperSlide key="v13">vertical 3</SwiperSlide>
                <SwiperSlide key="v14">vertical 4</SwiperSlide>
                <SwiperSlide key="v15">vertical 5</SwiperSlide>

            </Swiper>
            </SwiperSlide>

            <SwiperSlide>
            <Swiper
            className="mySwiper3 swiper-v"
            direction={"vertical"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            loop={true}>
                <SwiperSlide key="v21">other vertical 1</SwiperSlide>
                <SwiperSlide key="v22">other vertical 2</SwiperSlide>
                <SwiperSlide key="v23">other vertical 3</SwiperSlide>
                <SwiperSlide key="v24">other vertical 4</SwiperSlide>
                <SwiperSlide key="v25">other vertical 5</SwiperSlide>


            </Swiper>
            </SwiperSlide>
            <SwiperSlide>
            <Swiper className="mySwiper4 swiper-v"
            direction={"vertical"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            loop={true}>
                <SwiperSlide key="v31">other other vertical 1</SwiperSlide>
                <SwiperSlide key="v32">other other vertical 2</SwiperSlide>
                <SwiperSlide key="v33">other other vertical 3</SwiperSlide>
                <SwiperSlide key="v34">other other vertical 4</SwiperSlide>
                <SwiperSlide key="v35">other other vertical 5</SwiperSlide>


            </Swiper>
            </SwiperSlide>



        </Swiper>
        
        
        
        </>


    );
}

