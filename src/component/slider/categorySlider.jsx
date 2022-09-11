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
    let slideCategory = [];
    console.log(Object.values(arrCat)[0][3].category)
    console.log(Object.values(arrCat)[0][3].imagePath)
    let catLegnth = Object.keys(arrCat).length;
    for (let i = 0; i < arRand.length; i ++) {

        // object[i] =  <swiper> or slides[i] = swiper 
        let slides = [];
        slides.push(<SwiperSlide key={"random" + i}><img src={arRand[i][1]} alt={arRand[i][2]} /></SwiperSlide>)

        for (let j = 0; j < catLegnth; j ++) {
            //console.log("hi")
            let lengthofgroup = Object.values(arrCat)[j];
            if (arRand[i][3] === Object.values(arrCat)[j][0].category) {
                //console.log("working here")
                for (let k = 0; k < lengthofgroup.length; k ++ ) {
                    let srcs = Object.values(arrCat)[j][k].imagePath;
                    let alts = Object.values(arrCat)[j][k].title;
                    let cateogory = Object.values(arrCat)[j][k].category;
                    if (arRand[i].id !== Object.values(arrCat)[j][k].id) {
                        slides.push(<SwiperSlide key={"category" + k}><img src={srcs} alt={alts + ", " + cateogory} /></SwiperSlide>)
                        
                    }
                }

            }
        }
        
        //console.log(slides)
        slideCategory.push(<SwiperSlide key={"categorySlidermain" + i}><Swiper key={"categorySlider" + i} className="swiper" loop={true} direction={"vertical"} draggable={true} nested={true}  >{slides}</Swiper></SwiperSlide>)
    }
    return (slideCategory)

}
let index = Swiper.realIndex;
console.log(index)


console.log("this")
//addToCategory(pathData, category2, uniqueCatogorys);
const random = shuffleArray(pathData);
console.log("this is random")
console.log(random)
const catObj = groupBy(artData, "category");
console.log("this is groupby")
console.log(catObj)
let sli = createSlider(random, catObj);
console.log(sli)





export default function App() {



    return (
        <div>
            <>
            <Swiper id="categorySlider" className="swiper" preloadImages={true} loop={true} draggable={true} nested={true}>
                {sli}
            </Swiper>
            </>
        </div>

    )


}

