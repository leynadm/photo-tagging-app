import React, { useState, useEffect } from "react";
import imgLevel01 from "../images/level-01.jpg";
import "../styles/Game.css";
import Dropdown from "./Dropdown";
import firebase from "../config/firebase";
import { app, db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

function Game() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const [dropdownCoords, setDropdownCoords] = useState("");
  /* 
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(db, "coordinates"));
      console.log("Firestore data:", data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, [db]);
 */

  const getDropdownCoordinates = (event) => {
    const clickedElement = event.target;

    const coords = clickedElement.getAttribute("coords");
    console.log("Clicked area coordinates:", coords);
    setDropdownCoords(coords);

    const rect = clickedElement.getBoundingClientRect();
    const dropdownX = event.clientX - rect.left;
    const dropdownY = event.clientY - rect.top;
    setDropdownPosition({ x: dropdownX, y: dropdownY });
    setDropdownVisibility(true);
  };

  return (
    <div className="game-wrapper">
      <img
        className="game-image"
        src={imgLevel01}
        alt="level 1"
        useMap="#image-map"
        onClick={getDropdownCoordinates}
      />

      <map name="image-map">
        <area
          alt="random z warrior to guess"
          coords="1366,125,1624,298"
          shape="rect"
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="830,105,978,281"
          shape="rect"
          onClick={getDropdownCoordinates}
        />
      </map>

      {dropdownVisibility && (
        <Dropdown
          clickPosition={dropdownPosition}
          dropdownCoords={dropdownCoords}
        />
      )}
    </div>
  );
}

export default Game;
