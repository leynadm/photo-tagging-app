import React from "react";
import imgLevel01 from "../images/level-01.jpg";
import imgLevel02 from "../images/level-02.jpg";
import imgLevel03 from "../images/level-03.jpg";
import "../styles/Menu.css";
import { useNavigate } from "react-router-dom";
function Menu() {

  const navigate = useNavigate();

  const handleLevel01Click = () => {
    // navigate to the game component
    navigate('/game');
  }

  const handleLevel02Click = () => {
    // navigate to the game component
    navigate('/game');
  }

  const handleLevel03Click = () => {
    // navigate to the game component
    navigate('/game');
  }
  return (
    <div className="menu-wrapper">
      <div className="menu-tile">
        <img className="level-image" src={imgLevel01} alt="level 1"></img>
        <button className="menu-button" type="button" onClick={handleLevel01Click} >Select Level 01</button>
      </div>

      <div className="menu-tile">
        <img className="level-image" src={imgLevel02} alt="level 2"></img>
        <button className="menu-button" type="button" onClick={handleLevel02Click}>Select Level 02</button>
      </div>

      <div className="menu-tile">
        <img className="level-image" src={imgLevel03} alt="level 3"></img>
        <button className="menu-button" type="button" onClick={handleLevel03Click}>Select Level 03</button>
      </div>
    </div>
  );
}

export default Menu;
