import React from "react";
import imgLevelBlur01 from "../images/level-01-blur.png";
import imgLevelBlur02 from "../images/level-02-blur.png";
import imgLevelBlur03 from "../images/level-03-blur.png";
import "../styles/Menu.css";
import { useNavigate } from "react-router-dom";
function Menu() {
  const navigate = useNavigate();

  const handleLevel01Click = () => {
    // navigate to the game component
    navigate("/game");
  };

  const handleLevel02Click = () => {
    // navigate to the game component
    navigate("/game");
  };

  const handleLevel03Click = () => {
    // navigate to the game component
    navigate("/game");
  };
  return (
    <div className="menu-wrapper">
      <div className="menu">
        <div className="menu-tile">
          <img className="level-image" src={imgLevelBlur01} alt="level 1"></img>
          <button
            className="menu-button"
            type="button"
            onClick={handleLevel01Click}
          >
            Select Level 01
          </button>
        </div>
        <div className="level-instructions">
          Label all Z warriors as fast as possible!<br></br>Make sure to click
          on their head in order for your selection to count.
        </div>
      </div>

    <div>
      <div className="menu-tile">
        <img className="level-image" src={imgLevelBlur02} alt="level 2"></img>
        <button
          className="menu-button"
          type="button"
          onClick={handleLevel02Click}
        >
          Select Level 02
        </button>
      </div>
      <div className="level-instructions">
          Find the Z warrior prompted to you as quickly as you can!<br></br>Make sure to click
          on their head in order for your selection to count.
        </div>
      </div>
      <div>
      <div className="menu-tile">
        <img className="level-image" src={imgLevelBlur03} alt="level 3"></img>
        <button
          className="menu-button"
          type="button"
          onClick={handleLevel03Click}
        >
          Select Level 03
        </button>
      </div>
      <div className="level-instructions">
          The same as level 2 but harder!<br></br>Make sure to click
          on their head in order for your selection to count.
        </div>
      </div>
    </div>
  );
}

export default Menu;
