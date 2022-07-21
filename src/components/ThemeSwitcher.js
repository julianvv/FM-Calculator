import React, { memo, useEffect, useState } from "react";
import "./ThemeSwitcher.css";

function ThemeSwitcher({ theme }) {
  const [currentTheme, setCurrentTheme] = useState(theme);

	useEffect(() => {
		//Change calculator-theme attribute to use different CSS
		document.documentElement.setAttribute("data-theme", currentTheme);

    //Save current theme in browser storage
    localStorage.setItem("calculator-theme", currentTheme);
	}, [currentTheme]);
	

  const updateTheme = () => {
    //Update local state to keep track of currentTheme
		//The state change will trigger a re-render
		//Because useEffect has currentTheme as dependency it will add the "calculator-theme" attribute
    if (currentTheme < 3) {
      setCurrentTheme(currentTheme + 1);
    } else {
      setCurrentTheme(1);
    }
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

export default memo(ThemeSwitcher);