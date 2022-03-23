import React, { useState } from "react";
// Swiper react components 
import { Swiper, SwiperSlide } from "swiper/react";
// Import swiper styles 
import "swiper/scss";
import "swiper/scss/pagination"

// my added styles 
import "./sliderStyles.scss"

// art data 
import artData from "../../assets/art/imageindex";

import SwiperCore, {
    Pagination, EffectCube
} from 'swiper';


SwiperCore.use([Pagination]);

// only ran once 
const pathData = artData.map(obj => {return [obj.id, obj.imagePath, obj.title, obj.category ]});
const randomPath = [];
let slideTitle = "";
function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
    
        while (currentIndex != 0 ) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
    
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    
        }
        return array
}

shuffleArray(pathData);
for (let i = 0; i < [pathData.length]; i++ ) {
        randomPath.push(<SwiperSlide key={pathData[i][0]}><img src={pathData[i][1]}  alt={pathData[i][2]}/></SwiperSlide>)
    }
    



export default function App() {

    



    



   

    
    
    function titleUpdate(index) {
        console.log(index)
        if (index === -1) {
            index = 259;
        }
        console.log(index)
        slideTitle = pathData[index][2]; 
        return slideTitle;
    }
    const first = titleUpdate(0);
    let [artTitle, setTitle] = useState(first);


    return (
        <div>
        <>
        <p id="titleBox" >{artTitle}</p>
        <Swiper id="randomSwiper" className="swiper" preloadImages={true} loop={true} draggable={true}  onSlideChange={index => setTitle(titleUpdate((index.activeIndex - 1)))} >
            {randomPath}
        </Swiper>
        
        
        
        
        </>






        </div>

    )




}