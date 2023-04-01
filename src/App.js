import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../src/components/About";
import Home from "../src/components/Home";
import Menu from "./components/Menu";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [gameLoaded, setGameLoaded] = useState(false);
  //const [timer, setTimer] = useState(0)
  const [seconds, setSeconds] = useState(0);

  return (
    <div className="App">
      <Router basename="/">
        <Navbar
          gameLoaded={gameLoaded}
          seconds={seconds}
          setSeconds={setSeconds}
        />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route
            path="/game"
            element={<Game setGameLoaded={setGameLoaded} seconds={seconds} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
