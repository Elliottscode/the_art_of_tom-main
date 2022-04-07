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
console.log(uniqueCatogorys)
const category2 = [];


const culture = [];
const politics = [];

function createCategory (uniqueCatogorys, category2) {
    for (let i = 0; i < uniqueCatogorys.length; i++) {
        category2[uniqueCatogorys[i]] = {};
        
    }
    return
} 

function addToCategory (pathData, category2, uniqueCatogorys) {
    for (let i = 0; i < pathData.length; i ++) {
       for (let j = 0; j < uniqueCatogorys.length; j ++) {
           console.log(pathData[i][3])
           if (pathData[i][3] === uniqueCatogorys[j] ) {
               category2[j].push(<SwiperSlide key={pathData[i][0]}><img src={pathData[i][1]}  alt={pathData[i][2]}/></SwiperSlide>)
               
           }
           else return
       }
    }
}

createCategory(uniqueCatogorys, category2);
console.log(category2)
addToCategory(pathData, category2, uniqueCatogorys);
console.log(category2)


export default function App() {



    return (
        <div>
            <Swiper id="categorySlider" className="swiper" preloadImages={true} loop={true} draggable={true}>
                {category[0]}
            </Swiper>
        </div>

    )


}

