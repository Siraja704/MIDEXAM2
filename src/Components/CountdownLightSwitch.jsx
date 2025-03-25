import React, { useState, useEffect } from "react";

import "./CountdownLightSwitch.css";

function CountdownLightSwitch() {
  //all the useStates
  const [theme, setTheme] = useState("dark");
  const [seconds, setSeconds] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  // Applies theme class to body element when theme changes
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [theme]);

  // Toggle between light and dark theme
  function ChangeHandler(event) {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  // Timer effect to handle countdown
  useEffect(() => {
    let interval = null;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds - 1;

          const newProgress = ((30 - newSeconds) / 30) * 100;
          setProgress(newProgress);

          return newSeconds;
        });
      }, 1000);
    } else if (isRunning && seconds === 0) {
      setIsRunning(false);
      setMessage("Time's Up!");

      setTheme(theme === "dark" ? "light" : "dark");
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, seconds, theme]);

  // Start the timer
  function startTimer() {
    if (!isRunning && seconds > 0) {
      setIsRunning(true);
      setMessage("");
    }
  }

  // Reset the timer
  function resetTimer() {
    setIsRunning(false);
    setSeconds(30);
    setProgress(0);
    setMessage("");
  }

  //html code
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>Countdown & Light Switch</h1>
          <div className="toggle-container">
            <label className="toggle-switch">
              <input
                onChange={ChangeHandler}
                type="checkbox"
                checked={theme === "light"}
                className={theme}
              />
              <span className="slider"></span>
            </label>
            <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
          </div>
        </div>

        <div className="timer-section">
          <div className="progress-bar">
            <div
              className="progress"
              id="progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="timer" id="timerDisplay">
            {seconds}s
          </div>
          <div className="btn-group">
            <button id="startButton" onClick={startTimer}>
              Start Timer
            </button>
            <button id="resetButton" onClick={resetTimer}>
              Reset Timer
            </button>
          </div>
          <div className="message" id="messageArea">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownLightSwitch;
