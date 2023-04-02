import React, { useState, useRef } from "react";
import { collection, addDoc,  serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import "../styles/NameToBoard.css"

function NameToBoard({ showNameField, seconds, totalTime, setShowNameField}) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  async function submitData(seconds, totalTime) {
    const value = inputRef.current.value;

    const docRef = await addDoc(collection(db, "leaderboard"), {
      name: value,
      time_minutes: totalTime,
      time_seconds: seconds,
      createdAt: serverTimestamp()
    });

    setShowNameField("no-selection")
  }

  return (
    <div className={showNameField}>
      <div>You can add your record to the leaderboard: </div>
      
      <label for="inp" className="inp" >
        <input
          id="inp"
          placeholder="&nbsp;"
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span class="label">Add Your Name</span>
        <span class="focus-bg"></span>
      </label>

      <button
        type="button"
        className="submit-record"
        onClick={() => submitData(seconds, totalTime)}
      >Submit My Score</button>
    </div>
  );
}

export default NameToBoard;
