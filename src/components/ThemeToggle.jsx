import React from "react";

function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle("light-mode");
  };

  return (
    <button onClick={toggleTheme}>
      🌙 / ☀️
    </button>
  );
}

export default ThemeToggle;
