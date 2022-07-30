import React from "react";
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

// import Home {Banner} from "./pages/Home";



export function App () {
    


  return (
      <BrowserRouter>
          {/* <Navbar />
          <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/support" element={<Support />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </BrowserRouter>

    );
}


