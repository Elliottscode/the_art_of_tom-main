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

import SwiperCore, { Pagination } from "swiper";



SwiperCore.use([Pagination]);

const pathData = artData.map(obj => {return [obj.id, obj.imagePath, obj.title, obj.category]})
const categoryData = artData.map(obj => {return obj.category});
const uniqueCatogorys = [... new Set(categoryData)];
const category = [];
const culture = [];
const politics = [];

function createCategory () {
    for (let i = 0; i < artData.length; i++) {
        
    }
} 


export default function App() {



    return (
        <div>
            <Swiper id="categorySlider" className="swiper" preloadImages={true} loop={true} draggable={true}>

            </Swiper>
        </div>

    )


}
