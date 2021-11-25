import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Home from "./src/pages/Home";

import About from "./src/pages/About";
// import Home {Banner} from "./pages/Home";



export function App () {
    return (
      <Router>
        <div>
            <Link to="/">Home</Link>
            
            <Link to="/">About</Link>
        </div>
        <Routes>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />


          </Route>

        </Routes>
      </Router>
    );
}


