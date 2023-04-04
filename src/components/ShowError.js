import React from "react";
import "../styles/ShowError.css";

function ShowError({ showError }) {
  return (
    <div>
      <div className={showError}>
        Please click on the head of the character!
        <span className="material-symbols-outlined selection-icon">
          warning
        </span>
      </div>
    </div>
  );
}

export default ShowError;
