import React from "react";
import "./CountdownLightSwitch.css";

function CountdownLightSwitch() {
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>Countdown & Light Switch</h1>
          <div classNameName="toggle-container">
            <label classNameName="toggle-switch">
              <input type="checkbox" id="themeToggle" />
              <span classNameName="slider"></span>
            </label>
            <span>Light Mode</span>
          </div>
        </div>

        <div classNameName="timer-section">
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
