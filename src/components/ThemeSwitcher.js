import React, { useState } from "react";
import "./ThemeSwitcher.css";

export default function ThemeSwitcher({ theme }) {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const updateTheme = () => {
    //Update local state to keep track of currentTheme
    if (currentTheme < 3) {
      setCurrentTheme(currentTheme + 1);
    } else {
      setCurrentTheme(1);
    }

    document.documentElement.setAttribute("data-theme", currentTheme);

    //Save current theme in browser storage
    localStorage.setItem("theme", currentTheme);
  };

  return (
    <div className="ml-auto flex items-end">
      <p className="theme-text mr-4">theme</p>
      <div className="flex flex-col">
        <div className="flex gap-3 mx-2">
          <p className="theme-number">1</p>
          <p className="theme-number">2</p>
          <p className="theme-number">3</p>
        </div>
        <button
          className="slider flex items-center"
          onClick={() => updateTheme()}
        >
          <div className="ball" />
        </button>
      </div>
    </div>
  );
}
