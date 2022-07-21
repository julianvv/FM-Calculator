import React, { memo } from "react";
import "./Display.css";



function Display({displayText}) {
  return (
    <div className="display flex justify-end items-center pr-5">
      <p className="display-numbers">{displayText}</p>
    </div>
  );
}

export default memo(Display);