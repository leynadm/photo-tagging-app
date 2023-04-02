import React from "react";
import "../styles/ShowWinner.css";

function ShowWinner({ showWinner, totalTime }) {
  return (
    <div>
      <div className={showWinner}>
        You finished in {totalTime}
        <span className="material-symbols-outlined selection-icon">
          emoticon
        </span>
      </div>
    </div>
  );
}

export default ShowWinner;
