import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../src/components/About";
import Home from "../src/components/Home";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;