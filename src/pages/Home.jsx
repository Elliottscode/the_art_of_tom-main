import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Imgslider from "../component/slider/ImageSlider.jsx"


const Home = () => {

    return (
      <div>
          {/* <div id="image"> */}
            <Imgslider></Imgslider>  
          {/* </div> */}
       
        


      </div>
  
    );
  
};


export default Home;