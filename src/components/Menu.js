import React from "react";
import imgLevel01 from "../images/level-01.jpg";
import imgLevel02 from "../images/level-02.jpg";
import imgLevel03 from "../images/level-03.jpg";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="menu-tile">
        <img className="level-image" src={imgLevel01} alt="level 1"></img>
      </div>

      <div className="menu-tile">
        <img className="level-image" src={imgLevel02} alt="level 2"></img>
      </div>

      <div className="menu-tile">
        <img className="level-image" src={imgLevel03} alt="level 3"></img>
      </div>
    </div>
  );
}

export default Menu;
