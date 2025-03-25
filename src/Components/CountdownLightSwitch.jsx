import React, { useState, useEffect } from "react";

import "./CountdownLightSwitch.css";

function CountdownLightSwitch() {
  const [theme, setTheme] = useState("dark");

  // Apply theme class to body element when theme changes
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [theme]);

  function ChangeHandler(event) {
    // Toggle between light and dark theme
    setTheme(theme === "dark" ? "light" : "dark");
  }

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
            <div className="progress" id="progress"></div>
          </div>
          <div className="timer" id="timerDisplay">
            30s
          </div>
          <div className="btn-group">
            <button id="startButton">Start Timer</button>
            <button id="resetButton">Reset Timer</button>
          </div>
          <div className="message" id="messageArea"></div>
        </div>
      </div>
    </div>
  );
}

export default CountdownLightSwitch;
