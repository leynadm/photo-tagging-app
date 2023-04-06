import React, { useState, useEffect } from "react";
import imgLevel02 from "../images/level-02.jpg";
import Dropdown from "./Dropdown";
import "../styles/GameLevel02.css";
import imageMapResizerMin from "image-map-resizer";
import WarriorToGuess from "./WarriorToGuess";
import firebase from "../config/firebase";
import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  getDoc
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

  function getData(warrior){

    const pullDocRef = doc(db, "findthezwarriorcoords", zWarrior);
    const docSnap = await getDoc(pullDocRef);
  }

  useEffect(() => {
    let rand = Math.floor(Math.random() * 19);
    setfindWarrior(zWarrior[rand]);

    (async () => {
      try {
        const result = await someAsyncFunction();
        // handle the result here
      } catch (error) {
        // handle the error here
      }
    })();


    console.log(docSnap)
    setTimeout(() => {
      setStart(true);
      setGameLoaded(true);
      setFindWarriorVisibility("warrior-to-guess");
    }, 1000);

    setTimeout(() => {
      setFindWarriorVisibility("no-selection");
    }, 6000);
  }, [zWarrior]);

  useEffect(() => {
    return () => {
      setGameLoaded(false);
      setStart(false);
      setSeconds(0);
    };
  }, []);

  const getDropdownCoordinates = (event) => {
    const clickedElement = event.target;
    const dropdownX = event.clientX;
    const dropdownY = event.clientY;
    const imgWidth = clickedElement.offsetWidth;
    const imgHeight = clickedElement.offsetHeight;
    const domRect = clickedElement.getBoundingClientRect();
    const percentageWidth = dropdownX / imgWidth;
    const percentageHeight = dropdownY / imgHeight;

    console.log(
      "percentage : " +
        parseFloat(percentageWidth).toFixed(2) +
        " " +
        parseFloat(percentageHeight).toFixed(2)
    );
  };

  return (
    <div className="game-wrapper-level02">
      <WarriorToGuess
        findWarriorVisibility={findWarriorVisibility}
        findWarrior={findWarrior}
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
