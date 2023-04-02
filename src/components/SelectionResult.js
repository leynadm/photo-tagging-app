import React from "react";
import "../styles/SelectionResult.css";

function SelectionResult({ selectionResultCorrect, selectionResultIncorrect }) {
  return (
    <div>
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
    </div>
  );
}

export default SelectionResult;
