import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher.js";
import Display from "./components/Display.js";
import Keyboard from "./components/Keyboard.js";

function App() {
  //Get theme number
  let storedTheme = localStorage.getItem("calculator-theme");

  //Don't do the transition if a theme was saved
  if (storedTheme !== null) {
    document.documentElement.setAttribute("data-theme", storedTheme);
  } else {
    document.documentElement.setAttribute("data-theme", 1);
    localStorage.setItem("calculator-theme", 1);
    storedTheme = 1;
  }

  return (
    <main>
      <div className="calculator">
        <div className="flex items-center">
          <h1 className="title">calc</h1>
          <ThemeSwitcher theme={Number(storedTheme)} />
        </div>
        <div className="flex mt-8">
          <Display displayText={123} />
        </div>
        <div className="flex mt-5">
          <Keyboard />
        </div>
      </div>
    </main>
  );
}

export default App;
