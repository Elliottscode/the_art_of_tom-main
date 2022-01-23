import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//nav bar 
import Navbar from "./component/Navbar.js"

// pages 
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import Collection from "./pages/Collection.jsx";

// import Home {Banner} from "./pages/Home";



export function App () {
    


  return (
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    );
}


