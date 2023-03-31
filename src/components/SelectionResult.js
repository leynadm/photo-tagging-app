import React from "react";

function SelectionResult({props}) {
  <div>
    <div className={props.selectionResultCorrect}>
      Correct!
      <span className="material-symbols-outlined selection-icon">verified</span>
    </div>
    <div className={props.selectionResultIncorrect}>
      Try again!
      <span className="material-symbols-outlined selection-icon">
        dangerous
      </span>
    </div>
  </div>;
}

export default SelectionResult