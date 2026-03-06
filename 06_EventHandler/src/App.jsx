import React, { useState } from 'react';
import './App.css';

function App() {
  // State for different event data
  const [inputValue, setInputValue] = useState('');
  const [submittedName, setSubmittedName] = useState('Guest');
  const [isHovered, setIsHovered] = useState(false);
  const [themeColor, setThemeColor] = useState('#ffffff');

  // 1. onChange: Updates as you type
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 2. onSubmit: Prevents page refresh and saves data
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Crucial: stops the browser from reloading
    setSubmittedName(inputValue || 'Guest');
    alert(`Welcome, ${inputValue}!`);
  };

  // 3. onClick: Changes the UI theme
  const toggleTheme = () => {
    const randomColor = `hsl(${Math.random() * 360}, 70%, 90%)`;
    setThemeColor(randomColor);
  };

  // 4. onMouseOver & onMouseOut: Tracks the cursor
  const handleMouseHover = (status) => {
    setIsHovered(status);
  };

  return (
    <div className="wrapper" style={{ backgroundColor: themeColor }}>
      <div className="card">
        <h1>Event Lab</h1>
        
        {/* onSubmit Practice */}
        <form onSubmit={handleFormSubmit}>
          <p>Update Profile Name:</p>
          
          {/* onChange Practice */}
          <input 
            type="text" 
            placeholder="Type your name..." 
            value={inputValue}
            onChange={handleInputChange} 
          />
          <button type="submit" className="submit-btn">Submit Form</button>
        </form>

        <hr />

        {/* onMouseOver Practice */}
        <div 
          className={`display-area ${isHovered ? 'hover-active' : ''}`}
          onMouseOver={() => handleMouseHover(true)}
          onMouseOut={() => handleMouseHover(false)}
        >
          <h2>Hello, {submittedName}!</h2>
          <p>{isHovered ? "You are hovering!" : "Hover over me"}</p>
        </div>

        {/* onClick Practice */}
        <button onClick={toggleTheme} className="theme-btn">
          Change Background Color
        </button>
      </div>
    </div>
  );
}

export default App;