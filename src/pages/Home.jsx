import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Home.scss"
import Imgslider from "../component/slider/ImageSlider.jsx"
import { Button } from "bootstrap";
import { useEffect } from "react";
import RandomSlider from "../component/slider/randomSlider.jsx"

const Home = () => {

  
    return (
      
     // <div>
        <div className="home">
            <RandomSlider></RandomSlider>
            {/* <RandomSlider></RandomSlider> */}
            {/* <Imgslider></Imgslider>   */}
          
       
        

        </div>
     // </div>
  
    );
  
};


export default Home;