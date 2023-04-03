import React, { useEffect } from "react";
import "../styles/Timer.css";

function Timer({ start, seconds, setSeconds }) {
  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [start]);

  const minutes = Math.floor(seconds / 6000); // 1 minute = 6000ms
  const remainingSeconds = Math.floor((seconds % 6000) / 100); // remaining seconds
  const remainingMs = seconds % 100; // remaining milliseconds

  return (
    <div className="timer">
      <h2>

    {minutes.toString().padStart(2, "0")}:{remainingSeconds.toString().padStart(2, "0")}:{remainingMs.toString().padStart(2, "0")}
      </h2>
    </div>
  );
}

export default Timer;
