import React, { useState, useEffect } from "react";
import "../styles/Dropdown.css";

const Dropdown = ({
  clickPosition,
  zWarriorId,
  submitData,
  randomWarriors,
}) => {
  const style = {
    position: "absolute",
    left: `${clickPosition.x}px`,
    top: `${clickPosition.y}px`,
  };
  return (
    <div style={style} className="dropdown">
      <ul>
        {randomWarriors.map((warrior, index) => (
          <li key={index}>
            <button
              className="dropdown-btn"
              type="button"
              onClick={() => submitData(warrior.warrior, zWarriorId)}
            >
              {warrior.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
