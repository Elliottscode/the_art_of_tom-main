import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./component/Navbar.js"
import Home from "./pages/Home.jsx";

import About from "./pages/About.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import Support from "./pages/Support.jsx";

// import Home {Banner} from "./pages/Home";



export function App () {
    return (
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    );
}


