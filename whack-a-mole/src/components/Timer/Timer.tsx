import React, { useState, useEffect } from "react";

interface Props {
  onTimerComplete: () => void;
}

const Timer: React.FC<Props> = ({ onTimerComplete }) => {
  const [timeLeft, setTimeLeft] = useState(12000);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimerComplete();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeLeft, onTimerComplete]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer-banner">
      <h1>
        Time Left: {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </h1>
    </div>
  );
};

export default Timer;
