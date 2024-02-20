import React, { useState, useEffect } from "react";
// Swiper react components 
import { Swiper, SwiperSlide } from "swiper/react";
// Import swiper styles 
import "swiper/scss";
import "swiper/scss/pagination"
import "swiper/scss/navigation"

// my added styles 
import "./sliderStyles.scss"

// art data 
import artData from "../../assets/art/imageindex";

import SwiperCore, {
    Pagination, navigation, Navigation
} from 'swiper';


SwiperCore.use([Pagination, Navigation]);

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
    
console.log(randomPath)


export default function App() {

    
    
    function titleUpdate(index) {
        console.log(index)
        setShowElement(true)
        console.log(typeof titleTimer)
        if (typeof titleTimer !== 'undefined') {
            // the variable is defined
            console.log("whoo")
            clearTimeout(titleTimer);
        }
        slideTitle = pathData[index][2]; 
        return slideTitle;
    }
    // changes title for slide change  
    let [artTitle, setTitle] = useState(0);

    // hides the title after x seconds 
    const [showElement, setShowElement] = useState(true);
    let titleTimer;
    function titleDisapear() {   
        titleTimer = setTimeout(function () {
            setShowElement(false);
            console.log("here");
        }, 10000);
    }
    
    useEffect(() => {
        titleDisapear()
    }, []);
    
    // for debugging title box print statment in on transition end 
    


    return (
        <div id="sliderSize">
        <>
        {showElement ? (<div className="titleBox"><div id="titleText" >{artTitle}</div></div>) : (<div></div>)}{" "}
        <Swiper id="randomSwiper" className="swiper" navigation={true} preloadImages={true} loop={true} draggable={true} preventInteractionOnTransition={true} onTransitionEnd={titleDisapear()} onSlideChange={index => setTitle(titleUpdate(index.realIndex))} >
            {randomPath}
        </Swiper>
        
        
        
        
        </>


        </div>

    )




}