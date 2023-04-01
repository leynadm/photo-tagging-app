import React, { useState, useEffect } from "react";
import "../styles/Timer.css";

function Timer({ start, seconds, setSeconds }) {
  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [start]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="timer">
      <h2>
        {`${minutes.toString().padStart(2, "0")}:${remainingSeconds
          .toString()
          .padStart(2, "0")}`}
      </h2>
    </div>
  );
}

export default Timer;
