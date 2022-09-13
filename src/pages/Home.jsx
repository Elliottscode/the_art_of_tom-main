import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Home.scss"
// import Imgslider from "../component/slider/ImageSlider.jsx"
import { Button } from "bootstrap";
import { useEffect } from "react";
import RandomSlider from "../component/slider/randomSlider.jsx"
import CategorySlider from "../component/slider/categorySlider.jsx"



const Home = () => {

  
    return (
      
        <div className="home">
            {/* <RandomSlider></RandomSlider> */}
            <CategorySlider></CategorySlider>
            
       
          
       
        

        </div>
  
    );
  
};


export default Home;