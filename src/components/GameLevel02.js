import React, { useState, useEffect, useCallback } from "react";
import imgLevel02 from "../images/level-02.jpg";
import Dropdown from "./Dropdown";
import "../styles/GameLevel02.css";
import imageMapResizerMin from "image-map-resizer";
import WarriorToGuess from "./WarriorToGuess";
import firebase from "../config/firebase";
import { db } from "../config/firebase";
import ShowWinner from "./ShowWinner";
import NameToBoard from "./NameToBoard";

import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
} from "firebase/firestore";

function GameLevel02({ setGameLoaded, seconds, start, setStart, setSeconds }) {
  const [zWarrior, setZWarrior] = useState([
    "Burter",
    "Racoon",
    "Captain Ginyu",
    "Jeice",
    "Guldo",
    "Dodoria",
    "Frieza",
    "Bulma",
    "Tien",
    "Yamcha",
    "Son Gohan",
    "Krilin",
    "Vegeta",
    "Son Goku",
    "Nail",
    "Zarbom",
    "Cui",
    "Dende",
    "Kami",
  ]);

  const [findWarrior, setfindWarrior] = useState("");
  const [findWarriorVisibility, setFindWarriorVisibility] =
    useState("no-selection");
  const [selectedWarriorData, setSelectedWarriorData] = useState("");
  const [showWinner, setShowWinner] = useState("no-selection");
  const [totalTime, setTotalTime] = useState(0);
  const [showNameField, setShowNameField] = useState("no-selection");

  const pullWarriorDoc = useCallback(async (warrior) => {
    const warriorDoc = doc(db, "findthezwarriorcoords", warrior);
    const warriorDocSnap = await getDoc(warriorDoc);

    setSelectedWarriorData(warriorDocSnap.data());
  }, []);

  function showWarriorData() {
    console.log(selectedWarriorData);
  }

  useEffect(() => {
    let rand = Math.floor(Math.random() * 19);
    setfindWarrior(zWarrior[rand]);
    let warriorX = zWarrior[rand];

    pullWarriorDoc(warriorX).then(() => {
      setStart(true);
      setGameLoaded(true);
      setFindWarriorVisibility("warrior-to-guess");

      setTimeout(() => {
        setFindWarriorVisibility("no-selection");
      }, 6000);
    });

    console.log(zWarrior[rand]);
  }, [zWarrior]);

  useEffect(() => {
    return () => {
      setGameLoaded(false);
      setStart(false);
      setSeconds(0);
    };
  }, [pullWarriorDoc]);

  const getDropdownCoordinates = (event) => {
    const clickedElement = event.target;
    const dropdownX = event.clientX;
    const dropdownY = event.clientY;
    const imgWidth = clickedElement.offsetWidth;
    const imgHeight = clickedElement.offsetHeight;
    const percentageWidth = Number((dropdownX / imgWidth).toFixed(2));
    const percentageHeight = Number((dropdownY / imgHeight).toFixed(2));

    if (
      percentageWidth >= selectedWarriorData.left &&
      percentageWidth <= selectedWarriorData.right &&
      percentageHeight >= selectedWarriorData.top &&
      percentageHeight <= selectedWarriorData.bottom
    ) {
      setStart("false");
      setGameLoaded(false);
      setShowNameField("show-name-field");
      setShowWinner("announce-winner");

      const minutes = Math.floor(seconds / 6000); // 1 minute = 6000ms
      const remainingSeconds = Math.floor((seconds % 6000) / 100); // remaining seconds
      const remainingMs = seconds % 100; // remaining milliseconds

      setTotalTime(
        `${minutes.toString().padStart(2, "0")}:${remainingSeconds
          .toString()
          .padStart(2, "0")}:${remainingMs.toString().padStart(2, "0")}`
      );
    } else {
      console.log("It is wrong.");
    }
  };

  function registerRecord() {}

  return (
    <div className="game-wrapper-level02">
      <WarriorToGuess
        findWarriorVisibility={findWarriorVisibility}
        findWarrior={findWarrior}
      />
      <ShowWinner showWinner={showWinner} totalTime={totalTime} />
      <NameToBoard
        showNameField={showNameField}
        seconds={seconds}
        totalTime={totalTime}
        setShowNameField={setShowNameField}
        leaderboardName={"leaderboardfindthezwarrior"}
      />

      <img
        className="game-image"
        src={imgLevel02}
        alt="level 2"
        onClick={getDropdownCoordinates}
      />
    </div>
  );
}

export default GameLevel02;
