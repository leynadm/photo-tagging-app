import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../src/components/About";
import Home from "../src/components/Home";
import Menu from "./components/Menu";
import Game from "./components/Game";

function App() {
  const [gameLoaded, setGameLoaded] = useState(false);

  return (
    <div className="App">
      <Router basename="/">
        <Navbar gameLoaded={gameLoaded} />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/game"
            element={<Game setGameLoaded={setGameLoaded} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
