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


function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0 ) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

    }
    return array
}





function groupBy(ar, prop) {
    let cat = {};
    for (let i=0; i < ar.length; i++) {
        let p = ar[i][prop];
        if (!cat[p]) { cat[p] = []; }
        cat[p].push(ar[i]);
    }
    return cat;
}

function addToCategory (pathData, category2, uniqueCatogorys) {
    for (let i = 0; i < pathData.length; i ++) {
       for (let j = 0; j < uniqueCatogorys.length; j ++) {
           console.log(pathData[i][3])
           if (pathData[i][3] === uniqueCatogorys[j] ) {
               let objTitle = pathData[i][3];
               category2.objTitle.push(<SwiperSlide key={pathData[i][0]}><img src={pathData[i][1]}  alt={pathData[i][2]}/></SwiperSlide>)
               
           }
           else return
       }
    }
}

function createSlider (arRand, arrCat) {
    let slides = [];
    for (let i = 0; i < arRand.length; i ++) {
        slides.push(<Swiper>, </Swiper>)
        for (let j = 0; j < arrCat[i].length; j ++) {

        }
    }

}



console.log("this")
//addToCategory(pathData, category2, uniqueCatogorys);
const random = shuffleArray(artData);
const catObj = groupBy(artData, "category");
console.log(catObj)




export default function App() {



    return (
        <div>
            <Swiper id="categorySlider" className="swiper" preloadImages={true} loop={true} draggable={true}>
                catObj
            </Swiper>
        </div>

    )


}

