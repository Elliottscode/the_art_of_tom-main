import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Home.scss"
import Imgslider from "../component/slider/ImageSlider.jsx"


const Home = () => {

    return (
      
     // <div>
        <div className="home">    
            <Imgslider></Imgslider>  
          
       
        

        </div>
     // </div>
  
    );
  
};


export default Home;