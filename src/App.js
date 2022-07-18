import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher.js";
import Display from "./components/Display.js";
import Keyboard from "./components/Keyboard.js";

function App() {
  return (
    <main>
      <div className="calculator">
        <div className="flex items-center">
          <h1 className="title">calc</h1>
          <ThemeSwitcher />
        </div>
        <div className="flex mt-8">
					<Display />
				</div>
        <div className="flex mt-5">
					<Keyboard />
				</div>
      </div>
    </main>
  );
}

export default App;
