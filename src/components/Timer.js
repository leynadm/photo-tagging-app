import React, { useState, useEffect } from "react";

function Timer({ start }) {
  const [seconds, setSeconds] = useState(0);

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
    <div>
      <h2>
        {`${minutes.toString().padStart(2, "0")}:${remainingSeconds
          .toString()
          .padStart(2, "0")}`}
      </h2>
    </div>
  );
}

export default Timer;
