import React, { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import Imgslider from "./component/slider/ImageSlider.jsx"
//nav bar 
import Navbar from "./component/nav/Navbar.js"

// top scroller 
import  ScrollToTop  from "./component/ScrollToTop.js";

// pages 
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Categories from "./pages/Categories.jsx";
import Support from "./pages/Support.jsx";
import Collection from "./pages/Collection.jsx";
import Load from "./component/loading/loading.jsx";

// import Home {Banner} from "./pages/Home";

// import for loading page 
import LoadingScreen from "./component/loading/loading.jsx";



export function App () {
    const [loading, setLoading] = useState(true)

    useEffect(() => {setTimeout(() => setLoading(false), 3000)}, [])


  return (
    <>
    {loading === false ? (
      
      <BrowserRouter>
          {/* <Navbar />
          <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/support" element={<Support />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </BrowserRouter>) : (
      
      
      <LoadingScreen />)}
    
    
    </>
      

    );
}


