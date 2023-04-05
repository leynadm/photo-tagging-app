import React, { useState, useEffect } from "react";
import imgLevel02 from "../images/level-02.jpg";
import Dropdown from "./Dropdown";
import "../styles/GameLevel02.css";
import imageMapResizerMin from "image-map-resizer";

function GameLevel02() {
  const [zWarrior, setZWarrior] = useState([
    { name: "Burter", top: 0.3, bottom: 0.36, left: 0.5, right: 0.55 },
    {
      name: "Racoon",
      top: 0.39,
      bottom: 0.53,
      left: 0.5,
      right: 0.48,
    },
    {
      name: "Captain Ginyu",
      top: 0.56,
      bottom: 0.64,
      left: 0.5,
      right: 0.59,
    },
    {
      name: "Jeice",
      top: 0.52,
      bottom: 0.75,
      left: 0.7,
      right: 0.54,
    },
    {
      name: "Guldo",
      top: 0.52,
      bottom: 0.89,
      left: 0.49,
      right: 0.54,
    },
    {
      name: "Dodoria",
      top: 0.56,
      bottom: 0.67,
      left: 0.14,
      right: 0.61,
    },
    {
      name: "Frieza",
      top: 0.77,
      bottom: 0.85,
      left: 0.15,
      right: 0.2,
    },
    {
      name: "Bulma",
      top: 0.64,
      bottom: 0.74,
      left: 0.24,
      right: 0.28,
    },
    {
      name: "Tien",
      top: 0.58,
      bottom: 0.67,
      left: 0.32,
      right: 0.63,
    },
    {
      name: "Yamcha",
      top: 0.58,
      bottom: 0.68,
      left: 0.38,
      right: 0.44,
    },
    {
      name: "Son Gohan",
      top: 0.79,
      bottom: 0.88,
      left: 0.58,
      right: 0.63,
    },
    {
      name: "Krilin",
      top: 0.76,
      bottom: 0.84,
      left: 0.64,
      right: 0.67,
    },
    {
      name: "Vegeta",
      top: 0.68,
      bottom: 0.77,
      left: 0.65,
      right: 0.7,
    },
    {
      name: "Son Goku",
      top: 0.6,
      bottom: 0.68,
      left: 0.73,
      right: 0.8,
    },
    {
      name: "Nail",
      top: 0.51,
      bottom: 0.6,
      left: 0.79,
      right: 0.84,
    },
    {
      name: "Zarbom",
      top: 0.58,
      bottom: 0.66,
      left: 0.87,
      right: 0.91,
    },
    {
      name: "Cui",
      top: 0.64,
      bottom: 0.73,
      left: 0.07,
      right: 0.12,
    },
    {
      name: "Dende",
      top: 0.85,
      bottom: 0.94,
      left: 0.31,
      right: 0.34,
    },
    {
      name: "Kami",
      top: 0.52,
      bottom: 0.62,
      left: 0.27,
      right: 0.32,
    },
  ]);

  const [foundWarrior, setFoundWarrior] = useState("");

  useEffect(() => {
    let rand = Math.floor(Math.random() * 19);
    setFoundWarrior(zWarrior[rand].name);
    console.log(foundWarrior)
}, [zWarrior]);


  const getDropdownCoordinates = (event) => {
    const clickedElement = event.target;
    const dropdownX = event.clientX;
    const dropdownY = event.clientY;
    const imgWidth = clickedElement.offsetWidth;
    const imgHeight = clickedElement.offsetHeight;
    const domRect = clickedElement.getBoundingClientRect();
    /* 
    console.log(imgWidth);
    console.log(imgHeight);
    console.log(dropdownX + " " + dropdownY);
    console.log(domRect);
 */
    const percentageWidth = dropdownX / imgWidth;
    const percentageHeight = dropdownY / imgHeight;

    /* 
    console.log(
      "percentage : " +
        parseFloat(percentageWidth).toFixed(2) +
        " " +
        parseFloat(percentageHeight).toFixed(2)
    );
     */
  };

  function checkUserSelection() {}

  return (
    <div className="game-wrapper-level02">
       
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
