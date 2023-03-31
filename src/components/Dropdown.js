import React, { useState, useEffect } from "react";
import "../styles/Dropdown.css";

const Dropdown = ({ clickPosition, zWarriorId,submitData }) => {

  const style = {
    position: "absolute",
    left: `${clickPosition.x}px`,
    top: `${clickPosition.y}px`,
  };

  const [randomWarriors,setRandomWarrios] = useState([{warrior:"songoku",name:"Son Goku"},{warrior:"kingcold",name:"King Cold"},{warrior:"Saibaman",name:"Saiba Man #1"}])

  return (
    <div style={style} className="dropdown">
      <ul>
        <li>
          <button
            type="button"
            onClick={() => submitData(randomWarriors[0].warrior, zWarriorId)}
          >
            {randomWarriors[0].name}
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => submitData(randomWarriors[1].warrior, zWarriorId)}
          >
            {randomWarriors[1].name}
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => submitData(randomWarriors[2].warrior, zWarriorId)}
          >
            {randomWarriors[2].name}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
