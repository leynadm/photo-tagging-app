import React, { useState, useEffect } from "react";
import imgLevel01 from "../images/level-01.jpg";
import "../styles/Game.css";
import Dropdown from "./Dropdown";
import firebase from "../config/firebase";
import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
} from "firebase/firestore";

import imageMapResizerMin from "image-map-resizer";

function Game({ setGameLoaded, seconds }) {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const [zWarriorId, setZWarriorID] = useState("");
  const [selectionResultCorrect, setSelectionResultCorrect] =
    useState("no-selection");
  const [selectionResultIncorrect, setSelectionResultIncorrect] =
    useState("no-selection");
  const [endGame, setEndGame] = useState(false)

  const [randomWarriors, setRandomWarriors] = useState([
    { warrior: "songoku", name: "Son Goku" },
    { warrior: "kingcold", name: "King Cold" },
    { warrior: "android19", name: "Android 19" },
    { warrior: "mechafrieza", name: "Mecha Frieza" },
    { warrior: "futuretrunks", name: "Future Trunks" },
    { warrior: "piccolo", name: "Piccolo" },
    { warrior: "cell", name: "Cell" },
    { warrior: "krilin", name: "Krillin" },
    { warrior: "chiaotzu", name: "Chiaotzu" },
    { warrior: "yamcha", name: "Yamcha" },
    { warrior: "tien", name: "Tien" },
    { warrior: "vegeta", name: "Vegeta" },
    { warrior: "android16", name: "Android 16" },
    { warrior: "android17", name: "Android 17" },
    { warrior: "android18", name: "Android 18" },
    { warrior: "android20", name: "Android 20" },
    { warrior: "songohan", name: "Son Gohan" },
    { warrior: "celljr1", name: "Cell Jr. #1" },
  ]);

  // START THE TIMER WHEN THE COMPONENT MOUNTS
  useEffect(() => {
    setGameLoaded(true);
  }, []);

  // STOP THE TIMER WHEN THE COMPONENT UN-MOUNTS
  useEffect(() => {
    return () => {
      setGameLoaded(false);
    };
  }, []);

  useEffect(() => {
    import("image-map-resizer").then((module) => module.default());
  }, []);

  const getDropdownCoordinates = (event) => {
    const clickedElement = event.target;

    const coords = clickedElement.getAttribute("coords");
    const z_warrior_id = clickedElement.getAttribute("data-z-warrior");
    console.log("warrior selected: " + z_warrior_id);
    console.log("Clicked area coordinates:", coords);
    setZWarriorID(z_warrior_id);

    const rect = clickedElement.getBoundingClientRect();
    const dropdownX = event.clientX - rect.left;
    const dropdownY = event.clientY - rect.top;
    setDropdownPosition({ x: dropdownX, y: dropdownY });
    setDropdownVisibility(true);
  };

  async function submitData(selectedValue, zWarriorId) {
    const pullDocRef = doc(db, "coordinates", selectedValue);
    const docSnap = await getDoc(pullDocRef);

    if (docSnap.exists()) {
      if (docSnap.data().id === zWarriorId) {
        setSelectionResultCorrect("user-selection-correct");

        const removeWarrior = () => {
          setRandomWarriors((current) =>
            current.filter((warrior) => warrior.warrior !== selectedValue)
          );
        };

        const docRef = await addDoc(collection(db, "user-selection"), {
          value: selectedValue,
          coords: zWarriorId,
          createdAt: serverTimestamp(),
        });

        removeWarrior();
        announceGameWInner()
      } else {
        setSelectionResultIncorrect("user-selection-incorrect");
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

    setTimeout(() => {
      setSelectionResultCorrect("no-selection");
      setSelectionResultIncorrect("no-selection");
    }, 1500);
  }


  const announceGameWInner = () =>{

    
    const charactersLeft = randomWarriors.length
    console.log(charactersLeft)
    if(charactersLeft===0){
      setGameLoaded(false)
      console.log("You Won!")
    }
  }

  return (
    <div className="game-wrapper">
      <div className={selectionResultCorrect}>
        Correct!
        <span className="material-symbols-outlined selection-icon">
          verified
        </span>
      </div>
      <div className={selectionResultIncorrect}>
        Try again!
        <span className="material-symbols-outlined selection-icon">
          dangerous
        </span>
      </div>

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

        <area
          alt="random z warrior to guess"
          coords="284,580,386,678"
          shape="rect"
          data-z-warrior="/XVrhk767pEDepQZbLze8g=="
          onClick={getDropdownCoordinates}
        />
      </map>

      {dropdownVisibility && (
        <Dropdown
          clickPosition={dropdownPosition}
          zWarriorId={zWarriorId}
          submitData={submitData}
          randomWarriors={randomWarriors}
        />
      )}
    </div>
  );
}

export default Game;
