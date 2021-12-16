import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Imgslider from "../component/slider/ImageSlider.jsx"


const Home = () => {

    return (
      <div>
        <h1>Home</h1>
          <div id="image">
            <Imgslider></Imgslider>  
          </div>
       
        

        <div>Here is stuff</div>

      </div>
  
    );
  
};


export default Home;