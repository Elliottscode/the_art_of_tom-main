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
function createCategory () {
    for (let i = 0; i < artData.length; i++) {
        let list = list.filter((x, i, categoryData) => categoryData.indexOf(x) == i);
        list.forEach()
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

