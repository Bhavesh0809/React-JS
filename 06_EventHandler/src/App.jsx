import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [themeColor, setThemeColor] = useState("#ffffff");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(inputValue || "");
    alert(`Welcome, ${inputValue}!`);
  };

  const toggleTheme = () => {
    const randomColor = `hsl(${Math.random() * 360}, 70%, 90%)`;
    setThemeColor(randomColor);
  };

  // onMouseOver & onMouseOut
  const handleMouseHover = (status) => {
    setIsHovered(status);
  };

  return (
    <div className="wrapper" style={{ backgroundColor: themeColor }}>
      <div className="card">
        <h1>Event Lab</h1>

        <form onSubmit={handleFormSubmit}>
          <p>Update Profile Name:</p>

          <input
            type="text"
            placeholder="Type your name..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit" className="submit-btn">
            Submit Form
          </button>
        </form>
        <hr />

        <div
          className={`display-area ${isHovered ? "hover-active" : ""}`}
          onMouseOver={() => handleMouseHover(true)}
          onMouseOut={() => handleMouseHover(false)}
        >
          <h2>Hello, {submittedName}!</h2>
          <p>{isHovered ? "You are hovering!" : "Hover over me"}</p>
        </div>

        <button onClick={toggleTheme} className="theme-btn">
          Change Background Color
        </button>
      </div>
    </div>
  );
}

export default App;
