import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../../Pages/About.js";
import Housing from "../../Pages/Housing.js";
import NotFound from "../../Pages/NotFound.js";
import Home from "../../Pages/Home.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/annonce/:id" element={<Housing />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;