import React from "react";
import "./ThemeSwitcher.css";

export default function ThemeSwitcher() {
  return (
    <div className="ml-auto flex items-end">
      <p className="theme-text mr-4">theme</p>
      <div className="flex flex-col">
        <div className="flex gap-3 mx-2">
          <p className="theme-number">1</p>
          <p className="theme-number">2</p>
          <p className="theme-number">3</p>
        </div>
        <div className="slider flex items-center">
          <div className="ball" />
        </div>
      </div>
    </div>
  );
}
