import React, { useState } from "react";

function ThemeToggle() {

  const [light, setLight] = useState(false);

  const toggleTheme = () => {

    document.body.classList.toggle("light-mode");

    setLight(!light);

  };


  return (

    <button 
      className="theme-btn"
      onClick={toggleTheme}
    >

      {light ? "🌙 Dark" : "☀️ Light"}

    </button>

  );

}


export default ThemeToggle;
