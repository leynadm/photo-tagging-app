import React, { useState, useEffect } from "react";
import imgLevel01 from "../images/level-01.jpg";
import "../styles/Game.css";
import Dropdown from "./Dropdown";
import firebase from "../config/firebase";
import { app, db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import imageMapResizerMin from "image-map-resizer";

function Game() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const [zWarriorId, setzWarriorId] = useState("");
  const [selectionResult, setSelectionResult] = useState("");

  /* 
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(db, "coordinates"));
      console.log("Firestore data:", data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, [db]);
 */

  useEffect(() => {
    import("image-map-resizer").then((module) => module.default());
  }, []);

  const getDropdownCoordinates = (event) => {
    const clickedElement = event.target;

    const coords = clickedElement.getAttribute("coords");
    const z_warrior_id = clickedElement.getAttribute("data-z-warrior");
    console.log("warrior selected: " + z_warrior_id);
    console.log("Clicked area coordinates:", coords);
    setzWarriorId(z_warrior_id);

    const rect = clickedElement.getBoundingClientRect();
    const dropdownX = event.clientX - rect.left;
    const dropdownY = event.clientY - rect.top;
    setDropdownPosition({ x: dropdownX, y: dropdownY });
    setDropdownVisibility(true);
  };

  return (
    <div className="game-wrapper">
      <div className="user-selection correct">Correct!</div>
      <div className="user-selection wrong">Try again!</div>

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
          data-z-warrior="v+SG6ZnE6LfBYo6h9L/4Ew=="
          shape="rect"
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="830,105,978,281"
          data-z-warrior="utS2qAuj+k3HjE7QoJ+zYw=="
          shape="rect"
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="830,105,978,281"
          data-z-warrior="cell"
          shape="rect"
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="1229,271,1324,368"
          shape="rect"
          data-z-warrior="8tgCm0Qu29J/yj+DxI2JIQ=="
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="1446,553,1534,641"
          shape="rect"
          data-z-warrior="QnAQuayTssjxuZnw23QfLg=="
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="1290,454,1380,553"
          shape="rect"
          data-z-warrior="o91fhz9XzrH83yL7j3qJYw=="
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="678,387,779,495"
          shape="rect"
          data-z-warrior="t3/w9Xs1snpJl6T2U6VlBw=="
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="765,551,846,641"
          shape="rect"
          data-z-warrior="xA5wpjs4o4mpEn4I1MzfzQ=="
          onClick={getDropdownCoordinates}
        />

        <area
          data-z-warrior="uJcOY+HwjqNROuJvZ8V7qg=="
          alt="random z warrior to guess"
          coords="646,677,727,767"
          shape="rect"
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="539,372,620,462"
          shape="rect"
          data-z-warrior="ETuow+12npx7oI5S0D1jBw=="
          onClick={getDropdownCoordinates}
        />

        <area
          data-z-warrior="X9rKq3+7cAH80EG56zvbjA=="
          alt="random z warrior to guess"
          coords="64,503,142,621"
          shape="rect"
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="384,427,500,573"
          shape="rect"
          data-z-warrior="gHKmc/IJPTXOezRmOIBfjw=="
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="916,372,1076,522"
          shape="rect"
          data-z-warrior="bFzf1nW8JUo0+U98ezl89g=="
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="199,402,281,521"
          shape="rect"
          data-z-warrior="rqZMtd7x8mUnXLaJ7VfbMA=="
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="367,131,447,287"
          shape="rect"
          data-z-warrior="l4fJ/vKj+Ge1tQGQ2cJjxA=="
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="452,46,530,146"
          shape="rect"
          data-z-warrior="SzM+Q7CfD1+uV7JHbG8uTQ=="
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="1672,450,1773,559"
          shape="rect"
          data-z-warrior="/2PhBBfnruYSJh2YKfvmzg=="
          onClick={getDropdownCoordinates}
        />

        <area
          alt="random z warrior to guess"
          coords="1104,590,1205,699"
          shape="rect"
          data-z-warrior="FzNTEt3OlztXqwmu/1i7vA=="
          onClick={getDropdownCoordinates}
        />
      </map>

      {dropdownVisibility && (
        <Dropdown
          clickPosition={dropdownPosition}
          zWarriorId={zWarriorId}
          selectionResult={selectionResult}
        />
      )}

    </div>
  );
}

export default Game;
